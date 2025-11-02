import Home from './components/Home'
import Navbar from './components/Navbar'
import './index.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
