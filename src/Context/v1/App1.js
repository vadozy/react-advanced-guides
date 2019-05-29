import React from 'react';

class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

const Button = props => {
  const style = {
    backgroundColor: 'yellow',
    fontWeight: 700,
    fontFamily: 'Courier New',
    fontSize: '1.4em',
  };
  return <div>I am a button 1, my theme is <span style={style}>{props.theme}</span></div>
}

export default App;