import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {Card,CardBody,Image,Stack ,Heading,Text,Divider,CardFooter,ButtonGroup,Button,Box} from '@chakra-ui/react';
export default function ShowProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Product Delete");
      getProducts();
    }
  };
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"} padding={"40px"} >
     
      {products.map((item, index) => (
       <Card
       direction={{ base: 'column', sm: 'row' }}
       overflow='hidden'
       variant='outline'
     >
       <Image
         objectFit='cover'
         maxW={{ base: '100%', sm: '200px' }}
         src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
         alt='Caffe Latte'
       />
     
       <Stack>
         <CardBody>
           <Heading size='md'>{item.Name}</Heading>
           <Heading size='md'>{item.price}</Heading>
     
           <Text py='2'>
             {item.category}
           </Text>
           <Text py='2'>
             {item.company}
           </Text>
         </CardBody>
     
         <CardFooter>
           <Button onClick={()=>deleteProduct(item._id)} variant='solid' colorScheme='red'>
             Remove
           </Button>
           <Link to={"/update/"+item._id}><Button  ml={2} colorScheme="blue" >Update</Button></Link>
           <Link to={"/productdetails/"+item._id}><Button  ml={2} colorScheme="blue" >Product Details</Button></Link>
         </CardFooter>
       </Stack>
     </Card>
      ))}
    </Box>
  );
}