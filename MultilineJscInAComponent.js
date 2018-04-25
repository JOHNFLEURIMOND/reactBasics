import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
         To be a Negro in this country and to be relatively conscious is to be in a rage almost all the time.
        </p>
        <cite>
          <a target="_blank"
            href="https://www.brainyquote.com/quotes/james_a_baldwin_146202">
            James Baldwin
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);
