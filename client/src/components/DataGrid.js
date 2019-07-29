import React from "react";
import ReactDataGrid from "react-data-grid";
//import Contacts from "./contacts";


const columns = [
    {key: "id", name: "ID"},
    {key: "title", name: "Title"},
    {key: "count", name: "Count"}
];

//const rows = [{id: 0, title: 'row0', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

function HelloWorld(props) {
    let data = props.name;
    //const rows = [{id: data.firstName, title: data.lastName, count: data.emailAddress}]
    let newRows = data.map(item => {
        return {id: item.firstName, title: item.lastName, count: item.emailAddress}

    })
    console.log(props);
    return (<ReactDataGrid
        columns = {columns}
        rowGetter= {i => newRows[i]}
        rowsCount={5}
        minHeight={150}/>)
}

export default HelloWorld;
