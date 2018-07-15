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
  constructor(props) {
    super(props)

    let dialogTitle = 'New Lure';
    let lure = {};

    if(props.lure !== null) {
      dialogTitle = props.lure.name;
      lure = props.lure;
    }

    this.state = {
      dialogTitle: dialogTitle,
      lure: lure,
    };
  }

  handleChange = key => event => {
    let lure = this.state.lure;
    lure[key] = event.target.value;
    this.setState({
      lure: lure
    });
  }

  handleChangeAdditional = key => event => {
    let lure = this.state.lure;
    lure['additional_fields'][key] = event.target.value;
    this.setState({
      lure: lure
    });
  }

  render() {
    return (
      <div>
        <DialogTitle>{this.state.dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id='name'
            label='Name'
            value={this.state.lure.name}
            onChange={this.handleChange('name')}
            fullWidth />
          <TextField
            id='quantity'
            label='Quantity'
            value={this.state.lure.quantity}
            onChange={this.handleChange('quantity')}
            fullWidth />
          <TextField
            id='description'
            label='Description'
            value={this.state.lure.description}
            onChange={this.handleChange('description')}
            fullWidth />
          {Object.keys(this.state.lure.additional_fields).map((key, idx) => {
            return (
              <TextField
                key={idx}
                id={this.state.lure.additional_fields[key]}
                label={key}
                value={this.state.lure.additional_fields[key]}
                onChange={this.handleChangeAdditional(key)}
                fullWidth />
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.saveCallback(this.state.lure)} color='primary'>
            Save
          </Button>
        </DialogActions>
      </div>
    )
  }
}
