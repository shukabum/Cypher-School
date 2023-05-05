import './App.css'
import React from 'react'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/sidebar/Sidebar'
import Academics from './Components/Academics/Academics'
import Sports from './Components/Sports/Sports'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login'


function App() {
  

  return (
    <>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/academics" element={<Academics/>} />
          <Route path="/sports" element={<Sports />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App
