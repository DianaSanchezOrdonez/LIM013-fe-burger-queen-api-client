import React, { Component } from 'react';

import './App.css';

import FormLogin from './components/FormLogin.js';

import {users} from './users.json';

class App extends Component {

  constructor(){
    super();
    this.state = {
      users
    }
  }

  handleLogin(user) {
    
  }
  
  render(){
    return (
      <div className="App">
        <FormLogin onLogin={this.handleLogin}></FormLogin>
      </div>
    );
  }
}

export default App;
