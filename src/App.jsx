import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Banner'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner></Banner>
    <About></About>
    </>
  )
}

export default App