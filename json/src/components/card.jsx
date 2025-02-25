import React, { useState } from 'react'
import './card.css'

function Card() {

    const images = [
        
        {id:1, image:"camera.jpg", name:"Camera"},
        {id:2, image:"clock.jpg", name:"Clock"},
        {id:3, image:"keyboard.jpg", name:"keyboard"},
        {id:4, image:"laptop.jpg", name:"Laptop"}
    ]

    const [search,setSearch] = useState('')

    const handleFilter = images.filter((image)=>(
        image.name.toLowerCase().includes(search.toLowerCase())
    ))

  return (
    <div className='container'>

        <input type="text" placeholder='Search by name' value={search} onChange={(e)=>setSearch(e.target.value)} 
        className='search-input'/>
        
        <div className='images-container'>
            {handleFilter.map((image,id)=>(
                <div key={id}>
                    <img src={image.image} alt="name" className='product-image'/>
                    <h4>{image.name}</h4>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Card