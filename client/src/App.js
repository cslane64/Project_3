import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import axios from 'axios'
//import LogIn from "./components/login";
import Register from "./components/register";
//import Contacts from "./components/contacts";
import HomePage from "./components/HomePage";
import Manage from "./components/manage";



const App = () => {

    return (
      //if its valid = data page ... else login page
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          
          <Route exact path="/register" component={ Register }/>

          <Route exact path="/manage" component={ Manage }/>
          
        </Switch>
      </BrowserRouter>
      
      
    );
  }


export default App; 

