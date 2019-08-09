import React, { Component} from 'react';
import logo from "../img/Logo50th.jpg";
import Header from "./Header"
import axios from "axios";
import StataGrid from "./StataGrid";
import HelloWorld from "./DataGrid";


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