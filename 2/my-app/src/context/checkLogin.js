import React, { useState, createContext } from 'react'
export const CheckLogin = createContext({});

export default function Context({ children }) {
  const [userLogin, setUserLogin] = useState(false)
  const [nameUser, setNameuser] = useState("")
  const [data, setData] = useState([])
  return (
    <div>
      <CheckLogin.Provider value={{data,setData, userLogin, setUserLogin,nameUser, setNameuser}}>
        {children}
      </CheckLogin.Provider>
    </div>
  )
}
