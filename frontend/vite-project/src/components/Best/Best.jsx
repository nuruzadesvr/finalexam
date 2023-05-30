import React from 'react'
import "./Best.scss"
import { IoMdSettings } from "react-icons/io";
import {Helmet} from 'react-helmet'

function Best() {
  return (
<>
<section className='best__container'>
<Helmet>
        <title>Wehelp</title>
   
    </Helmet>
<div className='best__main'>
<div className='best__title__text'>
        <div className='bestline'></div>
        <p>Our Top Services</p>
    </div>
    <h2 className='best__top'>Our Top Services</h2>

<div className='best__main__card__container'>

{/* ----card start---- */}
<div className='best__main__card'>

<div>
    <p className='besticon'><IoMdSettings/></p>
    <p className='strategytext'>Strategy Planning </p>
    <p className='manytext'>There are many variations of passages of <br /> lorem Ipsum available but the new majority <br /> have suffered.</p>
</div>
</div>

<div className='best__main__card'>

<div>
    <p className='besticon'><IoMdSettings/></p>
    <p className='strategytext'>Strategy Planning </p>
    <p className='manytext'>There are many variations of passages of <br /> lorem Ipsum available but the new majority <br /> have suffered.</p>
</div>
</div>

<div className='best__main__card'>

<div>
    <p className='besticon'><IoMdSettings/></p>
    <p className='strategytext'>Strategy Planning </p>
    <p className='manytext'>There are many variations of passages of <br /> lorem Ipsum available but the new majority <br /> have suffered.</p>
</div>
</div>

{/* ---card end---- */}


</div>


</div>


<Helmet/>
</section>
</>
  )
}

export default Best