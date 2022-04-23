import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Search from '../component/Search'
import { valueContext } from '../context/Contexts';

export default function Home(props) {
  const [countries, setCountry] = useState([])
  const { countrycontext, setCountrycontext } = useContext(valueContext);
  const { data, setData } = useContext(valueContext);

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all`)
      .then(res => {
        const Countrys = res.data;
        setCountry(Countrys);
        setData(Countrys)
      })
  }, [])
  const handleClick = (e) => {
    setCountrycontext(e.target.value);
  }

  return (
    <>
      <Search />
      <div className={'w-100 home'}>
        {countries.map((person, i) => {
          return (
            <div className='card'>
              <div className='containerCard' key={i}>
                <div className='headerCard'>
                  <Link onClick={() => setCountrycontext(person.name)} to='/detail'><img src={person.flags.svg} className={'w-100 imgCard'} value={person.alpha3Code} onClick={handleClick} /></Link></div>
                <div className='textCard'>
                  <h4>{person.name}</h4>
                  <p>population:{person.population}</p>
                  <p>Regin:{person.region}</p>
                  <p>capital:{person.capital}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )

}
