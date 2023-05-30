import React from 'react'
import "./Footer.scss"
import {AiOutlineTwitter,AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <>
 <section className='footer__container'>
   <div className='footer__main'>

<div className='footer__main__left'><p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p> </div>
<div className='footer__main__right'>
  <ul>
    <li><AiOutlineTwitter/></li>
    <li><AiFillFacebook/></li>
    <li><AiOutlineInstagram/></li>
    
  </ul>
</div>

   </div>
 </section>
 </>
  )
}

export default Footer