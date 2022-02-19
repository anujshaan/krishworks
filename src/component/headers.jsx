import React,{useState} from 'react';
import {FiMenu} from 'react-icons/fi'

const Header = () => {
  const [navClick,setNavClick] = useState(false)
  return (
    <div className='header-wrapper'>
        <h1 className='logo'>KrishWorks </h1>
        <div className='header-menu__container'>
            <ul className='header__links'>
                <li>Home</li>
                <li>Products</li>
                <li>Wishlist</li>
            </ul>

            <div className='header__button'>
                <button>Check out</button>
            </div>
        </div>
        <FiMenu className='header__menu-icon' onClick={()=>setNavClick(true)} />
        {
          navClick &&
          <div className='header__links--navbar'>
            <p className='navbar-close' onClick={()=>setNavClick(false)}>&times;</p>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Wishlist</li>
                <li>Check out</li>
            </ul>
          </div>
        }
    </div>
  )
}

export default Header