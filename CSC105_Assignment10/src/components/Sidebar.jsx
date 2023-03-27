import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';
import { List, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WebIcon from "@mui/icons-material/Web";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const menuItems = [
    { label: "Homepage", icon: <HomeIcon /> },
    { label: "Pages", icon: <WebIcon /> },
    { label: "Groups", icon: <GroupIcon /> },
    { label: "Marketplace", icon: <StorefrontIcon /> },
    { label: "Friends", icon: <PeopleIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Profile", icon: <AccountCircleIcon /> },
  ];
  
  const Sidebar = () => {
    return (
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;