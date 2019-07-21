import React, { Component} from 'react';

import test from "./util";



class App extends Component {
  //make an ajax request to the backend
  componentDidMount(){
    test().then(data => {
      console.log(data);
    });
  }
  render(){
    
    return (
      <div>
        <h1>This worked after nodemon.json change</h1>
      </div>
    );
  }
}

export default App;
