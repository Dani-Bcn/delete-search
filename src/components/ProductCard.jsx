import React from 'react'

export default function ProductCard({id, name}) {
  return (
    <div>
        <div>ProductCard</div>     
        <div key={id}></div>
        <h1>{name}</h1>
        <button onClick={ ()=>deleteProduct(id)}>Delete</button>
    </div>
   
  )
}
