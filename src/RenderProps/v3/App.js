import React from 'react';
import cat from '../cat.png';

const OFFSET_X = 10;
const OFFSET_Y = 15;

class Cat extends React.Component {
  render() {
    const {x, y} = this.props.mouse;
    return (
      <img src={cat} alt="cat" style={{ position: 'absolute', width: '20px', left: x - OFFSET_X, top: y - OFFSET_Y }} />
    );
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: OFFSET_X, y: OFFSET_Y };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        <Cat mouse={this.state} />
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseWithCat />
      </div>
    );
  }
}

export default MouseTracker;