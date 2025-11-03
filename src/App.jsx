import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './index.css'
import { Outlet } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [total, setTotal] = useState(0);
  const [cartArr, setCartArr] = useState([])
  const [totalItems, setTotalItems] = useState(0);
  return (
    <>
    <ToastContainer position="top-center" pauseOnHover autoClose={2000} />
      <Navbar totalItemsCount={totalItems}/>
      <Outlet context={{total, setTotal, totalItems, setTotalItems, cartArr, setCartArr}}/>
    </>
  )
}

export default App
