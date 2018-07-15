import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import LureCardGridLayout from './layouts/LureCardGridLayout';
import LureDialog from './LureDialog';
import EditLureDialog from './EditLureDialog';
import { GetLures, SaveLure } from './Api';

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lures: [],
      lureDialogIsOpen: false,
      editLureDialogIsOpen: false,
      selectedLure: null,
    }
  }

  componentDidMount() {
    let lures = []
    GetLures()
      .then(res => {
        lures = res;
      })
      .catch(err => {
        console.warn('using sample lures')
        lures = [
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
      })
      .finally(() => {
        this.setState({
          lures: lures
        })
      })
  }

  openEditLureDialog = (lure) => {
    console.debug('editLure');
    this.setState({
      editLureDialogIsOpen: true,
      selectedLure: lure,
    })
  }

  openLureDialog = (lure) => {
    console.debug('openLureDialog');
    this.setState({
      lureDialogIsOpen: true,
      selectedLure: lure,
    });
  }

  handleDialogClose = (dialogKey) => {
    this.setState({
      [dialogKey]: false,
    });
  }

  
  render() {
    // TODO: remove this block
    let actions = [
      {
        'title': 'Edit',
        'color': 'primary',
        'callback': this.openEditLureDialog,
      },
      {
        'title': 'Open',
        'color': 'secondary',
        'callback': this.openLureDialog,
      },
    ]
    // END
    return (
      <div>
        <LureCardGridLayout lures={this.state.lures} actions={actions} />
        <Dialog
          open={this.state.lureDialogIsOpen}
          onClose={() => this.handleDialogClose('lureDialogIsOpen')}>
          <LureDialog
            lure={this.state.selectedLure} />
        </Dialog>
        <Dialog
          open={this.state.editLureDialogIsOpen}
          onClose={() => this.handleDialogClose('editLureDialogIsOpen')}>
          <EditLureDialog
            lure={this.state.selectedLure}
            saveCallback={SaveLure} />
        </Dialog>
      </div>
    );
  }
}

