import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  
    border: `2px solid ${theme.palette.background.paper}`,
   
  },
}));



const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return ( <>
    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} back sx={{height: 45, bgcolor: 'primary.main'}} >
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start"spacing={2}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start"spacing={2}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start"spacing={2}>
            <Box>1</Box>
            <Box>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={count} color="secondary">
                <AccountBoxRoundedIcon />
               </StyledBadge>
            </IconButton>
            </Box>
            <Box>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={count} color="secondary">
                <ShoppingCartIcon />
               </StyledBadge>
            </IconButton>
            </Box>
           
        </Stack>


    </Stack>
    
    <Stack direction="row"  justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{height: 25, bgcolor: 'primary.main'}} >
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>

    </Stack>
    </>
  )
}

export default Navbar
