import React, { useEffect, useState } from 'react'
import "./Product.scss"
import axios from 'axios'
import {Link} from 'react-router-dom'
function Product() {

    const [data,setData]=useState([])
    const[dummy,setDumyy]=useState(false)
    const [searchValue,setsearchValue]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:8080/products").then((res)=>{
            setData(res.data)
        })
    },[searchValue==="",dummy])


    const handleSearch=(e)=>{
        const value=e.target.value.toLowerCase()
        setsearchValue(value)
        const filterData=data.filter((item)=>item.name.toLowerCase().includes(value))
        
        setData(filterData)
    }
  return (
  
    <>
    <section className='product__container'>
       <div className='searchsortdiv'>
       <input onChange={handleSearch} type="text" placeholder='add to name' /> <br />
        
        <button onClick={()=>{
            setData([...data.sort((a,b)=>b.price-a.price)])
        }}>sort</button>
       </div>
        
        <div className='product__main'>
{data.map((item,index)=>{


return(
    <div key={index} className='card'>
    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png.webp" alt="" />
    <div className='cardinfo'>
        <p>Name: {item.name}</p>
        <p>Price: {item.price} $</p>
    </div>

    <div className='cardbtn'>
    <button className='wishlistbtn'>add wishlist</button>
        <button className='delbtn' onClick={()=>{
            axios.delete(`http://localhost:8080/products/${item._id}`).then(()=>{
                setDumyy(true)
            })
        }}>deletebtn</button>
        
    </div>
    <button className='detail'><Link className='link' to={`/${item._id}`}>Go Detail</Link></button>
</div>
)
})}






        </div>
            
            
            </section>    
    </>
  )
}

export default Product