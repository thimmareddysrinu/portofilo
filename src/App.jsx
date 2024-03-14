import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import './App.css'
import Aside from './component/Aside'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Aside/>
      <div className='main-content'>
        <Navbar/>
        <section className=''>
          <Outlet/>
        </section>
      </div>
    </>
  )
}

export default App
