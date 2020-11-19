import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButtonWithHooks({ buttonNumber }) {
  const { theme, changeTheme } = useContext(ThemeContext);

  console.log('inside ThemedButton render');
  return (
    <Button theme={theme} buttonNumber={buttonNumber} onClick={changeTheme} />
  );
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
  console.log('inside Button render');
  return (
    <div onClick={props.onClick}>
      I am a button {props.buttonNumber}, my theme is{' '}
      <span style={style}>{props.theme}</span>
    </div>
  );
};

export default ThemedButtonWithHooks;
