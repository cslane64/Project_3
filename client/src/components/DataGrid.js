import React from "react";
import ReactDataGrid from "react-data-grid";


const columns = [
    {key: "firstName", name: "First Name"},
    {key: "lastName", name: "Last Name"},
    {key: "emailAddress", name: "Email Address"},
    {key: "localityId", name: "State"}
];

function HelloWorld(props) {
    let data = props.name;
    
    let newRows = data.map(item => {
        
        return {firstName: item.firstName, 
                lastName: item.lastName,
                emailAddress: item.emailAddress,
                localityId: item.localityID

            }  

    })
    console.log(props);
    return (<ReactDataGrid
        columns = {columns}
        rowGetter= {i => newRows[i]}
        rowsCount={25}
        minHeight={250}/>)
}

export default HelloWorld;
