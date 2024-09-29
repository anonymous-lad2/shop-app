import React from 'react'

export const Product = ({product}) => {
  return (
    <div>
        <p>{product.title}</p>

        {
            product.description.length > 30 ? (
                    <p>{product.description.substring(0, 30)}...</p>
            ) 
                : 
            (
                <p>{product.description}</p>
            )
        }

        <img src={product.image}></img>
    </div>
  )
}
