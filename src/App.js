
import React from 'react';
import Navbar from './components/NavBar/Navbar';
// import HomeLinkTree from './components/HomeLinkTree/HomeLinkTree';
import {MenuItems} from "./components/NavBar/MenuItems"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// import './components/NavBar/Navbar.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          {MenuItems.map((item,index)=> {
              return (
                  <Route path={item.path} element={item.element}/>
              )
          })}
        </Routes>        
      </Router>

    </div>
  );
}

export default App;