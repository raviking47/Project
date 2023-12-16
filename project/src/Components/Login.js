import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Heading, Input } from '@chakra-ui/react'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  navigate =  useNavigate();

  useEffect(()=>{
  const auth = localStorage.getItem('user');
  if(auth){
    navigate('/')
  }
  },[])
  const handleLogin = async() => {
    console.warn(email, password);
    let result = await fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result = await result.json()
    if (result.name){
        localStorage.setItem('user',JSON.stringify(result))
        navigate('/')
    }else{
      alert('No user found')
    }
  };
  return (
    
    <Container centerContent>
    <Box shadow={"2px 4px 8px black"} padding={"20px"} mt={"20px"} borderWidth={"2px"} borderColor={"black"} >
      <Heading>Login</Heading>
      <Input
        type="text"
        placeholder="Enter you Email"
        mt={"20px"}

        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="password"
        mt={"20px"}
      
        placeholder="Enter you Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button  mt="20px" variant={"solid"} colorScheme="blue" onClick={handleLogin} >
        Login
      </Button>
    </Box>
    </Container>

  );
}
