import React, { Component, useState, useEffect } from 'react';

function App() {
  const [i, setI] = useState(0);
  useEffect(() => {
    setTimeout(() => setI(i + 1), 5000);
  });

  console.log(`App i = ${i}`);

  const el1 = (
    <>
      {i % 3 === 0 ? <div>i % 3 is 0</div> : null}
      <C i={i} k={1} />
      {i % 3 === 0 ? <C i={i} k={2} /> : null}
      <C i={i} k={3} key={i} />
    </>
  );

  const el2 = (
    <>
      <C i={i} k={1} />
      {i % 3 === 0 ? <C i={i} k={2} /> : null}
      <C i={i} k={3} key={i} />
    </>
  );

  if (i % 2 === 0) {
    return el1;
  } else {
    return el2;
  }
}

export default App;

class C extends Component {
  componentWillUnmount() {
    console.log(
      'componentWillUnmount',
      `k = ${this.props.k}`,
      `i = ${this.props.i}`
    );
  }
  componentDidMount() {
    console.log(
      'componentDidMount',
      `k = ${this.props.k}`,
      `i = ${this.props.i}`
    );
  }
  componentDidUpdate() {
    console.log(
      'componentDidUpdate',
      `k = ${this.props.k}`,
      `i = ${this.props.i}`
    );
  }
  render() {
    console.log('render', `k = ${this.props.k}`, `i = ${this.props.i}`);
    return (
      <div>
        k = {this.props.k}, i = {this.props.i}
      </div>
    );
  }
}
