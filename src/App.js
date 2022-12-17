import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import DogFacts from './pages/DogFacts';
import SingleDogFact from './pages/SingleDogFact';
import Filter from './pages/Filter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/dogFacts/" element= {<DogFacts/>} />
        <Route path= "/dogFacts/:id" element = {<SingleDogFact />} />
        <Route path= "/filter" element = { <Filter />} />
      </Routes>
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
