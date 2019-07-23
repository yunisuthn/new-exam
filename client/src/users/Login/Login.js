import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../../utils/API';

import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import Bienvenu from '../../components/Bienvenu'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            email: "",
            password: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }

    send = event => {

        if (this.state.email.length === 0) {
            return;
        }
        if (this.state.password.length === 0) {
            return;
        }
        API.login(this.state.email, this.state.password).then(function (data) {
            console.log('data ==', data);

            //localStorage.setItem('token', data.data.token, 'id', data.data.id);
            localStorage.setItem('id', data.data.id);
            window.location = '/dashboard'
        }, function (error) {
            console.log(error);
            document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
            return;
        })
    }

    /* signup = event => {
        window.location = "/signup"
    } */
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return (
            <div className="Login">
                <div className=' col-md-8'>
                    <Bienvenu/>
                </div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" className='login' >

                            <FormGroup controlId="email"  bsSize="large">
                                <FormLabel className='couleur'>Email</FormLabel>
                                <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <FormLabel className='couleur'>Password</FormLabel>
                                <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                            </FormGroup>

                            <FormGroup  bsSize="large">
                                <FormLabel id='error'></FormLabel>
                            </FormGroup>
                            <Button variant="primary"
                                onClick={this.send}
                                className='couleur boutton'
                                type="submit"> 
                                 Connexion
                            </Button>
                            {/* <Button
                                onClick={this.signup}
                                type="submit"
                            >
                                Signup
                            </Button> */}


                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}