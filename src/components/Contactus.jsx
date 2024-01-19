import React from 'react'
import '../Css/style.css'
import ContactUsImg from '../Images/contactusImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Contactus = () => {
  return (
    <div className='contact'>
      <div className='left'>
        <h1>Contact Us</h1>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department!</p>
        <img src={ContactUsImg} alt="Contact us image" />
        <div className='social-media'>
          <div className='icon-div'>
            <FontAwesomeIcon icon={faFacebookF} className='icon'/>
          </div>
          <div className='icon-div'>
            <FontAwesomeIcon icon={faInstagram} className='icon'/>
          </div>
          <div className='icon-div'>
            <FontAwesomeIcon icon={faXTwitter} className='icon'/>
          </div>
          <div className='icon-div'>
            <FontAwesomeIcon icon={faYoutube} className='icon'/>
          </div>
        </div>
      
      </div>
      <div className='right'>
        <form action="#">
          <div className='input-field'>
            <input type="text" name="name" id="name" placeholder='Name'/>
          </div>
          <div className='input-field'>
            <input type="email" name="email" id="email" placeholder='email'/>
          </div>
          <div className='input-textarea'>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message....'></textarea>
            <button type='button'>Contact us now</button>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default Contactus
