import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../Css/style.css'


const MenuCard = ({img, title, subT, price}) => {
  return (
    <div className='card'>
      <div className='img'><img src={ img } alt="Cheesecake" /></div>
      <h2>{ title }</h2>
      <p>{ subT }</p>
      <div className='pricing'>
        <div className='price'><span>$</span><h2>{ price }</h2></div>
        <div>
            <FontAwesomeIcon icon={ faStar } />
            <FontAwesomeIcon icon={ faStar } />
            <FontAwesomeIcon icon={ faStar } />
            <FontAwesomeIcon icon={ faStar } />
            <FontAwesomeIcon icon={ faStar } />
        </div>
      </div>
    </div>
  )
}

export default MenuCard
