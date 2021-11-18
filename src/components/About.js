import * as React from "react"
import * as styles from "src/components/About.module.css"
import homeCocktails from "src/images/homeCocktails.jpg"

const About = () => {
  return (
    <>
      <h2 class={styles.sectionTitle}>
        What we<span> do</span>
      </h2>
      <div className={styles.aboutContainer}>
        <div className={styles.firstSection}>
          <div className={styles.textContainer}>
            <p>
              Let’s Stay Home is a local business delivering drinks for
              spectacular days and nights in, celebrations and memorable gifts
              for friends and family, with amazing fresh cocktails delivered
              straight to your door.
            </p>
            <p>
              Our Let’s Stay Home bartenders are also available to run a
              cocktail bar at your home, for everything from garden parties,
              weddings, birthdays, christenings and anniversaries to social
              drinks with friends. We can even supply a fully dressed bar with
              self-serve cocktails in stunning glass kiln jars.
            </p>
            <p>
              We also offer cocktail masterclasses so you can learn to shake,
              mix and muddle your cocktail favourites. Perfect for hen parties
              and birthdays, or even just something different for your weekend
              plans.
            </p>
            <p>
              Our service is available seven days a week throughout Sutton,
              Epsom, Croydon, Carshalton, Coulsdon, Ashtead, Wallington, Purley,
              Wimbledon and surrounding areas.
            </p>
            <p>
              Same day delivery is available on all orders placed before 3pm.
            </p>
            <p>
              We take care of all the measuring, shaking and juicing to deliver
              ready to drink cocktails to you.
            </p>
            <p>
              We regularly update our menus to utilize the freshest ingredients
              we can get our hands on and are always up for the challenge of
              designing a bespoke drink for you.
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
