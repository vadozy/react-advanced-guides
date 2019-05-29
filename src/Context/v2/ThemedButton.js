import React from 'react';
import ThemeContext from './ThemeContext';

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    console.log('rendering ThemedButton');
    return <Button theme={this.context} buttonNumber={this.props.buttonNumber} onClick={this.props.onClick}/>;
  }
}

const Button = props => {
  const style = {
    backgroundColor: 'yellow',
    color: '#066',
    fontWeight: 700,
    fontFamily: 'Courier New',
    fontSize: '1.4em',
    textDecoration: 'underline',
  };
  console.log('rendering Button');
  return <div onClick={props.onClick}>I am a button {props.buttonNumber}, my theme is <span style={style}>{props.theme}</span></div>
}

export default ThemedButton;
