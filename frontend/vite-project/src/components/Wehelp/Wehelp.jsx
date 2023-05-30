import React from 'react'
import {Helmet} from "react-helmet";

import "./Wehelp.scss"
function Wehelp() {
  return (
  <>
     <Helmet>
        <title>Wehelp</title>
   
    </Helmet>
  <section className='wehelp__container'>
    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg" alt="" />

    <div className='wehelp__text__container'>
      <div className='wework__title__text'>
        <div className='line'></div>
        <p>Committed to success</p>
      </div>
      <h2>We help to grow <br /> your business</h2>
      <p className='mollit'>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate <br /> <br /> velit esscillumlore eu quife nrulla parihatur.</p>
    </div>
    <Helmet/>
  </section>
  </>
  )
}

export default Wehelp