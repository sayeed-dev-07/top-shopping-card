import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './index.css'
import { Outlet } from 'react-router'

function App() {
  const [total, setTotal] = useState(0);
  const [cartArr, setCartArr] = useState([])
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  return (
    <>
      <Navbar totalItemsCount={totalItemsCount}/>
      <Outlet context={{total, setTotal, totalItemsCount, setTotalItemsCount, cartArr, setCartArr}}/>
    </>
  )
}

export default App
