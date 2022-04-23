import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { valueContext } from '../context/Contexts'

export default function Search() {
    const { data } = useContext(valueContext)
    const { countrycontext, setCountrycontext } = useContext(valueContext);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if ( searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(data)
        }
    }

    return (
        <div className='serch'>
            <input type='text' className='serchInput' placeholder='Search for country...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <div itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div>
                                <div>
                                    <Link  onClick={()=>setCountrycontext(item.name)} to='/detail'>
                                        <div>{item.name}</div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    data.map((item) => {
                        return null
                    })
                )}
            </div>
        </div>
    )
}




