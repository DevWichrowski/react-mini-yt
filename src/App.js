import React, { Component } from 'react';
import './App.scss';
import Main from "./components/Main/Main";
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Button variant="contained" color="primary" >Material-ui Test</Button>
      </div>
    );
  }
}

export default App;
