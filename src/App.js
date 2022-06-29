import './App.css';
import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home'

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        {localStorage.getItem('user-info') ? <>
        
        <Route exact path='/catalog' element={<Menu/>}/>
        </>:
        <>
        <Route exact path='/' element={<Home/>}/>
        </>
        }
              
              
             
                 
      </Routes>
      </BrowserRouter>
      </header>
      
    </div>
  );
}

export default App;
