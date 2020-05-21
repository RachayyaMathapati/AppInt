import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            "username":"hruday@gmail.com",
            "password" :'hruday123',
             'uservalue':'',
             'userpassword':''
           
        }
       
    }
    
    Logout = () => {
        const {username,password,uservalue,userpassword} = this.state;
        if(username===uservalue && password === userpassword){
          window.location.href="Dashboard"
    }
    
   
    }

    handleChangeusername = (e)=>{
        this.setState({uservalue:e.target.value})
    }
    handleChangepassword = (e)=>{
        this.setState({userpassword:e.target.value})
    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div >
                    <Typography component="h1" variant="h5">
                        Sign in
                </Typography>
                    <ValidatorForm>
                    <TextValidator
                       
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="email"
                            autoComplete="UserName"
                            autoFocus
                            value={this.state.uservalue}
                            onChange = {this.handleChangeusername}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                      
                        <TextValidator
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={this.state.userpassword}
                            autoComplete="current-password"
                            validators={['required']}
                            errorMessages={['this field is required']}
                            onChange = {this.handleChangepassword}
                        />
                       
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick = {this.Logout}
                        >
                            Logn In
                  </Button>

                    </ValidatorForm>
                </div>

            </Container>
        );
    }
}

export default Login
