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

class Mouse extends React.Component {
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
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={coords => <Cat mouse={coords} />}/>
      </div>
    );
  }
}

export default MouseTracker;