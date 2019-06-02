import React from 'react';
import CustomTextInput from '../v2/CustomTextInput';

class AutoFocusTextInput extends React.Component {

  textInput = React.createRef();

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

export default AutoFocusTextInput;
