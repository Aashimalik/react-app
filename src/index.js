import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



// render(<App />, document.getElementById('root'));   


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// ReactDOM.render(
//     <Home />,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     <CreateContact />,
//     document.getElementById('root')
// );
// ReactDOM.render(
//     <ShowContact />,
//     document.getElementById('root')
// )