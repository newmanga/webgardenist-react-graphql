
import React from 'react';
import Navbar from './components/NavBar/Navbar';
// import HomeLinkTree from './components/HomeLinkTree/HomeLinkTree';
import {MenuItems} from "./components/NavBar/MenuItems"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ThankYouPage from './components/Thank/Thank';
import SurveyPage from './components/Survey/Survey';
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
          <Route path="/thanks" element={<ThankYouPage/>}/>
          <Route path="/survey" element={<SurveyPage/>}/>
          
        </Routes>        
      </Router>

    </div>
  );
}

export default App;