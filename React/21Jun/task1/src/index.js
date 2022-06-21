import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hello from './components/Hello';
import Nav from './components/Nav';
import Paragragh from './components/Paragragh';
import "./App.css"
import Welcome from './components/Welcome';
import Main from './components/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
const navbar = ReactDOM.createRoot(document.getElementById('nav'));
const myElement= document.getElementById('hello');
const hello = ReactDOM.createRoot(myElement);
const paragragh = document.getElementById('paragragh');
const para = ReactDOM.createRoot(paragragh);
const welcomeDiv = document.getElementById('welcome');
const welcome =ReactDOM.createRoot(welcomeDiv);
const main = ReactDOM.createRoot(document.getElementById('main'));

welcome.render(
  <Welcome name="Alaa"/>
);
  


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



hello.render(
  <div className='container'>
     <Hello />
  </div>
 
)


navbar.render(
    <Nav />
);

para.render(
  <div className='container'>
    <Paragragh />
  </div>
);


main.render(
  <Main />
);
