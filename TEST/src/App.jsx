import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Service from './Components/Service'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

<Navbar/>
   <Home/>
   <Service/>
    </div>
   
    
    
   
  )
}

export default App
