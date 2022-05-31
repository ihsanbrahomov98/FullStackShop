import { Stack,Box,Typography } from '@mui/material'
import React from 'react'
import SingleCard from './SingleCard';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from  '../app/features/counterSlice'

const SingleProductMain = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
      <>
    <Stack  direction="row"justifyContent="center" alignItems="flex-start"spacing={4} sx={{margin: 12, height: 800}}>
    <Stack sx={{flex:1, height:700}}>
        <SingleCard/>
    </Stack>
        <Stack direction="column"justifyContent="center"alignItems="center" spacing={2} sx={{flex:1, height:700}}>
            <Stack  direction="row"justifyContent="center"alignItems="center"spacing={1} sx={{flex:1}}>
                <Typography varian="h4">80 лв.</Typography>
                <Typography varian="h6">каталожен №501-3100.</Typography>
                
            </Stack>
       
            <Box sx={{flex:1}}>
            <Button size="small" variant="outlined" onClick={() => dispatch(increment())}>+</Button>
            <Button size="small" variant="outlined">{count}</Button>
            <Button size="small" variant="outlined" onClick={() => dispatch(decrement())}>-</Button>
           
            </Box>
            
            <Box sx={{flex:1}}></Box>
            <Button size="large" variant="outlined">Buy</Button>
            <Box sx={{flex:1}}></Box>
            <Box sx={{flex:4}}></Box>
            


        </Stack>
        <Stack sx={{flex:1, height:700}}></Stack>


    </Stack>
    </>
  )
}

export default SingleProductMain
