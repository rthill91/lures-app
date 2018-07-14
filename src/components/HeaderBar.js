import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class HeaderBar extends Component {
  render() {
    return (
      <AppBar position='sticky' color='primary'>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            Lure DB
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

