import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import App from './Context/v2/App';
// import App from './RenderProps/v3/App2';

// import BlogPost from './HOC/v2/BlogPost';
// import Comments from './HOC/v2/CommentList';
// const App = () => <>
//   <BlogPost id="42" />
//   <Comments />
// </>;

// import App from './Refs/v3/AutoFocusTextInput';
// import App from './RefsForwarding/App';
// import App from './ErrorBoundary/App';

import App from './Hooks/Hook03';
// import App from './Hooks/Hook04useCallback';

//import App from './HowToTest/ReactTestUtils/Counter';
//import App from './HowToTest/HowToTestWithJest/App';
// import App from './HowToTest/RTL/App';

//import App from './HowToTest/RTL/App2';

ReactDOM.render(<App />, document.getElementById('root'));
