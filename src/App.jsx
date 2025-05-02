import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import About from './About'
import Contacr from './Contacr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner></Banner>
    <About></About>

    <Contacr></Contacr>
    </>
  )
}

export default App