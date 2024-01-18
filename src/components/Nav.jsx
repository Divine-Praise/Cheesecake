import React from 'react'
import '../Css/style.css'
import Logo from '../Images/Logo.png'


const Nav = () => {
  return (
    <div>
      <nav>

        {/* logo----- */}
        <div className='logo'>
            <a href="#"><img src={Logo} alt="" /></a>
        </div>

        {/* links------ */}
        <div className='nav-links'>
            <ul>
                <li><a className='active' href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        {/* sign up btn------ */}
        <div className='signUp'>
            <a href="#">Sign up</a>
        </div>

      </nav>
    </div>
  )
}

export default Nav;
