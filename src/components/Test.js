import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import LureCardGridLayout from './layouts/LureCardGridLayout';
import LureDialog from './LureDialog';
import { GetLures } from './Api';

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      lures: [],
      lureDialogIsOpen: false,
      selectedLure: null,
    }
  }

  componentDidMount() {
    GetLures()
      .then(res => {
        this.setState({
          lures: res
        })
      })
  }

  editLure = (lure) => {
    console.debug('editLure');
  }

  openLureDialog = (lure) => {
    console.debug('openLureDialog');
    this.setState({
      lureDialogIsOpen: true,
      selectedLure: lure,
    });
  }

  handleDialogClose = () => {
    this.setState({
      lureDialogIsOpen: false,
    });
  }

  
  render() {
    // TODO: remove this block
    let lures = [
      {
        'id': 'someguid1',
        'name': 'Lure Name #1',
        'quantity': 1,
        'image_path': 'url to image',
        'description': 'this is a description',
        'additional_fields': {
          'custom_field_key': 'custom_field_content',
        }
      },
      {
        'id': 'someguid2',
        'name': 'Lure Name #2',
        'quantity': 2,
        'image_path': 'url to image',
        'description': 'this is a description',
        'additional_fields': {
          'custom_field_key': 'custom_field_content',
        }
      }
    ]
    let actions = [
      {
        'title': 'Edit',
        'color': 'primary',
        'callback': this.editLure,
      },
      {
        'title': 'Open',
        'color': 'secondary',
        'callback': this.openLureDialog,
      },
    ]
    if (this.state.lures.length === 0) {
      console.warn('using sample lures')
      this.setState({
        lures: lures,
      });
    }
    // END
    return (
      <div>
        <LureCardGridLayout lures={this.state.lures} actions={actions} />
        <Dialog
          open={this.state.lureDialogIsOpen}
          onClose={this.handleDialogClose}>
          <LureDialog
            lure={this.state.selectedLure} />
        </Dialog>
      </div>
    );
  }
}

