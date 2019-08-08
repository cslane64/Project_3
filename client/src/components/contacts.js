import React, { Component } from 'react';
import HelloWorld from "./DataGrid";
import axios from "axios";
import Header from "./Header";
import logo from "../img/Logo50th.jpg";
import Button from 'react-bootstrap/Button';
// import { BrowserRouter } from "react-router-dom";



class Contacts extends Component {
    state = { 
        error: null,
        isLoaded: false,
        items: []
        
     }; 

    componentDidMount() {
        axios.get("/api/contacts")
        //.then(res => res.json())
        .then(
           (result) => {
               
                this.setState({
                   isLoaded: true,
                   items: result.data
               });
           },
           (error) => {
               this.setState({
                   isLoaded: true,
                   error
               });
           }
        )
    }
    render() { 
        const { error, isLoaded, items } = this.state;
        
        if (error) {
            return <div> Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return ( 
                <div>
                    <Header />
                    <img src={ logo } alt="logo" /> 
                    <h5>State Contacts</h5>
                    <HelloWorld name={items}/>
                    <Button  href="/manage" variant="primary" size="lg" block>
                        Manage your State Contacts
                    </Button>
                </div>
             );
        }
        
    }
}
 
export default Contacts;