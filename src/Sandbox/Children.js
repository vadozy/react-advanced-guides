import React from 'react';

function Component(props) {
  return <div>{props.children}</div>;
}

function App() {
  return (
    <Component
      children={
        <>
          <h1>child 1</h1>
          <h1>child 2</h1>
        </>
      }
    >
      {/* <h1>child 3</h1>
      <h1>child 4</h1> */}
    </Component>
  );
}

export default App;
