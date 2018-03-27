import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Items from './Items'

class App extends Component {
  render() {
    return (
     <div className="container">
         <div className="background animated slideInDown">
         </div>
        <Sidebar/>
         <Items/>

     </div>
    );
  }
}

export default App;
