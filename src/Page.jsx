import React from 'react'
import './Css/style.css'
import Nav from './components/Nav'
import ContactUs from './components/Contactus'
import Heroimg from './Images/HeroImg.png'
import AboutImg from './Images/AboutUsImage.png'
import MenuCard from './components/MenuCard'
import Cheesecake1 from './Images/cheesecake1.png'
import Cheesecake2 from './Images/cheesecake2.png'
import Cheesecake3 from './Images/cheesecake3.png'
import BlogCard from './components/BlogCard'
import BlogImg1 from './Images/ImageBlog1.png'
import BlogImg2 from './Images/ImageBlog2.png'
import BlogImg3 from './Images/ImageBlog3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
  return (
    <div>

      {/* nav---------------- */}
      <Nav />

      {/* hero----------- */}
      <div className='hero'>
        <div className='left'>
          <h1>Bite The World of Cheesecake Wonders</h1>
          <p>We always make our customer happy by providing <br /> as many choices as possible</p>
          <a href="#">Get Started</a>
          <a href="#">Watch Demo</a>
        </div>
        <div className='right'>
          <img src={Heroimg} alt="" />
        </div>
      </div>

      {/* ABOUT--------- */}
      <div className='about'>
        <div className="left">
        <img src={AboutImg} alt="" />
        </div>
        <div className="right">
          <h1>We Love Cheesecake</h1>
          <p>Discover Our Cheesecake Story</p>
          <p>At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity. </p>
          <p>We believe in delivering not just desserts but moments of sheer indulgence.</p>
          <a href="#">Read More</a>
        </div>
      </div>
      
      {/* MENU-------------- */}
      <div className='menu'>
        <h1>Our Menu</h1>

        {/* Menu card------- */}
        <div className='card-box'>
          <MenuCard 
            img = {Cheesecake1}
            title = "Blueberry Cheesecake"
            subT = "Blueberry love, cheesecake delight!"
            price = "9.00"
          />
          <MenuCard 
            img = {Cheesecake2}
            title = "Biscoff Cheesecake"
            subT = "Biscoff adores cheesecake magic"
            price = "11.00"
          />
          <MenuCard 
              img = {Cheesecake3}
              title = "Chocolate Cheesecake"
              subT = "Cherish Chocolate, relish cheesecake magic!"
              price = "10.00"
          />
        </div>
        <div className="view-more">
          <a href="#">View More</a>
          <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
      </div>

      {/* BLOG-------- */}
      <div className='blog'>
        <h1>Our Blog </h1>
        <p>Our Recent Posts</p>

        <div className='blog-card-box'>
          <BlogCard 
            img = { BlogImg1 }
            date = "23 Nov, 2023 / Cheesecake"
            title = "A Peek Behind the Cheesecake Curtain"
            subT = "Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very..."
          />
          <BlogCard 
            img = { BlogImg2 }
            date = "18 July, 2023 / Cheesecake"
            title = "Low-Sugar & Gluten-Free Cheesecakes"
            subT = "Welcome to our guilt-free indulgence zone, where we re redefining the art of cheesecake with our delectable low-sugar..."
          />
          <BlogCard 
           img = {BlogImg3}
           date = "1 January, 2024 / Cheesecake"
           title = "Sweet Words Customer Reviews of Cheesecakes"
           subT = 'ndulge in the rich tapestry of heartfelt stories within "Sweet Words." This curated collection of customer reviews offers a glimpse into the joy...'
           />
        </div>
      </div>

      {/* CONTACTUS--------------- */}
        <ContactUs />
      <div className='copyright'>Copyright <span>(C)</span> 2024 Dscode | All rights reserved</div>  
    </div>
  )
}

export default LandingPage;
