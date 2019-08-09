import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/register";
import HomePage from "./components/HomePage";
import Manage from "./components/manage";
import Create from "./components/create";
import Contacts from "./components/contacts";



const App = () => {

    return (
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          
          <Route exact path="/register" component={ Register }/>

          <Route exact path="/manage" component={ Manage }/>

          <Route exact path="/create" component={ Create }/>

          <Route exact path="/contacts" component={ Contacts }/>
          
        </Switch>
      </BrowserRouter>
      
      
    );
  }


export default App; 

