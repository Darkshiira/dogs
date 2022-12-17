import { useEffect, useState } from 'react'
import FactCard from '../components/FactCard'
import './DogFacts.css'

export const DogFacts = () => {
    const [facts, setFacts] = useState([])
    const [selected, setSelected] = useState("")


    useEffect(() => {
        const fetchFacts = async () => {
            const rest = await fetch('https://api.thedogapi.com/v1/breeds')
            const json = await rest.json()
            setFacts(json)
        }
        fetchFacts()
    }, [])

  return (
    <>
    <div className= "selectWrapper">
        <select onChange={(e) => setSelected(e.target.value)}>
            {facts?.map((fact) => {
                return <option key={fact.id} value={fact.id}>{fact.name}</option>
            })}
        </select>
        <a href={`/dogfacts/${selected}`}>Go to fact</a>
    </div>
    <div className="DogFactsWrapper">
        
    {facts?.map((fact) => {
        return(
        

       <FactCard key={fact.id} fact= {fact}/>
        )

    })}
    </div>
    </>
  )
}

export default DogFacts