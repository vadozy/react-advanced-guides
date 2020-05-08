import React from 'react';

class MyComponent extends React.Component {

  myRef = React.createRef();

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.myRef.current.innerHTML);
  }

  render() {
    return <div ref={this.myRef} ><h3>Test</h3></div>;
  }

}

export default MyComponent;
