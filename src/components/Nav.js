import {Link} from 'react-router-dom'
import "./Nav.css"
import Dog from "../media/dog.png"


const Nav = () => {
  return (
    <nav>
        <img src={Dog} alt= "dog"></img>
        <h1>Dog Facts</h1>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to ="/filter">Search</Link></li>
          <li> <Link to ="/dogFacts">Dog Facts</Link></li>
        </ul>
      </nav>
  )
}

export default Nav