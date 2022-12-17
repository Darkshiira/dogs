import PicSearch from '../components/PicSearch';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className= "Home">
      <h1>Welcome to search for amazing pictures!</h1>
      <p>Or check out our fact-page:<Link to ="/dogFacts"> Dog Facts</Link></p> 
      <PicSearch />
    </div>
  )
}


export default Home;