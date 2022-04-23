import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function Btnback() {
  return (
    <div>
      <div className='back'>
        <NavLink to="/" className={'btnBack'}><FaArrowLeft className='icon' />back</NavLink>
      </div>
    </div>
  )
}
