import React from 'react';

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <h1 style={{ margin: 0 }}>Move the mouse around!</h1>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}

export default MouseTracker;
