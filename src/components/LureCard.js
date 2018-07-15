import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';


export default class LureCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader title={this.props.lure.name} />
        <CardContent>
          <Typography component='p'>
            some content
          </Typography>
        </CardContent>
        <CardActions>
          {this.props.actions.map(action => {
            return (
              <Button
                key={action.title}
                color={action.color}
                onClick={() => action.callback(this.props.lure)} >
                {action.title}
              </Button>
            )
          })}
        </CardActions>
      </Card>
    );
  }
}

