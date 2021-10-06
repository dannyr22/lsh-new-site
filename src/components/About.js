import * as React from "react"
import * as styles from "src/components/About.module.css"
import homeCocktails from "src/images/homeCocktails.jpg"

const About = () => {
  return (
    <>
      <h2 class={styles.sectionTitle}>
        About <span>Us</span>
      </h2>
      <div className={styles.aboutContainer}>
        <div className={styles.firstSection}>
          <div className={styles.textContainer}>
            <p>
              Let's Stay Home was born out of necessity from the first lockdown
            </p>
            <p>
              After spending years running some of Londons best bars and
              restaurants we then found ourselves without jobs and a bit bored.
              To solve this we decided to do what we know best and that's make
              cocktails
            </p>
            <p>
              We started a fledgeling cocktail delivery service which has now
              evolved into an events and catering service, and don't worry we
              still deliver the goods. A year and a half later we're still
              roaming around London providing much needed, high quality industry
              standard cocktails, we have a portable bar that you can rent, we
              have a Kilner package for when you don't need a bartender but
              still want some tasty drinks or you can go for the whole schabang
              and hire us, the bar and enjoy cocktails being shaken and stirred
              all night long.
            </p>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.imageContainer}>
            <img src={homeCocktails} alt="cocktails" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
