import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cart from '../Assets/cart.svg'
export const Navbar = () => {
    const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" className='logo'></img>
            <p>MedCare</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Medicine")}}>Medicine{menu==="Medicine"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Medical Equipment")}}>Medical Equipment{menu==="Medical Equipment"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women’s Health")}}>Women’s Health{menu==="Women’s Health"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Baby Care")}}>Baby Care{menu==="Baby Care"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart} alt=''></img>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
