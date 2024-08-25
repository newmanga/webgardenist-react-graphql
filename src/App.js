
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import {MenuItems} from "./components/NavBar/MenuItems"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ThankYouPage from './components/Thank/Thank';
import ThankYouContactPage from './components/Thank/ThankContact';
import ErrorContactPage from './components/Contact/Error';
import SurveyPage from './components/Survey/Survey';
import Footer from './components/Footer/Footer';

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
          <Route path="/contact-thanks" element={<ThankYouContactPage/>}/>
          <Route path="/contact-error" element={<ErrorContactPage/>}/>
          <Route path="/survey" element={<SurveyPage/>}/>
          
        </Routes>        
      </Router>
      <Footer/>
    </div>
  );
}

export default App;