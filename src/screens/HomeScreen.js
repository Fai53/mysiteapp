import React from 'react'
import products from "../datasource/products"


function HomeScreen() {
  return (
    <div className='products' >
      <div className='firstrow'>
        <div className='card'>
        <h2>Quality phones</h2>
          <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        maxWidth: "90%",
        margin: "20px auto",
}}
>
      {products.map((products) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            border: "1px solid #dedede",
            margin: "10px",
    

  }}
>
      <img src={products.image} height="230px" alt=""/>
      <h5>{products.name}</h5>
      <h5>GH₵{products.price.toFixed(2)}</h5>
      </div>

  

))}
     </div>
      </div>
    
    </div>
    </div>
  )
}

export default HomeScreen