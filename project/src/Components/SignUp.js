import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; 



export default function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();

  useEffect(()=>{
    const auth =  localStorage.getItem('user')
    if(auth){
       navigate('/')  
    }
  })
  const collectData = async()=>{
    console.warn(name,email,password)
    let result = await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result = await result.json()
    console.warn( result)
    localStorage.setItem("user",JSON.stringify(result))
    if(result){
      navigate('/')
    }
  }

  return (
        <Container centerContent>
    <Box shadow={"2px 4px 8px black"} padding={"20px"} mt={"20px"} borderWidth={"2px"} borderColor={"black"} >
      <Heading centerContent >Register</Heading>
      <Input
        placeholder="Enter Name "
        value={name}
        mt={"20px"}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        mt={"20px"}
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        mt={"20px"}
        type="password"
        placeholder="Enter Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button mt={"20px"}  colorScheme="blue" variant={"solid"} onClick={collectData} >
        Sign Up
      </Button>
    </Box>
    </Container>
  );
}
