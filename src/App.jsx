import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './index.css'
import { Outlet } from 'react-router'


function App() {
  const [total, setTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  return (
    <>
      <Navbar />
      <Outlet context={{total, setTotal, itemsCount, setItemsCount, totalItemsCount, setTotalItemsCount}}/>
    </>
  )
}

export default App
