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
               
               console.log("Success  " + result.data);
                console.log(result.data);

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
                    <ul>
                        {items.map(items => (
                            <li key={items.id}>
                                {items.firstName} {items.lastName} {items.emailAddress}
                            </li>
                        ))}
                    </ul>
                </div>
             );
        }
        
    }
}
 
export default Contacts;