import React, { Component} from 'react';
import logo from "../img/Logo50th.jpg";
import { Link } from "react-router-dom";
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



//import test from "./util";



class LogIn extends Component {
  //make an ajax request to the backend
  // componentDidMount(){
  //   test().then(data => {
  //     console.log(data);
  //   });
  // }

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
              <form onSubmit={ (e)=> {e.preventDefault();this.props.handleLogIn(this.state.username, this.state.password)}}>
                <label>Email Address:<input type="text" name="name" onChange={ this.handleNameChange}/></label>
                <br />
                <br />
                <label>Password:     <input type="text" name="password" onChange= {this.handlePasswordChange}/></label>
                <br />
                <br />
                <input type="submit" value="Log In"  />  
              </form>
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
