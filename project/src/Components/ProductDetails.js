import { Box, Button, ButtonGroup, Center, Container, FormControl, FormHelperText, FormLabel, Heading, Image, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from 'react-router-dom'
import Barcode from 'react-jsbarcode';

export default function ProductDetails() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    getProductDetails();
  }, [])
  const getProductDetails = async () => {
    console.warn(params._id)
    let result = await fetch(`http://localhost:5000/product/${params._id}`, {
      method: 'Get'
    });
    console.warn(result.company)
    result = await result.json()
    setName(result.name)
    setCompany(result.company)
    setPrice(result.price)
    setCategory(result.category)
  }
  const handlePrint = () => {
    window.print();
  };

  return (

    <Container >
      <Box shadow={"2px 4px 8px black"} padding={"20px"} mt={"20px"} borderWidth={"2px"} borderColor={"black"} display={"flex"} >
        <VStack>
         <Barcode displayValue="false" value={JSON.stringify(name)} options={{ format: 'code128' }}/>
          <Heading className="my-2  mx-3"> Product details</Heading>
          <Center></Center>
          <FormControl>
            <FormLabel>Name of Product</FormLabel>
            <Input isDisabled value={name}type='email' />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input isDisabled value={price}type='email' />
          </FormControl>
          <FormControl>
            <FormLabel>Catagory</FormLabel>
            <Input isDisabled value={category}type='email' />
          </FormControl>
          <FormControl>
            <FormLabel>Name of Company</FormLabel>
            <Input isDisabled value={company}type='email' />
          </FormControl>
          <ButtonGroup>
          <Button colorScheme="blue" variant={"solid"} onClick={handlePrint}>Print details with Barcode</Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </Container>
  );
}
