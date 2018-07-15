import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export default class LureDialog extends Component {
  componentDidUpdate(prevProps) {
    console.log('props changed in lure dialog')
    console.log(this.props)
  }

  render() {
    let content = null;
    let lureName = null;
    if(this.props.lure !== null) {
      content = (
        <Typography>
          <strong>Name:</strong> {this.props.lure.name}<br />
          <strong>Quantity:</strong> {this.props.lure.quantity}<br />
          <strong>Description:</strong> {this.props.lure.description}<br />
          {Object.keys(this.props.lure.additional_fields).map((key, idx) => {
            return (
              <span key={idx}>
                <strong>{key}:</strong> {this.props.lure.additional_fields[key]}<br />
              </span>
            )
          })}
        </Typography>
      );
      lureName = this.props.lure.name;
    }

    return (
      <div>
        <DialogTitle>{lureName}</DialogTitle>
        <DialogContent>
          {content}
        </DialogContent>
      </div>
    )
  }
}
