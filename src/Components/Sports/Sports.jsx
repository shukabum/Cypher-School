import React from 'react'
import './Sports.scss'
import race from '../../assets/race.png'
import games from '../../assets/games.png'
import ingames from '../../assets/ingames.png'
import art from '../../assets/art.png'
const Sports = () => {
  return (
    <div className='sports-page'>
      
      <div className='heading'>Sports Day</div>
     
       <div className='backs'><a href='https://www.englandathletics.org/athletics-and-running/athlete-registration/' target='_blank'><img src={race} height={200} />ATHLETICS</a></div>
       <div className='backs2'><a href="https://www.ea.com/games" target='_blank'><img src={games} height={200}/><br/>EA SPORTS</a></div>
       <div  className='backs3'><a href="https://yardgames.com/collections/indoor-games-use" target='_blank'><img src={ingames} height={300}/><br/>INDOORS</a></div>
       <div  className='backs5'><a href="https://onlinegallery.art/en/" target='_blank'><img src={art} height={300}/><br/>ART & CRAFT</a></div>
      
    </div>
  )
}

export default Sports
