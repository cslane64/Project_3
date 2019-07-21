import React, { Component} from 'react';

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
    
      <form onSubmit={ (e)=> {e.preventDefault();this.props.handleLogIn(this.state.username, this.state.password)}}>
        <label>Name:<input type="text" name="name" onChange={ this.handleNameChange}/></label>
        <label>Password:<input type="text" name="password" onChange= {this.handlePasswordChange}/></label>
        <input type="submit" value="Submit"  />  
      </form>
      
      
    );
  }
}

export default LogIn;
