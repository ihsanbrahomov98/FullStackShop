import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Cards() {
  return (
      <Stack  direction="row"justifyContent="space-around" alignItems="flex-start" spacing={2} sx={{height: 200, mt: 45}}   >
    <Card sx={{ flex: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://eobuvki.bg/img/img_e_shop/thumbs/p_1007054_3.jpg"
          alt="green iguana"
        />
    
      </CardActionArea>
    
    </Card>
    <Card sx={{ flex: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://eobuvki.bg/img/img_e_shop/thumbs/p_1007050_3.jpg"
         alt="green iguana"
        />
      
      </CardActionArea>
    </Card>
    <Card sx={{ flex: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://eobuvki.bg/img/img_e_shop/thumbs/p_1007045_3.jpg"
          alt="green iguana"
        />
      </CardActionArea>
   
    </Card>
    </Stack>
  );
}
