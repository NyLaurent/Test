import { useState } from 'react'
import Navbar from './Components/Navbar'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Navbar/>
  )
}

export default App
