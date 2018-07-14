import React, { Component } from 'react';
import LureCardGridLayout from './layouts/LureCardGridLayout';

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  editLure = () => {
    console.debug('editLure');
  }

  openLureDialog = () => {
    console.debug('openLureDialog');
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
    // END
    return (
      <LureCardGridLayout lures={lures} actions={actions} />
    );
  }
}

