import {useEffect, useState} from 'react';
import './PicSearch.css';

const PicSearch = () => {
    const [content, setContent] = useState([]);
    const [content2, setContent2] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
    const rest =  await  fetch('https://dog.ceo/api/breeds/list/all')
    const rest2 = await fetch("https://dog.ceo/api/breed/hound/list")
    const json = await rest.json(); 
    const json2 = await rest2.json();

    setContent(json.message)
    setContent2(json2.message);
}
fetchContent();
    }, [])
      
const fetchImage = async () => {
    const rest = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    const json = await rest.json();
    setImage(json.message);

}

  return (
    <div className="PicSearchWrapper">
        <div className="selectWrapper">
    <select onChange = {(e) => setSelectedBreed(e.target.value) && fetchImage() }> 
    {Object.keys(content).map((breed) => {
        return <option key={breed} value={breed}>{breed}</option>
    })}
    {content2.map((breed) => {
        return <option key={breed} value={breed}>{breed}</option>
    })}
    
    </select>
    <button onClick = {() => fetchImage()}>Fetch Image</button>
    </div>
    <h1>{selectedBreed}</h1>
    {image ? <img src={image} alt= {selectedBreed}></img>: null}
    </div>
  )
}
export default PicSearch