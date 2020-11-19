import React, { useState } from 'react';

function Example() {
  console.log('Entering Example ...');
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log(`Entering Example [ count: ${count} ]`);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

class ExampleOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export { ExampleOld, Example as default };
