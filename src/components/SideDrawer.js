import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const SideDrawer = (props) => {


    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
        >
        
        <List component="nav">   
            <ListItem button component={Link} to="/" style={{ padding: 20}}>
                Sign up
            </ListItem>  
            <ListItem button component={Link} to="/dashboard" style={{ padding: 20}}>
                Dashboard
            </ListItem>                  
        </List>
      

        </Drawer>
    );
};

export default SideDrawer;