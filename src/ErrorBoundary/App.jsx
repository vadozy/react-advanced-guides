import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: false};
  }

  static getDerivedStateFromError(error) {
    return {error: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log('DEBUG: start componentDidCatch');
    console.warn(error);
    console.warn(errorInfo);
    console.log('DEBUG: end   componentDidCatch');
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

const Comp1 = props => {
  console.log('rendering inside Comp1');
  return <>
    <div>div inside Comp1</div>
    <div>props.children (inside Comp1 render()) -> {props.children}</div>
    <Comp2 {...props} />
  </>;
};

const Comp2 = props => {
  console.log('rendering inside Comp2');
  return <>
    <div>div inside Comp2</div>
    <div>props.children (inside Comp1 render()) -> {props.children}</div>
    <Comp3 {...props} />
  </>;
};

const Comp3 = class extends React.Component {

  componentDidMount() {
    console.log(`Comp3 componentDidMount -> ${this.props.n} / ${this.props.m} = ${+this.props.n / +this.props.m}`);
    if (+this.props.m === 0) {
      throw Error('Vadim: Error inside innermost component: Division by zero');
    }
  }

  render() {
    console.log('rendering inside Comp3');
    return <>
      <div>div inside Comp3</div>
      <div>props.children (inside Comp3 render()) -> {this.props.children}</div>
    </>;
  }
};

export default props => {
  console.log('rendering inside App');
  return <ErrorBoundary>
    <Comp1 n="3" m="2">children of Comp1 inside App</Comp1>
  </ErrorBoundary>
};