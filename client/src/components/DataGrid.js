import React from "react";
import ReactDataGrid from "react-data-grid";
//import Contacts from "./contacts";


const columns = [
    {key: "firstName", name: "First Name"},
    {key: "lastName", name: "Last Name"},
    {key: "emailAddress", name: "Email Address"},
    {key: "localityId", name: "State"}
];

//const rows = [{id: 0, title: 'row0', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

function HelloWorld(props) {
    let data = props.name;
    //const rows = [{id: data.firstName, title: data.lastName, count: data.emailAddress}]
    let newRows = data.map(item => {
        return {firstName: item.firstName,
                lastName: item.lastName,
                emailAddress: item.emailAddress,
                localityId: item.LocalityId

            }  

    })
    console.log(props);
    return (<ReactDataGrid
        columns = {columns}
        rowGetter= {i => newRows[i]}
        rowsCount={5}
        minHeight={250}/>)
}

export default HelloWorld;
