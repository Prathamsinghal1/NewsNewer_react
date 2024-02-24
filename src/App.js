import React, { useState } from 'react'
import News from './Components/News'
import About from './Components/About'
import Navbar from './Components/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  
  const [value, setValue] = useState("in");

  const handleOnClick = (event, code) => {
    setValue(code);
  }

  return (
    <div className="">
        <Router>
          <Navbar key={"hello"} handleOnClick={handleOnClick}/>
          <Routes>
            <Route exact path="/" element={<News key="1" category="" country="in"/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/general" element={<News key="general" category="general" country={value}/>} />
            <Route exact path="/business" element={<News key="business" category="business" country={value}/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" country={value}/>}/>
            <Route exact path="/health" element={<News key="health" category="health" country={value}/>}/>
            <Route exact path="/science" element={<News key="science" category="science" country={value}/>}/>
            <Route exact path="/sports" element={<News key="sports" category="sports" country={value}/>}/>
            <Route exact path="/technology" element={<News key="technology" category="technology" country={value}/>}/>
          </Routes>
          
        </Router>
      </div>
    )
}
