import React, { Component} from 'react';

//import test from "./util";
import LogIn from "./components/login";
import Contacts from "./components/contacts";
//import getAll from "./util/index";



class App extends Component {
  state = {
    isValidUser: false
  }

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
