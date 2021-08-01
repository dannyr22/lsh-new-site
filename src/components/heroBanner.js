import * as React from "react"
import cocktailBanner from "../images/cocktails6.jpg"
import * as styles from "src/components/heroBanner.module.css"

const HeroBanner = () => {
  return (
    <>
      <div class={styles.heroBannerContainer}>
        <img src={cocktailBanner} />
      </div>
    </>
  )
}

export default HeroBanner
