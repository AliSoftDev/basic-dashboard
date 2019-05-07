import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


class Overlays extends Component {

    
    state = { 
        data: {
            labels: ['Overlays shown', 'Not Shown', 'Remaining'],
            datasets: [
                {
                    backgroundColor: ['#9BC1BC', '#D39292', '#2B67AD'],
                    data: [30, 20, 50]
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
                marginTop: '80px'
                }}>
                <h3>Overlays Shown</h3>
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

export default Overlays;