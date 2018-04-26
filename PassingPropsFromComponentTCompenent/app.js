import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='John Fleurimond, The Full-Stack Web Developer!' />,
  document.getElementById('app')
);
