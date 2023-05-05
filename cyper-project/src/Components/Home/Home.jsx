import React from 'react'
import './Home.scss'
import school_image from '../../assets/school.jpg'
import library from '../../assets/library.jpg'
import classroom from '../../assets/classroom.jpg'
const Home = () => {
  return (
    <div className='home'>
      <div className='school-cont'>
        <div className='school'>
          <img src={school_image}className='firstimg' />
          <img src={library} className='secondimg'/>
          <img src={classroom} className='thirdimg'/>
          <img src={school_image}className='fourthimg' />
          

        </div>
      </div>
    

    </div>
  )
}

export default Home
