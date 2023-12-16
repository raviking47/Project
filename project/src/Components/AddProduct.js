import { Box, Button, Container, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// var Barcode = require('react-barcode');
export default function AddProduct () {
  const [show, setShow] = useState(1)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState(false)
  
  const Navigate = useNavigate()
  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true)
      
      return false
    }
    const userId = JSON.parse(localStorage.getItem('user'))._id
    let result = await fetch('http://localhost:5000/add-product', {
      method: 'post',
      body: JSON.stringify({ name, price, category, userId, company }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json()
    console.warn(result)
    Navigate ('/')
    setShow(0)
  } 
  return (
    <Container>
    <Box shadow={"2px 4px 8px black"} padding={"20px"} mt={"20px"} borderWidth={"2px"} borderColor={"black"}>
     
        <div >
          <Heading>Add Product</Heading>
          <Input
            type='text'
            placeholder='Enter Product Name'
            mt={"20px"}
            onChange={e => {
              setName(e.target.value)
            }}
            value={name}
          />
          {error && !name && (
            <span className='invalid-input'>Enter valid name</span>
          )}
          <Input
            type='number'
            placeholder='Enter The Price'
            mt={"20px"}
            onChange={e => {
              setPrice(e.target.value)
            }}
            value={price}
          />
          {error && !price && (
            <span className='invalid-input'>Enter valid Price</span>
          )}
          <Input
            type='text'
            placeholder='Enter category'
             mt={"20px"}
            onChange={e => {
              setCategory(e.target.value)
            }}
            value={category}
          />
          {error && !category && (
            <span className='invalid-input'>Enter valid Category</span>
          )}
          <Input
            type='text'
            placeholder='Enter company'
            mt={"20px"}
            onChange={e => {
              setCompany(e.target.value)
            }}
            value={company}
          />
          {error && !company && (
            <span className='invalid-input'>Enter valid Company</span>
          )}
          <Button variant={"solid"} mt={"20px"} colorScheme='blue' onClick={addProduct} >
            Add Product
          </Button>
        </div>
     
    </Box>
    </Container>
  )
}