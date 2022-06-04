import { Stack } from '@mui/material';
import React from 'react';
import SingleCard from './SingleCard';
import { Link } from 'react-router-dom';

const CardGrid = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
        sx={{ ml: 5, mr: 5, mt: 5 }}
      >
        {/* <SingleCard>

     </SingleCard>
     <SingleCard></SingleCard>
     <SingleCard></SingleCard> */}
        <SingleCard></SingleCard>
      </Stack>
      {/* <Stack direction="row"justifyContent="center" alignItems="flex-start" spacing={3} sx={{ml:5, mr:5,mt:5}}>
     <SingleCard></SingleCard>
     <SingleCard></SingleCard>
     <SingleCard></SingleCard>
     <SingleCard></SingleCard>

 </Stack>
 <Stack direction="row"justifyContent="center" alignItems="flex-start" spacing={3} sx={{ml:5, mr:5,mt:5}}>
     <SingleCard></SingleCard>
     <SingleCard></SingleCard>
     <SingleCard></SingleCard>
     <SingleCard></SingleCard>

 </Stack> */}
    </>
  );
};

export default CardGrid;
