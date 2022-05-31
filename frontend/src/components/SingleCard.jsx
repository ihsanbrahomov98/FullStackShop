import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const SingleCard = () => {
  return (
  <>
  <Card sx={{ flex: 1 }}>
  
        <CardMedia
          component="img"
          height="240"
          image="https://eobuvki.bg/img/cats/p_108_1.jpg"
          alt="green iguana"
        />
        <CardContent sx={{bgcolor: 'secondary.main'}} >

       <Typography align="center" color="common.white"  >
         Man Shoes
       </Typography>
        </CardContent>
    
    </Card>
  </>
  )
}

export default SingleCard