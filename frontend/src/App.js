import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react'
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import LoginForm from "./components/LoginForm"
import ProductsMan from "./pages/products/ProductsMan"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingleProduct from "./pages/singleProductPage/SingleProduct"




const theme = createTheme({
  palette: {
  
    secondary: {
      main: '#000000',
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<LoginForm/>} />
    <Route path="/products/man" element={<ProductsMan/>} />
    <Route path="/products/man/singleproduct" element={<SingleProduct/>} />
   
  </Routes>
  </BrowserRouter>
  </ThemeProvider>
  )
}

export default App