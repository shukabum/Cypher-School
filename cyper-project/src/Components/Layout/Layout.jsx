import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'  
import '../sidebar/Sidebar.scss'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
import './Layout.scss'
import bag from '../../assets/bag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import openbag from '../../assets/openbag.png'
const Layout = () => {
  let click=0;
  const [imgbag, setimgbag]=useState(bag)
  const handleClick=(e)=>{
    
    if(click==0)
    {
      document.querySelector('.Sidebar').classList.add('marg');
      
      click=1;
    }
    else{
      document.querySelector('.Sidebar').classList.remove('marg');
      click=0;
      
    }
    
    
  }
  return (
    <div className='layout'>
      
        <div className='display'>
       
        <div className='sidebx '>
            <Sidebar />
            <button type='submit' className='bag' onClick={(e)=>handleClick(e)}> <img src={imgbag} height={75} /></button>
            
          </div>
          
          <Outlet />
        </div>
    </div>
  )
}

export default Layout
