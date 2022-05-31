import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';





const BlackLine = () => {
  return ( 
    <>
    <Stack direction="row"
    justifyContent="space-around"
    alignItems="center"
    spacing={2} back sx={{height: 75,  bgcolor: 'secondary.main', p: 1.5}} >

            <Box>
            <Typography variant="h6" color="common.white">
            This text should be white
            </Typography>
            </Box>
            <Box>
            <Typography variant="h6" color="common.white">
            This text should be white
            </Typography>
            </Box>
            
          
    </Stack>
          <Box sx={{height: 25}} >

           </Box>
    </>
  )
}

export default BlackLine