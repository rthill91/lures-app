import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import NewLureButton from './components/NewLureButton';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <NewLureButton />
      </div>
    );
  }
}

export default App;
