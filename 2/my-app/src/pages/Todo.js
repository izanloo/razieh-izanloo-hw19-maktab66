import React,{useContext} from 'react'
import {CheckLogin} from '../context/checkLogin'

export default function Todo() {
    const { data } = useContext(CheckLogin);
    console.log(data)
  return (
    <>
         <div>{data.category}</div>
         <div>{data.title}</div>
         <div>{data.des}</div>

    </>
  )
}
