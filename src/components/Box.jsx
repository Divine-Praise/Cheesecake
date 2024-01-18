import React from 'react'
import { FaStar } from "react-icons";

const Box = () => {
  return (
    <div className='card'>
      <img src="" alt="" />
      <h2>Blueberry Cheesecake</h2>
      <p>Blueberry love, cheesecake delight!</p>
      <div className='pricing'>
        <h2>$9.00</h2>
        <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
      </div>
    </div>
  )
}

export default Box
