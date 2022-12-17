import {Link} from 'react-router-dom'
import "./FactCard.css"


const FactCard = ({fact}) => {
  return (
    <div className="DogCard">
        <h3>{fact.name}</h3>
        <img src={fact.image.url} alt ={fact.name}></img>
        <Link to = {`/dogFacts/${fact.id}`}>More Info</Link>

        </div>)
}

export default FactCard
