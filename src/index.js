/*Portfolio for Kade Cassidy
Last updated 2022-04-05*/

/*Installed Libraries:
  -React 18.0.0
  -React Bootstrap 5.1.3
  -React Router DOM 6.3.0
  -React Router Bootstrap 0.26.1
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Home';
import Resume from './Components/Resume';
import ContactMe from './Components/ContactMe';
import NavBar from './Components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/resume' element={< Resume />}></Route>
        <Route exact path='/contactme' element={< ContactMe />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
