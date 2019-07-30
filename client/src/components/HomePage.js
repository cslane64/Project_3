import React, { Component} from 'react';
//import logo from "../img/Logo50th.jpg";
//import { Link } from "react-router-dom";
import LogIn from "./login";
//import Register from "./register";
import Contacts from "./contacts";
import axios from 'axios';

class HomePage extends Component {
    state = {
      isValidUser: false
    }
   //****** POST route to validate against DB */
  // IsValid send back a string or boolean... if not send back an error
        
    handleLogIn = (username, password)=> {
      //let data = {username, password}
      axios.post({
        method: "POST",
        url: "/api/SignIn",
        data: {
            username: username,
            password: password}
        
      }).then((res) => {
        console.log(res);
  
        // if (res) {
        //   let isValidUser = true;
        //   this.setState({isValidUser});
        //   setSession(res.userid, res.name);
        //   alert("Logged in!");
        //   //window.location.pathname = "/find.html";
        // }
        // else {
        //   alert("User password combination not found!");
        // }
  
      })

      function setSession(userid, name) {
        sessionStorage.setItem('userid', userid);
        sessionStorage.setItem('name', name);
      
      }
      
      // if(username === "Chris") {
      //   let isValidUser = true
      //   this.setState({isValidUser});
      // }
      //console.log(username + password);
    }
  
    
    render(){
      return (
        //if its valid = data page ... else login page
        
        this.state.isValidUser ? <Contacts /> : <LogIn handleLogIn={this.handleLogIn}/> 
        
        
      );
    }
  }
  
  export default HomePage; 
  