import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import mockData from './mockData';

const SingleCard = () => {
  const [products, setProducts] = useState([])

useEffect(()=>{
  const fetchproducts = async() =>{
    const {data} = await axios.get("/back/mock/api/products")
    setProducts(data);
    console.log(products);
  }
  fetchproducts();
},[])


  return (
  <>
     {products.map((product)=> (
           <Link to={"/products/man/singleproduct"}>
           <Card sx={{ flex: 1 }}>
                
                 <CardMedia
                   component="img"
                   height="240"
                   image={product.image}
                   alt={product.name}
                 />
                 <CardContent sx={{bgcolor: 'secondary.main'}} >
                
         
                <Typography align="center" color="common.white"  >
                 {product.description}
                </Typography>
                 </CardContent>
             
             </Card>
             </Link>

          ))}
 
  </>
  )
}

export default SingleCard