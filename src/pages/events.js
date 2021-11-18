import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import bespokeImage from "src/images/bespoke.jpeg"
import tapImage from "src/images/tap.jpeg"
import masterclassImage from "src/images/masterclass.jpeg"
import Seo from "../components/seo"

const SecondPage = () => {
  const [bespoke, setBespoke] = useState(false)
  const [masterclass, setMasterclass] = useState(false)
  const [tap, setTap] = useState(false)

  const handleBespoke = () => {
    setBespoke(!bespoke)
    setMasterclass(false)
    setTap(false)
  }
  const handleMasterclass = () => {
    setMasterclass(!masterclass)
    setBespoke(false)
    setTap(false)
  }
  const handleTap = () => {
    setTap(!tap)
    setMasterclass(false)
    setBespoke(false)
  }

  const handleAll = () => {
    setTap(false)
    setMasterclass(false)
    setBespoke(false)
  }
  return (
    <Layout>
      <div className="pageWidth">
        <h2 className="PageTitle">Events</h2>
        <p>
          Want to try your hand at shaking, mixing and muddling your cocktail
          favourites?
        </p>{" "}
        <p>We've got a masterclass for that.</p>{" "}
        <p>Want to keep the drinks flowing? We've got cocktails on tap.</p>{" "}
        <p>
          Or, if you're really looking for a spectacle, why not have us shaking
          fresh cocktails at yours to really get the party going.
        </p>{" "}
        <p>
          Our services are designed to work for you, allowing you complete
          flexibility, personalisation of every detail and a guarantee of the
          ultimate in fresh, tasty cocktails.
        </p>{" "}
        <p>
          Here you'll find more information on a variety of options for your
          next event. You can also email us seven days a week for advice on the
          best option for you.
        </p>
        <div id="popups" className="popups">
          <div className="bespoke-bar popup">
            <button onClick={handleBespoke}>Bespoke Bar</button>
            {bespoke && (
              <div className="popup-image bespoke-image" onClick={handleAll}>
                <img src={bespokeImage} alt="popup description" />
              </div>
            )}
          </div>
          <div className="cocktail-masterclasses popup">
            <button onClick={handleMasterclass}>Cocktail Masterclasses</button>
            {masterclass && (
              <div
                className="popup-image masterclass-image"
                onClick={handleAll}
              >
                <img src={masterclassImage} alt="popup description" />
              </div>
            )}
          </div>
          <div className="cocktails-on-tap popup">
            <button onClick={handleTap}>Cocktails on tap</button>
            {tap && (
              <div className="popup-image tap-image" onClick={handleAll}>
                <img src={tapImage} alt="popup description" />
              </div>
            )}
          </div>
        </div>
        <br></br>
      </div>
    </Layout>
  )
}

export default SecondPage
