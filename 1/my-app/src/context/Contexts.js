import React, { useState, createContext } from 'react'
export const valueContext = createContext({});

export default function Contexts({ children }) {
  const [countrycontext, setCountrycontext] = useState([])
  const [data, setData] = useState()
  return (
    <div>
      <valueContext.Provider value={{ countrycontext, setCountrycontext, data, setData }}>
        {children}
      </valueContext.Provider>
    </div>
  )
}
