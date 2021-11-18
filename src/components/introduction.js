import * as React from "react"
import cocktailBanner from "../images/cocktails6.jpg"
import * as styles from "src/components/introduction.module.css"

const Introduction = () => {
  return (
    <>
      <div class={styles.introContainer}>
        <h1>Let's Stay Home</h1>
        {/* <h2 class={styles.subHeading}>
          London's <span>Leading</span> Cocktail Delivery Service
        </h2> */}
      </div>
    </>
  )
}

export default Introduction
