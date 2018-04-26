import React from 'react';
import {this.props.firstName} from'./App'

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
