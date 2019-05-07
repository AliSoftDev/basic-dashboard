import React, { Component } from 'react';

//material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import SideDrawer from './SideDrawer';

const styles = {
    appBarStyle: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#4E96DD'
    },
    MenuIconStyle: {
       marginLeft: '1550px',
       
    }
}


class BurgerMenu extends Component {

    state = { showDrawer: false }

    // Event handlers

    drawerToggle = (value) => {
        this.setState({
            showDrawer: value
        })
    }


    render() {
        return (
            <div>
                <AppBar position="fixed" style={styles.appBarStyle}>
                    <Toolbar>
                        <IconButton 
                        style={styles.MenuIconStyle}
                        aria-label="menu"
                        color="inherit"
                        onClick={(value) => this.drawerToggle(value)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <SideDrawer
                        open={this.state.showDrawer}
                        onClose={(value) => this.drawerToggle(value)}
                        />

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default BurgerMenu;