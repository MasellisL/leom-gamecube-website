import './home.css'
import { Link } from 'react-router-dom';
import Emerald from '/images/emeraldgcc.jpeg'
import Modded from '/images/moddedgcc.jpeg'

export default function Home() {
    return(
      <main>
<div className="image-container">
  
        <Link to="/controllers"> <img src={Emerald} className="home-image"></img> </Link>
        <Link to="/mods">        <img src={Modded} className="home-image"></img> </Link>

        </div>


        <div>
        <p className="website-description">
            Welcome to the website of Gamecube-website! <br></br>Here we sell pre-modded gamecube controllers, but we also offer a send in service <br></br> where we will mod your controller once you have shipped it to us!
        </p>
        <p className="website-description">
        We are based in the California central valley, but happily accept orders from anywhere in the US!
        </p>
        </div>
        
      </main>
    )
}