import React, { Component} from 'react';
import axios from 'axios';
import logo from "../img/Logo50th.jpg";
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


//import test from "./util";



class Register extends Component {

  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    locality: ''
}

  
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = (e) => {
    axios.post('/api/register', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      locality: this.state.locality,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
      
        
    })
    
    console.log(this.state);

  };
  
  render(){
    return (
      <div>
        <Header />
        <img src={ logo } alt="logo" />

        <Container>
            <Row>
              <Col></Col>
                <Col>
                  <Form onSubmit={ (e)=> {e.preventDefault();this.onSubmit()}}>
                    <Form.Group controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control  name="firstName" type="text" placeholder="First Name" onChange={e => this.change(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control  name="lastName" type="text" placeholder="Last Name" onChange={e => this.change(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control name="emailAddress" type="email" placeholder="Enter email" onChange={e => this.change(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control  name="password" type="password" placeholder="Password" onChange={e => this.change(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicLocality">
                      <Form.Label>State</Form.Label>
                      <Form.Control  name="locality" type="text" placeholder="State" onChange={e => this.change(e)} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </Form>   
                </Col>
              <Col></Col>
            </Row>
        </Container>
      </div>
      
    );
  }
}

export default Register;