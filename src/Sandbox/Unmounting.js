import React, { Component, useState, useEffect } from 'react';

function App() {
  const [i, setI] = useState(0);
  useEffect(() => {
    setTimeout(() => setI(i + 1), 1000);
  });

  console.log(i);
  return (
    <>
      {i % 2 === 0 ? <div>even</div> : 'odd'}
      <C i={i} k='1'/>
      {i % 2 === 0 ? <C i={i}  k='2'/> : null}
      <C i={i}  k='3' key={i} />
      {i % 2 === 0 ? <div>even</div> : null}
    </>
  )
}

export default App


class C extends Component {
  componentWillUnmount() {
    console.log('Unmounting', this.props.k);
  }
  render() {
    return (
      <div>
        {this.props.i}
      </div>
    )
  }
}

