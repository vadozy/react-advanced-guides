import React, { Component, PureComponent } from 'react';

function SamePropsFuncComponent(props) {
  console.log('rendering SamePropsFuncComponent');
  return <div>SamePropsFuncComponent {props.p1}</div>;
}

class SamePropsClassComponent extends Component {
  render() {
    console.log('rendering SamePropsClassComponent');
    return <div>SamePropsClassComponent {this.props.p1}</div>;
  }
}

class SamePropsClassPureComponent extends PureComponent {
  render() {
    console.log('rendering SamePropsClassPureComponent');
    return <div>SamePropsClassPureComponent {this.props.p1}</div>;
  }
}

export default class SamePropsRender extends Component {
  state = { s1: 1 };

  componentDidMount() {
    setInterval(() => this.setState({ s1: this.state.s1 + 1 }), 3000);
  }

  render() {
    return (
      <>
        <div>Testing SamePropsRender {this.state.s1}</div>
        <SamePropsFuncComponent p1='prop 1' />
        <SamePropsClassComponent p1='prop 1' />
        <SamePropsClassPureComponent p1='prop 1' />
        {/* <SamePropsClassPureComponent p1={this.state.s1} /> */}
      </>
    );
  }
}
