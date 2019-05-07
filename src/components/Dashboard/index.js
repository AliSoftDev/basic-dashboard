import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import UserImpressions from './UserImpressions';
import Overlays from './Overlays';
import OverlaysClicked from './OverlaysClicked';
import Revenue from './Revenue';


const styles = {
    gridStyle: {
        marginLeft: 200
    }
}

const Dashboard = () => {
    return (
        <div>
            <GridList cellHeight={150} cellWidth={100} spacing={2} style={styles.gridStyle}>
                <GridListTile style={{height: '420px'}}>
                     <UserImpressions />
                </GridListTile>
                <GridListTile style={{height: '420px'}}>
                    <Overlays />
                </GridListTile>
                <GridListTile style={{height: '420px'}}>
                 <OverlaysClicked />
                </GridListTile>
                <GridListTile style={{height: '420px'}}>
                    <Revenue />
                </GridListTile>
            </GridList>
        
        </div>
    )
}

export default Dashboard;