import * as React from "react"
import * as styles from "src/components/services.module.css"
import cocktails from "src/images/cocktails4.jpg"
import kilner from "src/images/kilner.jpeg"
import event from "src/images/event.jpg"
import bottle from "src/images/bottle.jpg"

const Services = () => {
  return (
    <>
      <h2 class={styles.sectionTitle}>
        Our <span>Services</span>
      </h2>
      <div class={styles.servicesContainer}>
        <div class={styles.servicesIndividual}>
          <div class={styles.servicesImage}>
            <div class={styles.servicesImageWrapper}>
              <img src={bottle} />
            </div>
          </div>
          <div class={styles.servicesInfo}>
            <h3>Cocktails Delivered</h3>
            <p>Get London' best cocktails served straight to your door.</p>
          </div>
        </div>
        <div class={styles.servicesIndividual}>
          <div class={styles.servicesImage}>
            <div class={styles.servicesImageWrapper}>
              <img src={event} />
            </div>
          </div>
          <div class={styles.servicesInfo}>
            <h3>Mobile bar squad</h3>
            <p>
              Got a party and don't want to be restricted? Then hire our
              fantastic team or just one of them and our great looking mobile
              bar.
            </p>
          </div>
        </div>
        <div class={styles.servicesIndividual}>
          <div class={styles.servicesImage}>
            <div class={styles.servicesImageWrapper}>
              <img src={cocktails} />
            </div>
          </div>
          <div class={styles.servicesInfo}>
            <h3>Cocktail masterclasses</h3>
            <p>
              If you're in need of a fun cocktail masterclass then give us a
              call, we've got over 10 years worth of experience and a hell of a
              lot of happy hens.
            </p>
          </div>
        </div>
        <div class={styles.servicesIndividual}>
          <div class={styles.servicesImage}>
            <div class={styles.servicesImageWrapper}>
              <img src={kilner} />
            </div>
          </div>
          <div class={styles.servicesInfo}>
            <h3>Kilner Cocktails</h3>
            <p>
              Don't want all the faff of having staff or renting out a place but
              you still just want nice drinks? We can supply you with our
              fantastic drinks range in Kilner jars, ready fo when you are.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
