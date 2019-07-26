import React, { Component } from 'react';
import axios from "axios";

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
               
               console.log("Sucess  " + result);
               console.log(JSON.stringify(result))

               this.setState({
                   isLoaded: true,
                   items: result.items
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
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.firstName} {item.lastName} {item.emailAddress}
                        </li>
                    ))}
                </ul>
             );
        }
        
    }
}
 
export default Contacts;