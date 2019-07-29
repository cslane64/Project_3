import React from "react";
import ReactDataGrid from "react-data-grid";
import Contacts from "./contacts";


const columns = [
    {key: "id", name: "ID"},
    {key: "title", name: "Title"},
    {key: "count", name: "Count"}
];

const rows = [{id: Contacts.id, title: Contacts.firstName, count: Contacts.lastName}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

function HelloWorld() {
    return (<ReactDataGrid
        columns = {columns}
        rowGetter= {i => rows[i]}
        rowsCount={5}
        minHeight={150}/>)
}

export default HelloWorld;
