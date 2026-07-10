import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div>
      <div>

        <NavLink to="/add" >
          <img src={assets.add_icon} alt="" />
          <p>Adicionar Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
