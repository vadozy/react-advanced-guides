import React from 'react';
import ThemeContext, { initialContext } from './ThemeContext';
import ThemedButton from './ThemedButton';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialContext,
      changeTheme: this.handleClick,
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === 'blue' ? 'red' : 'blue'
      }
    });
  };

  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    console.log('inside App render');
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar/>
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  console.log('inside Toolbar render');
  return (
    <React.Fragment>
      <div>
        <ThemedButton buttonNumber="1"/>
      </div>
      <div>
        <ThemedButton buttonNumber="2"/>
    </div>
  </React.Fragment>
  );
}
