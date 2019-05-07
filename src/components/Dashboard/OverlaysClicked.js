import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


class OverlaysClicked extends Component {

    
    state = { 
        data: {
            labels: ['Clicked', 'Not Clicked'],
            datasets: [
                {
                    backgroundColor: ['#9BC1BC', '#D39292',],
                    data: [1000, 500]
                }
            ]
        }
    }




    render() {
        return (
            <div  style={{ 
                position: 'relative', 
                width: 500, 
                height: 450, 
                marginLeft: '150px',
                }}>
                <h3>Overlays Clicked</h3>
                <Doughnut 
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
                
            </div>
        )
    }
}

export default OverlaysClicked;