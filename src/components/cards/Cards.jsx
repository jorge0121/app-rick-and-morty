import Card from "../card/Card";

function Cards ({characters, onClose}) {

    return(
        <div style={{display:"flex",justifyContent:"space-around", marginTop:10}}>
            {
                characters.map(({id, name, species, status, gender, origin, image})=>(
                <Card
                onClose={onClose}    
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                origin={origin}
                status={status}
                
                
                />))
            }

     
        </div>
    )
}
export default Cards