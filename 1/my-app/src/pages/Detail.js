import React, { useContext } from 'react'
import Btnback from '../component/Btnback'
import { valueContext } from '../context/Contexts'
import { Link } from 'react-router-dom'

export default function Detail() {
  const { countrycontext, setCountrycontext } = useContext(valueContext)
  const { data } = useContext(valueContext)
  const detail = data.find(item => item.alpha3Code === countrycontext || item.name == countrycontext)

  return (
    <>
      <Btnback />
      <div className='detail'>
        <div className='w50 detail-Box'>
          <img src={detail.flags.svg} className='w-100' />
        </div>
        <div className='details'>
          <div className='caption-detail'>
            <div>
              <h3>{detail.name}</h3>
              <p>Navigate name:{detail.nativeName}</p>
              <p>population:{detail.population}</p>
              <p>Regin:{detail.region}</p>
              <p>capital:{detail.capital}</p>
            </div>
            <div className='caption2'>
              <p>top Level Domain:{detail.topLevelDomain}</p>
              <p>countries:{detail.currencies.map((item) => <span>{item.name}</span>)}</p>
              <p>languages{detail.languages.map((item) => <span>{item.name}</span>)}</p>
            </div>
          </div>
          Borders countries:<span>{detail.borders?.map(item => (<Link to='/detail' className='btnCountry' onClick={() => setCountrycontext(item)}>{item}</Link>))}</span>
        </div>
      </div>
    </>
  )
}
