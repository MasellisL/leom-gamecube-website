import './home.css'
import Emerald from '../../public/images/emeraldgcc.jpg'
import Modded from '../../public/images/moddedgcc.jpg'

export default function Home() {
    return(
      <main>
<div className="image-container">
    
            <img src={Emerald} className="home-image"></img>
            <img src={Modded} className="home-image"></img>

        </div>


        <div>
        <p className="website-title">GAMECUBE WEBSITE</p>
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