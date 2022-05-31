import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


const ManBotListItems = () => {
  return (
    
<Stack  direction="row"justifyContent="flex-start"alignItems="stretch" spacing={2} sx={{width: "100%", mt: 5}} >
  <Box sx={{flex:1}}>
    <Typography variant="h6" align="center" >
      Информация
    </Typography>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center"  primary="Условия" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Доставка" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Формуляр за предявяване рекламации" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Политика за Поверителност" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Онлайн решаване на спорове" />
            </ListItemButton>
        </ListItem>
     </List>
     </Box>
     <Box sx={{flex:1}}>
    <Typography variant="h6" align="center" >
      Информация
    </Typography>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center"  primary="Условия" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Доставка" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Формуляр за предявяване рекламации" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Политика за Поверителност" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Онлайн решаване на спорове" />
            </ListItemButton>
        </ListItem>
     </List>
     </Box>
     <Box sx={{flex:1}}>
    <Typography variant="h6" align="center" >
      Информация
    </Typography>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center"  primary="Условия" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Доставка" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Формуляр за предявяване рекламации" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Политика за Поверителност" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Онлайн решаване на спорове" />
            </ListItemButton>
        </ListItem>
     </List>
     </Box>
     <Stack sx={{flex:2}}  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}>
       <Box sx={{height: "50%"}}>
       <Typography variant="h6" align="center" >
      Информация
    </Typography>
       <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Пон-Пет: 9.00 – 18.00 часа" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="Неделя: почивен ден" />
            </ListItemButton>
        </ListItem>
     </List>
       </Box>
       <Box>
       <Typography variant="h6" align="center" >
       КОНТАКТИ:
    </Typography>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText align="center"  primary="0932392302323" />
            </ListItemButton>
        </ListItem>
     </List>
       </Box>
       <Box sx={{height: "50%"}}></Box>
     </Stack>
  
   
 
        </Stack>
  )
}

export default ManBotListItems;