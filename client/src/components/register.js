import React, { Component} from 'react';
import axios from 'axios';
import logo from "../img/Logo50th.jpg";
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'





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
    this.props.history.push('/');
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
                      <Form.Control name="locality" type='text' as="select" onChange={e => this.change(e)}>
                      <option>Select your State</option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>California</option>
                      <option>Colorado</option>
                      <option>Connecticut</option>
                      <option>Delaware</option>
                      <option>District of Columbia</option>
                      <option>Florida</option>
                      <option>Georgia</option>
                      <option>Hawaii</option>
                      <option>Idaho</option>
                      <option>Illinois</option>
                      <option>Indiana</option>
                      <option>Iowa</option>
                      <option>Kansas</option>
                      <option>Kentucky</option>
                      <option>Louisiana</option>
                      <option>Maine</option>
                      <option>Maryland</option>
                      <option>Massachusetts</option>
                      <option>Michigan</option>
                      <option>Minnesota</option>
                      <option>Mississippi</option>
                      <option>Missouri</option>
                      <option>Montana</option>
                      <option>Nebraska</option>
                      <option>Nevada</option>
                      <option>New Hampshire</option>
                      <option>New Jersey</option>
                      <option>New Mexico</option>
                      <option>New York</option>
                      <option>North Carolina</option>
                      <option>North Dakota</option>
                      <option>Ohio</option>
                      <option>Oklahoma</option>
                      <option>Oregon</option>
                      <option>Pennsylvania</option>
                      <option>Rhode Island</option>
                      <option>South Carolina</option>
                      <option>South Dakota</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Utah</option>
                      <option>Vermont</option>
                      <option>Virginia</option>
                      <option>Washington</option>
                      <option>West Virginia</option>
                      <option>Wisconsin</option>
                      <option>Wyoming</option>
                    </Form.Control>
                      {/* <Form.Control  name="locality" type="text" placeholder="State" onChange={e => this.change(e)} /> */}
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