import React from 'react'
import { Outlet } from 'react-router-dom'
import Them from '../component/Them'

export default function Header() {
  return (
    <>
      <div className='header'>
        <span>where in the world?</span>
        <Them />
      </div>
      <Outlet />
    </>
  )
}
