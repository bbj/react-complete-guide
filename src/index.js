import ReactDOM from 'react-dom';     //no .js needed

import './index.css';                 //this does not work in regular JS; tells npm start to inject it in HTML
import App from './App';              //no .js for javascript files

ReactDOM.render(                      //replace "root" <div> by <App />
  <App />,                            //JSX syntax, transformed into JS; App is a component
  document.getElementById('root')     //index.html: <body><div id="root"></div></body>
);

/*
    - index.js is the first file to run
    - react + react-dom = React library
    - index.html: <body><div id="root"></div></body>

*/