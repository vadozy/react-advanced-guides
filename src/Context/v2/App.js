import React from 'react';
import ThemeContext from './ThemeContext';
import ThemedButton from './ThemedButton';

class App extends React.Component {

  state = {
    theme: 'blue'
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
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar onClick={this.handleClick}/>
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  console.log('rendering Toolbar');
  return (
    <React.Fragment>
      <div>
        <ThemedButton buttonNumber="1" onClick={props.onClick}/>
      </div>
      <div>
        <ThemedButton buttonNumber="2" onClick={props.onClick}/>
    </div>
  </React.Fragment>
  );
}

export default App;