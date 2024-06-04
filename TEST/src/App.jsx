import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

<Navbar/>
   <Home/>
    
    </div>
   
    
    
   
  )
}

export default App
