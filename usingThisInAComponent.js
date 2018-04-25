import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
     get name(){
   return 'John Fleurimond';
  }
   get info(){
   return 'In 1989, he put this idea to work, using 65,000 processes to invent the worlds first super computerable to perform 3.1 billion calculations per second.';
  }

    get blackInventor() {
  return 'Philip Emeagwali';
}

  render() {
    return <h1>My name is {this.name}. One of my favorite black inventors is {this.blackInventor} because {this.info} . </h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
