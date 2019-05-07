import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const styles = {
    formStyle: {
        marginTop: '200px',
        marginLeft: '600px'
    }
}


class Signup extends Component {
    render() {
        return (
            <div style={styles.formStyle}>
            <label>New user? please sign up for an account</label>
            <form >
               
                `<TextField
                    label='Email'
                    type="email"
                    name='email'
                    autoComplete='email'
                    margin='normal'
                    variant="outlined"
                />`

                <TextField
                    label='password'
                    type='password'
                    margin='normal'
                    variant='outlined'
                 />  
                  
            </form>     
            <Button variant="contained" style={{ backgroundColor: '#9BC1BC'}}>
                Register
             </Button>
            </div>
        )
    }
}


export default Signup;