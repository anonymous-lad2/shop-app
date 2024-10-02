import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'

export const Product = ({product}) => {

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product))
    toast.success('Added to cart')
  }

  const removeFromCart = () => {
    dispatch(remove(product.id))
    toast.error('Removed from cart')
  }

  return (
    <div>
        <div>
          <p>{product.title}</p>
        </div>

        <div>
          <p>{product.description}</p>
        </div>

        <div>
          <img src={product.image}/>
        </div>

        <div>
          <p>{product.price}</p>
        </div>

        {
          cart.some((p) => p.id == product.id) ? 
            (<button onClick={removeFromCart}>
              Remove from cart
            </button>)

              :

            (<button onClick={addToCart}>
              Add to cart
            </button>)
        }
    </div>
  )
}
