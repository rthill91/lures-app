import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    return (
      <TextField
        fullWidth
        id='search'
        label='Search...'
        value={this.state.search}
        onChange={this.handleChange} />
    );
  }
}

