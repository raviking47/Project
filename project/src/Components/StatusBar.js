import React, { useEffect, useState } from 'react'
import { Box ,Card,CardHeader,CardBody,CardFooter,Heading,Text,Button} from '@chakra-ui/react'
// import GraphComponent from './GraphComponents';
import HistogramComponent from './HistrogramComponent';
import ChartComponent from './ChartComponent';
import ShowProduct from './ShowProduct';
export default function StatusBar() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product");
    result = await result.json();
    setProducts(result);
  };
   console.log(products)
  return (
    <Box>
    <Box display={"flex"} justifyContent={'space-around'} padding={"20px"}>
      
    <Card width={"300px"} borderColor={"black"} borderWidth={"2px"} shadow={"2px 4px 8px black"} >
  <CardHeader>
    <Heading size='2xl'> {products.length}</Heading>
  </CardHeader>
  <CardBody>
    <Text>Total Order</Text>
  </CardBody>
 
</Card>
      <Card width={"300px"} borderColor={"black"} borderWidth={"2px"} shadow={"2px 4px 8px black"}>
  <CardHeader>
    <Heading size='2xl'> 152</Heading>
  </CardHeader>
  <CardBody>
    <Text>New Stock</Text>
  </CardBody>
 
</Card>
<Card width={"300px"} borderColor={"black"} borderWidth={"2px"} shadow={"2px 4px 8px black"}>
  <CardHeader>
    <Heading size='2xl'> 100</Heading>
  </CardHeader>
  <CardBody>
    <Text>Dead Stock</Text>
  </CardBody>
 
</Card>

<Card width={"300px"} borderColor={"black"} borderWidth={"2px"} shadow={"2px 4px 8px black"} >
  <CardHeader>
    <Heading size='2xl'> 25</Heading>
  </CardHeader>
  <CardBody>
    <Text>Total Leads</Text>
  </CardBody>
 
</Card>,
<Card width={"300px"} borderColor={"black"} borderWidth={"2px"} shadow={"2px 4px 8px black"} >
  <CardHeader>
    <Heading size='2xl'>1,11,220 </Heading>
  </CardHeader>
  <CardBody>
    <Text>Total Revenue</Text>
  </CardBody>
 
</Card>
    </Box>
    <ShowProduct/>
</Box>
  )
}