import React, { Component} from 'react';
import logo from "../img/Logo50th.jpg";
import { Link } from "react-router-dom";
import LogIn from "./login";
import Register from "./register";
import Contacts from "./contacts";

class HomePage extends Component {
    state = {
      isValidUser: false
    }
   //****** POST route to validate against DB */
  // IsValid send back a string or boolean... if not send back an error
  
    handleLogIn = (username, password)=> {
      // axios.post('/api/login', {username, password})
      // .then(response => {
      //   console.log(response)
      //   if(response.data) {
      //     console.log("Successful log in")
      //     let isValidUser = true
      //     this.setState({isValidUser})
      //   } else {
      //     console.log("There was a log in error")
      //   }
      //   })
      // }
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
  
  export default HomePage; 
  