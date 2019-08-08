import React, { Component} from 'react';
import logo from "../img/Logo50th.jpg";
//import { Link } from "react-router-dom";
import Header from "./Header"
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import axios from "axios";
import StataGrid from "./StataGrid";
import HelloWorld from "./DataGrid";
//import HomePage from "./HomePage";


class Manage extends Component {
  state = {
    isLoaded: false,
    locality: []
    
  }
  componentDidMount() {
    
    axios.get("/api/manage")
    
    .then(
       (result) => {
           
            this.setState({
               isLoaded: true,
               locality: result.data
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
    const { error, isLoaded, locality } = this.state;
    
    if (error) {
        return <div> Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return ( 
            <div>
                <Header />
                <img src={ logo } alt="logo" />
                <h5>Authorized Users</h5> 
                <StataGrid name={locality}/>
                {/* <Button  href="/manage" variant="primary" size="lg" block>
                    Manage your State Contacts
                </Button> */}
            </div>
         );
    }
    
}
}



export default Manage;