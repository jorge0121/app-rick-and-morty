
import "../card/card.css"
export default function Card ({name,species,gender,image,onClose,status,origin,id}) {

return(
    <div className="container">
    <div className="button-container">
    <button onClick={()=>{onClose(id)}} className= "button">X</button></div>
    <h1 className="style-name">{name}</h1>
    {/*<h2>{status}</h2>
    {/*<h2> {origin}</h2>*/} 
    <img src={image} alt="not found" className="style-image"/> 
    <hr></hr>
    <h2 className="species-gender-style"><div>{species}</div> <div>{gender}</div></h2>
    </div>
)
}

