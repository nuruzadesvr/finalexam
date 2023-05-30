import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  return (
  <>
  <section className='navbar__container'>

<div className='navbar'>
 <div className='navbar__left'><img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" /></div>
 <div className='navbar__right'>
   <ul>
    <li><Link to="/home">Home</Link></li>

     <li><Link to="/added">Add</Link></li>
     <li><Link to="/wishlist">Wishlist</Link></li>

   </ul>
 </div>
</div>


  </section>
  </>
  )
}

export default Navbar