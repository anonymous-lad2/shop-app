import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice'
import {AiFillDelete} from "react-icons/ai"

export const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch()
    const removeFromCart = () => {
        dispatch(remove(item.id))
    }
  return (
    <div>
        <div>
            <img src={item.image}></img>
        </div>
        <div>
            <h1>{item.image}</h1>
            <h1>{item.description}</h1>
            
            <div>
                <p>{item.price}</p>
                <div onClick={removeFromCart}>
                    <AiFillDelete/>
                </div>
            </div>

        </div>
    </div>
  )
}
