import React, { Component} from 'react';
import { Link, BrowserRouter, Route } from "react-router-dom";
import axios from 'axios'
import LogIn from "./components/login";
import Register from "./components/register";
import Contacts from "./components/contacts";
import HomePage from "./components/HomePage";
//import getAll from "./util/index";



const App = () => {
//   state = {
//     isValidUser: false
//   }
//  //****** POST route to validate against DB */
// // IsValid send back a string or boolean... if not send back an error

//   handleLogIn = (username, password)=> {
//     // axios.post('/api/login', {username, password})
//     // .then(response => {
//     //   console.log(response)
//     //   if(response.data) {
//     //     console.log("Successful log in")
//     //     let isValidUser = true
//     //     this.setState({isValidUser})
//     //   } else {
//     //     console.log("There was a log in error")
//     //   }
//     //   })
//     // }
//     if(username === "Chris") {
//       let isValidUser = true
//       this.setState({isValidUser});
//     }
//     console.log(username + password);
//   }

  
  //render(){
    return (
      //if its valid = data page ... else login page
      <BrowserRouter>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/register" component={ Register }/>
      {/* this.state.isValidUser ? <Contacts /> : <LogIn handleLogIn={this.handleLogIn}/> */}
      </BrowserRouter>
      
    );
  }
//}

export default App; 

//