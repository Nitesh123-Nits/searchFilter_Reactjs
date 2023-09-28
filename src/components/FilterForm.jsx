import React,{useEffect, useState} from 'react'
import datalist from '../data.json'
const FilterForm = () => {
    const [filteredData,setFilteredData]=useState(datalist)
   const [searchTerm,setSearchTerm]=useState("")
   useEffect(()=>{
    setFilteredData(datalist.filter( item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
   },[searchTerm])
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
    }
  return (
    <>
    <div className="search-form">
        <h1>Filter Form</h1>
        <input type="text" onChange={handleChange} placeholder='Enter search term' value={searchTerm}/>
    </div>
    <div className="listdata"> 
        {
        filteredData.map((x,i)=> { 
        return (
            <ul >
            <li key={i}>{x.name}</li>
            <li key={i}>{x.email}</li>
            </ul>    
        )   }   
            )
        }         
    </div>
    </>

  )
}

export default FilterForm