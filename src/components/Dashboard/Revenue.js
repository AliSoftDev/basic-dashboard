import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Revenue extends Component {

    state = {
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                
                {
                    label: ['GBP in 000s'],
                    data: [20, 25, 30, 35, 45, 60, 80, 110, 140, 220, 400, 700],
                    backgroundColor: '#9BC1BC'
                }
            ]
        }
    }
    render() {
        return (
            <div style={{ 
                position: 'relative', 
                width: 500, 
                height: 450, 
                marginLeft: '',
                }}>
                <h3>Revenue</h3>
                <Bar 
                options={{
                    responsive: true
                }}
                data={this.state.data}
                />
                
            </div>
        )
    }
}


export default Revenue;