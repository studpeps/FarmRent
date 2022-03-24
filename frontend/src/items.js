import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import { useHistory } from 'react-router-dom';



function Items({setcomponent}){
  

  return(
    <React.Fragment>
    <ListItemButton onClick={() => setcomponent('profile')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton onClick={() => setcomponent('createItem')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Create Item" />
    </ListItemButton>
    <ListItemButton onClick={() => setcomponent('orders')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton onClick={() => setcomponent('itemsPosted')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Items Posted" />
    </ListItemButton>
  </React.Fragment>
  )
}

export default Items;