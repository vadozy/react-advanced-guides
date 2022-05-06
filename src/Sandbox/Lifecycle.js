import React, { Component } from 'react';

class App extends Component {
  key = 1;

  timer1;
  timer2;

  componentDidMount() {
    console.log('parent: componentDidMount');
    this.timer1 = setInterval(() => this.forceUpdate(), 2000);
    this.timer2 = setInterval(() => this.key++, 7000);
  }

  componentDidUpdate() {
    console.log('parent: componentDidUpdate');
    if (this.key === 4) {
      clearInterval(this.timer1);
      clearInterval(this.timer2);
    }
  }

  componentWillUnmount() {
    console.log('parent: componentWillUnmount');
  }

  render() {
    return <Internal key={this.key} />;
  }
}

class Internal extends Component {
  componentDidMount() {
    console.log('child: componentDidMount');
  }

  componentDidUpdate() {
    console.log('child: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('child: componentWillUnmount');
  }

  render() {
    return (
      <div>
        <Internal2></Internal2>Internal
      </div>
    );
  }
}

class Internal2 extends Component {
  componentDidMount() {
    console.log('child2: componentDidMount');
  }

  componentDidUpdate() {
    console.log('child2: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('child2: componentWillUnmount');
  }

  render() {
    return <div>Internal2</div>;
  }
}

export default App;
