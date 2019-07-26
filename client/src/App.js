import React, { Component} from 'react';

//import test from "./util";
import LogIn from "./components/login";
import Register from "./components/register";
import Contacts from "./components/contacts";
//import getAll from "./util/index";



class App extends Component {
  state = {
    isValidUser: false
  }
 //****** POST route to validate against DB */
// IsValid send back a string or boolean... if not send back an error

  handleLogIn = (username, password)=> {
    if(username === "Chris") {
      let isValidUser = true
      this.setState({isValidUser});
    }
    console.log(username + password);
  }

  
  render(){
    return (
      //if its valid = data page ... else login page
      this.state.isValidUser ? <Contacts /> : <LogIn handleLogIn={this.handleLogIn}/>
      
      
    );
  }
}

export default App; 

//