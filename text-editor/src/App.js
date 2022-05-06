// import Header from './Components/Header';
import Home from './Components/Home';
import Navs from './Components/Navs';
import React from 'react'
import TextEditor from './Components/text-editor';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './App.css';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Navs/>
        <Routes>
            <Route path="./" exact element={<Home/>}>
              <Route index element="Home"/>  
            </Route>
            <Route path="./Components/text-editor.js" exact element={<TextEditor/>}>
              <Route index element="text-editor"/>  
            </Route>
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
