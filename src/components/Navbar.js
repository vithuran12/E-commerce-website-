import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';//import cart icon
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="links">

          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>
              <ShoppingCart size={32}/>

          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
