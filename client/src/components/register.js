import React, { Component} from 'react';
import axios from 'axios';
import logo from "../img/Logo50th.jpg";
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


//import test from "./util";



class Register extends Component {

  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    locality: ''
}

  // handleNameChange =(e) => {
  //   let username = e.target.value;
  //   this.setState ({ username});
  // }
  // handlePasswordChange =(e) => {ß
  //   let password = e.target.value;
  //   this.setState ({ password });
  // }

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
                <form onSubmit={ (e)=> {e.preventDefault(); this.onSubmit()}}>
                  <label>First Name:<input 
                  name="firstName"
                  placeholder="First Name" 
                  value={this.state.firstName} 
                  onChange={e => this.change(e)}/></label>
                  <br />
                  <br />
                  <label>Last Name:<input 
                  name="lastName"
                  placeholder="Last Name" 
                  value={this.state.lastName} 
                  onChange={e => this.change(e)}/></label>
                  <br />
                  <br />
                  <label>Email:<input 
                  name="emailAddress"
                  placeholder="Email Address" 
                  value={this.state.emailAddress} 
                  onChange={e => this.change(e)}/></label>
                  <br />
                  <br />
                  <label>Password:<input 
                  name="password"
                  type="password"
                  placeholder="Password" 
                  value={this.state.password} 
                  onChange={e => this.change(e)}/></label>
                  <br />
                  <br />
                  <label>State:<input 
                  name="locality"
                  placeholder="State" 
                  value={this.state.localityID} 
                  onChange={e => this.change(e)}/></label>
                  <br />
                  <br />
                  <input type="submit" value="Register"/>
                  
                </form>
                
              </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      
    );
  }
}

export default Register;