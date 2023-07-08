import './App.css'
import Cards from './components/cards/Cards'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const URL ="http://rickandmortyapi.com/api/character";

function App () {
  

  const [characters,setCharacters] = useState([]);
  function onSearch (id){
    axios(`http://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
      if(data.id){setCharacters([...characters,data])}
      else{
        window.alert('No hay personaje con ese ID')
      }
    })
    .catch((error)=>{window.alert("El personaje no existe")})
  }
  const onClose = (id)=>{
    const filtered = characters.filter
    ((chars) => chars.id !== id );
    setCharacters(filtered);
  }


  return(

    <div  className='App' style={{ padding: '25px' }}>
  
     <div>
      <Nav onSearch={onSearch}/>
    </div>
      
    <div>
      <Cards characters = {characters} onClose={onClose}/>
    </div>
    
   
    </div>
  )

  
}
export default App