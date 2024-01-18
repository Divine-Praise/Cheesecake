import React from 'react'
import './Css/style.css'
import Nav from './components/Nav'
import Heroimg from './Images/HeroImg.png'
import AboutImg from './Images/AboutUsImage.png'
import Box from './components/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
      <Box />
    </div>
  )
}

export default LandingPage;
