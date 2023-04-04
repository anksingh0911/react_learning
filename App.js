import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
'h1',
{
  id:'heading', 
  xyz:'anything'
}, 
'Hello World in javaScript Learning React'
);
console.log(heading,'heading');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)