import { useState, useEffect } from 'react'
import './Filter.css'


const Filter = () => {

    const [breeds, setBreeds] = useState([])
    const [facts, setFacts] = useState([])
    const [selectedWeight, setSelectedWeight] = useState('')
    const [breedGroup, setBreedGroup] = useState('')

    useEffect(() => {
        const fetchFacts = async () => {
            const rest = await fetch('https://api.thedogapi.com/v1/breeds')
            const json = await rest.json()
            const uniqueBreedGroups = [...new Set(json.map(breed => breed.breed_group))]
            setFacts(uniqueBreedGroups)
            
        }
        fetchFacts()
    }, [])

    const fetchABreed = async () => {
            const rest = await fetch('https://api.thedogapi.com/v1/breeds')
            const json = await rest.json()
            setBreeds(json)
            const weights = json.map((breed) => {             
                return breed.weight.metric

            })
           const weightSplit = weights.map(weight => {
                return weight.split(" - ")
            })
            const weightSplit2 = weightSplit.map(weight => {
                return weight.map(weight => {
                    return parseInt(weight)
                })
                
            })

            const breeds = []
            for (let i = 0; i < weightSplit2.length; i++) {
               
                    
                if (selectedWeight === "10") {
                    if ((json[i].breed_group === breedGroup) && (weightSplit2[i][0] <= 10) && (10 >= weightSplit2[i][1])) {
                        breeds.push(json[i].name)
                    }
                    
                }
                else if (selectedWeight === "20") {

                    if ((weightSplit2[i][0] > 10) && (weightSplit2[i][0]<= 20) && (20 < weightSplit2[i][1]) && (json[i].breed_group === breedGroup)) {
                        breeds.push(json[i].name)
                    }
                    
                }

                else if (selectedWeight === "30") {
                    if ((weightSplit2[i][0] < 20) && (weightSplit2[i][0]<= 30) && (30 < weightSplit2[i][1]) && (json[i].breed_group === breedGroup)) {
                        breeds.push(json[i].name)
                    }
                    
                }
                else {
                    if (((weightSplit2[i][0] > 40) && (json[i].breed_group === breedGroup))  || ((40 < weightSplit2[i][1]) && (json[i].breed_group === breedGroup))) {
                        breeds.push(json[i].name)
                    }
                    
                }
                
            setBreeds(breeds);
            
            }
        
        }


  return (
    <div>
        <div className= "SearchWrapper">
            <h1>Search for your future dog!</h1>
            <p>(Sorted by weight)</p>
            <select onChange={(e) => setSelectedWeight(e.target.value)}>
                <option value="10"> Small dog</option>
                <option value="20">Medium small dog</option>
                <option value="30">Medium large dog</option>
                <option value="40">Large dog</option>
            </select>
            
            <select onChange={(e) => setBreedGroup(e.target.value)}>
                {facts.map((fact, index) => {
                    return <option key={index} value={fact}>{fact}</option>
                 }
              )}
            </select>
            <button onClick= {() => fetchABreed()}> Find!</button>
        </div>
            <ul className= "SortingList">
                {breeds.map((breed, index) => {
                    return <li key={index}>{breed}</li>
                })}
            </ul>


            
    </div>
  )
        }

export default Filter