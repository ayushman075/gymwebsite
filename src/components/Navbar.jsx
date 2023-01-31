import './Navbar.css'
import { useState } from 'react'
import React from 'react'
import logo from '../images/logo.png'
import {Link,NavLink} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {


    const [isNavShowing,setIsNavShowing]=useState(false);

  return (
    <nav>
        <div className="container nav_container">
        <a href='/'><img className='logo' src={logo} alt='logo'></img></a>
            <ul className={`nav__links ${isNavShowing ? 'show__nav':'hide__Nav'}`}>
                
           <li>
           <a href='/about'>About</a>
           </li>
           <li>

           <a href='/gallery'>Gallery</a>
           </li>
           <li>
           <a href='/plans'>Plans</a>
           </li>
           <li>
           <a href='/trainers'>Trainers</a>
           </li>
           <li>
           <a href='/contactus'>Contact Us</a>
           </li>
           </ul>    
           <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(!isNavShowing)}>
            {
                isNavShowing ?<MdOutlineClose /> :<FiMenu/>
            }
            
            </button>
        </div>
    </nav>
  )
}

export default Navbar