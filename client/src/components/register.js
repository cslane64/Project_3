import React, { Component} from 'react';
import logo from "../img/Logo50th.jpg";

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
    
    console.log(this.state);

  };
  
  render(){
    return (
      <div>
        <img src={ logo } alt="logo" />
        
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
          value={this.state.localityß} 
          onChange={e => this.change(e)}/></label>
          <br />
          <br />
          <input type="submit" value="Register"  />
          {/* <button onClick={e => this.onSubmit()}>Submit</button> */}
        </form>
        {/* <form onSubmit={ (e)=> {e.preventDefault();this.props.handleLogIn(this.state.username, this.state.password)}}>
          <label>Name:<input type="text" name="name" onChange={ this.handleNameChange}/></label>
          <br />
          <br />
          <label>Password:<input type="text" name="password" onChange= {this.handlePasswordChange}/></label>
          <br />
          <br />
          <input type="submit" value="Submit"  />  
        </form> */}
      </div>
      
    );
  }
}

export default Register;