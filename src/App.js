import React, { useState } from 'react'
import News from './Components/News'
// import About from './Components/About'
import Navbar from './Components/Navbar'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

export default function App() {
  
  const [value, setValue] = useState("in");

  return (
    <div className="">
        <Router basename='/NewsNewer_react'>
          <Navbar/>
          <News/>
      </div>
    )
}
