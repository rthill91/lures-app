import React, { Component } from 'react';
import LureCard from '../LureCard';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default class LureCardGridLayout extends Component {

  render() {
    return (
      <Grid>
        <Row>
          {this.props.lures.map(lure => {
            return  <Col xs={12} lg={6} xl={3} key={lure.name}>
                      <LureCard lure={lure} actions={this.props.actions} />
                    </Col>
          })}
        </Row>
      </Grid>
    );
  }
}
