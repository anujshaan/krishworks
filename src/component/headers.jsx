import React from 'react'

const Header = () => {
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
    </div>
  )
}

export default Header