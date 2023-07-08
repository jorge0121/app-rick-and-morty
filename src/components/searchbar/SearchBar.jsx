import './searchbar.css'
import { useState } from 'react';
export default function SearchBar(props) {
   const [id,setId]=useState("");
    const handleChange = (event) => {
        setId(event.target.value);
      }

    
    return (
       <div className="search-container">
           <input type='search' className="search-input" onChange={handleChange}/>
       <button onClick={()=> props.onSearch(id)} className="search-button">Agregar</button> 
       </div>
    );
 }
 