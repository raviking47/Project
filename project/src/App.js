import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowProduct from './Components/ShowProduct'
import UpdateProduct from './Components/UpdateProduct'
import ProductDetails from './Components/ProductDetails'
import StatusBar from './Components/StatusBar'
import AddProduct from './Components/AddProduct'
import PrivateComponent from './Components/PrivateComponent'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
export default function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ShowProduct/>}/>
        <Route path="/update/:_id" element={<UpdateProduct/>} />
        <Route path="/productdetails/:_id" element={<ProductDetails/>} />
        <Route path="/statusbar" element={<StatusBar/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/logout" element={<h1>logout Component</h1>} />
        </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          
      </Routes>
      </BrowserRouter>

    </div>
  )
}
