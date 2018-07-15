import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import NewLureButton from './components/NewLureButton';
import Test from './components/Test';

class App extends Component {
  

  render() {
    return (
      <div>
        <HeaderBar />
        <SearchBar />
        <Test />
        <NewLureButton />
      </div>
    );
  }
}

export default App;
