import React, { Component} from 'react';
import LogIn from "./login";
import Contacts from "./contacts";
import axios from 'axios';



class HomePage extends Component {
    state = {
      isValidUser: false
      
    }
   
    handleLogIn = (username, password)=> {
      let data = {username, password}
      axios.post("/api/SignIn", { data })
      .then((res) => {
        
        console.log(res.data);
        
        if (res.data.id) {
          
          let isValidUser = true;
          this.setState({isValidUser})
        
          alert("Logged in!");
          
        }
        else {
          alert("Username and password combination not found!!");
        
        }
  
      })

      // function setSession(userid, name) {
      //   sessionStorage.setItem('userid', userid);
      //   sessionStorage.setItem('name', name);
      
      // }
      
      
    }
  
    
    render(){
      return (
        
        
        this.state.isValidUser ? <Contacts /> : <LogIn handleLogIn={this.handleLogIn}/> 
        
        
      );
    }
  }
  
  export default HomePage; 
  