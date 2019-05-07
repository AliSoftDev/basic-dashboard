import React from 'react';
import { Line } from 'react-chartjs-2';

class UserImpressions extends React.Component {

    state = { 
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'User impressions',
                    backgroundColor: '#4E96DD',
                    data: [20, 14, 47, 35, 30, 9, 30, 47, 59, 60, 80, 87]
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
                marginTop: '80px',
                marginLeft: '150px'
                }}>
                <h3>User impressions</h3>
                <Line 
                type='line'
                    options={{
                        AnimationDuration: 2,
                        responsive: true
                    }}
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default UserImpressions;