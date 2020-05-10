import React from 'react';
import './main.css';

// No Forwarding Ref
// Function Component
//
// function FancyButton(props) {
//   return (
//     <button className="fancy-button">
//       {props.children} !!!
//     </button>
//   );
// }


// Added Forwarding Ref
// Function Component
//
function FancyButton(props) {
  return (
    <button ref={props.innerRef} className="fancy-button">
      {props.children} !!!
    </button>
  );
}

// Added Forwarding Ref
// Class Component
//
// class FancyButton extends React.Component {
//   render() {
//     return (
//       <button ref={this.props.innerRef} className="fancy-button">
//         {this.props.children} !!!
//       </button>
//     );
//   }
// };

// export default FancyButton;
export default React.forwardRef((props, ref) => <FancyButton innerRef={ref} {...props} />);
