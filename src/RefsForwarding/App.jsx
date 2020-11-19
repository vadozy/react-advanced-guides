import React from 'react';
import FancyButton from './FancyButton';

export default class App extends React.Component {
  buttonElement = React.createRef();

  componentDidMount() {
    console.log(
      `componentDidMount: buttonElement.current.innerHTML: ${this.buttonElement.current.innerHTML}`
    );
  }

  render() {
    return <FancyButton ref={this.buttonElement}>Ok</FancyButton>;
  }
}
