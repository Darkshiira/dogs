import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './SingleDogFacts.css'

const SingleDogFact = () => {
    const {id} = useParams();
    const [fact, setFact] = useState({})
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [image, setImage] = useState("")
    useEffect(() => {
        const fetchFact = async () => {
            const rest = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
            const json = await rest.json()
            setFact(json)
            const rest2 = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${id}`)
            const json2 = await rest2.json()
            setImage(json2[0].url)
            setWeight(json.weight.metric + " kg")
            setHeight(json.height.metric + " cm")
        }
        fetchFact()
    }, [id])

    if (!fact) return null

  return (
                <div className= "SingleDogFact"key={fact.id}>
                    <h1>{fact.name}</h1>
                    <div className= "SingleDogFactWrapper">
                    <img src={image} alt={fact.name}></img>
                    <div>
                    <p><strong>Weight: </strong>{weight}</p>
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Breed-group: </strong>{fact.breed_group}</p>
                    <p><strong>Life span: </strong> {fact.life_span}</p>
                    {fact.origin && <p><strong>Origin: </strong>{fact.origin}</p>}
                    <p><strong>Temperament:</strong> {fact.temperament}</p>
                    <p><strong>Bred for:</strong> {fact.bred_for}</p>
                    </div>
                </div>

</div>
  )
}

export default SingleDogFact