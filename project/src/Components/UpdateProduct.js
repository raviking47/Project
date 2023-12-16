import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'

export default function UpdateProduct() {
 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const  params = useParams();
  const navigate =  useNavigate()
  useEffect(()=>{
    getProductDetails();
  },[])
  const getProductDetails= async()=>{
    console.warn(params._id)
    let result =  await fetch(`http://localhost:5000/product/${params._id}`,{
      method:'Get'
    });
    console.warn(result.company )
    result = await result.json()
    setName(result.name)
    setCompany(result.company)
    setPrice(result.price)
    setCategory(result.category)
  }
  const updateProduct = async ()=>{
     console.log(name,company,price,category)
     let result = await fetch(`http://localhost:5000/product/${params._id}`,{
      method:'Put',
      body:JSON.stringify({name,company,price,category}),
      headers:{
        'Content-Type':'application/json'
      }
    
     })
    navigate('/')
    }
   
  return (
   <Container>
     <Box shadow={"2px 4px 8px black"} padding={"20px"} mt={"20px"} borderWidth={"2px"} borderColor={"black"} display={"flex"} >
        <VStack>
      <Heading className="my-2  mx-3">Update Product</Heading>
     <FormControl>
      <FormLabel> Product Name </FormLabel>
      <Input  type="text"
        placeholder="Enter Product Name"
        className="inputbox"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      
     </FormControl>
     <FormControl>
      <FormLabel> Product Price </FormLabel>
      <Input  type="number"
        placeholder="Enter Price"
        className="inputbox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      </FormControl>
      <FormControl>
      <FormLabel> Product Catagory </FormLabel>
      <Input  type="text"
        placeholder="Enter category"
        className="inputbox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      </FormControl>
      <FormControl>
      <FormLabel> Product Company </FormLabel>
      <Input  type="text"
        placeholder="Enter company"
        className="inputbox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      </FormControl>
      <Button colorScheme="blue" onClick={updateProduct} >Update Product</Button>
      </VStack>
    </Box>
   </Container>
  );
}
