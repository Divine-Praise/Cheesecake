import React from 'react'
import '../Css/style.css'

const BlogCard = ({img, date, title, subT}) => {
  return (
    <div className='blog-card'>
        <div className='img'>
            <img src={img} alt="" />
        </div>
        <h4>{ date }</h4>
        <h3>{ title }</h3>
        <p>{ subT } </p>
        <a href="#">Read More</a>
    </div>
  )
}

export default BlogCard
