import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});


class NewLureButton extends Component {
  render() {
    return (
      <Button variant='fab' color='primary' aria-label='Add' className={this.props.classes.fab}>
        <AddIcon />
      </Button>
    );
  }
}


export default withStyles(styles)(NewLureButton);
