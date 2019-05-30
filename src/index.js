import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './Context/v2/App';
// import App from './RenderProps/v4/App';
import BlogPost from './HOC/v2/BlogPost';

ReactDOM.render(<BlogPost id="42" />, document.getElementById('root'));
