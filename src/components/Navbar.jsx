import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className='h-14'/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  <div className="text-green-600 font-bold absolute -top-3 -right-2 z-30 text-lg">{cart.length}</div>
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
}
