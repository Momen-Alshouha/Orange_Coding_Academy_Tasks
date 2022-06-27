import React from 'react';
import ReactDOM from 'react-dom/client';
import FunctionalComponent from './FunctionalComponent';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './ClassComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1>class component</h1>
    <ClassComponent />
    <hr/>
    <h1>functional component</h1>
    <FunctionalComponent />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
