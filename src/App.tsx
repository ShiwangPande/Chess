import { useState } from 'react'
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './screen/Landing';
import Game from './screen/Game';
import "./App.css"
function App() {

  return (
    <>
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
