import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

const ListItems = () => {
  return (
        <Stack  direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2} sx={{width: "100%", mt: 5}} >
    <Box sx={{flex:1}}>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     </Box>
     <Box sx={{flex:1}}>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     </Box>
     <Box sx={{flex:1}}>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
        </ListItem>
     </List>
     </Box>
        </Stack>
  )
}

export default ListItems;