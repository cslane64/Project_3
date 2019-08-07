import React, { Component} from 'react';
import logo from "../img/Logo50th.jpg";
import { Link } from "react-router-dom";
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class LogIn extends Component {
  state = {
    username: null,
    password: null
  }

  handleNameChange =(e) => {
    let username = e.target.value;
    this.setState ({ username});
  }
  handlePasswordChange =(e) => {
    let password = e.target.value;
    this.setState ({ password });
  }
  
  render(){
    return (
      <div>
        <Header/>
        <img src={ logo } alt="logo" />

        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Form onSubmit={ (e)=> {e.preventDefault();this.props.handleLogIn(this.state.username, this.state.password)}}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={ this.handleNameChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={ this.handlePasswordChange} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Log In
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>

              

        <Link to={'/register'}>Register</Link> 
      </div>
      
    );
  }
}

export default LogIn;
