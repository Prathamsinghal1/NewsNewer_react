import React, { useState } from 'react'
import News from './Components/News'
import Navbar from './Components/Navbar'

export default function App() {
  
  const [value, setValue] = useState("in");

  return (
    <div className="">
          <Navbar/>
          <News/>
      </div>
    )
}
