import { NavLink } from 'react-router-dom'; // for active link in navigation
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import FunctionalComponent from './FunctionalComponent';

 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">

            {/* start */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#"><Link to="/">ReactRouter</Link></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" ><NavLink to="/"  activeClassName="active" >Home</NavLink></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"> <NavLink to="/about"  activeClassName="active">About Us</NavLink></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled"> <NavLink to="/contact"  activeClassName="active">Contact Us</NavLink></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled"> <NavLink to="/FunctionalComponent"  activeClassName="active">FunctionalComponent</NavLink></a>
                    </li>
                  </ul>
                  
                </div>
              </nav>
            {/* end */}
           <Routes>
                 <Route path='/' element={< Home />}></Route>
                 <Route path='/about' element={< About />}></Route>
                 <Route path='/contact' element={< Contact />}></Route>
                 <Route path='/FunctionalComponent' element={< FunctionalComponent />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;