import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard, faFootball, faGraduationCap, faHome, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className='Sidebar'>

      <nav>
        <div className='tabs'>
          <NavLink exact="true"activeclassname="active" to='/'>
            <FontAwesomeIcon icon={faHome} color="yellow"/>
          </NavLink>
           <span className='span'>Home</span>
           <NavLink exact="true" activeclassname="active" to='/academics'>
              <FontAwesomeIcon icon={faGraduationCap} color="yellow"/>

            </NavLink>
            <span className='span'>Academics</span>
            <NavLink exact="true" activeclassname="active" to='/sports'>
              <FontAwesomeIcon icon={faFootball} className='sports-icons' color="yellow"/>

            </NavLink>  
            <span className='span'>Sports</span>
            <NavLink exact= 'true' activeclassname='active'to='/contact'>
              <FontAwesomeIcon icon={faContactCard} color='yellow'/>
            </NavLink>
            
            <span className='span'>Contact</span>
            <NavLink exact='true' activeclassname='active' to='/login'>
              <FontAwesomeIcon icon={faRightToBracket} color='yellow' opacity={1}/>
            </NavLink>
            <span className='span'>Login</span>
          
        </div>
        
      </nav>

      
    </div>
  )
}

export default Sidebar
