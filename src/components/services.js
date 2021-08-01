import * as React from "react"
import * as styles from "src/components/services.module.css"
import cocktails from "src/images/cocktails4.jpg"

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
              <img src={cocktails} />
            </div>
          </div>
          <div class={styles.servicesInfo}>
            <h3>I am the services title</h3>
            <p>
              I am the services description, I know about the services, do you
              want to know more?
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
            <h3>I am the services title</h3>
            <p>
              I am the services description, I know about the services, do you
              want to know more?
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
            <h3>I am the services title</h3>
            <p>
              I am the services description, I know about the services, do you
              want to know more?
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
            <h3>I am the services title</h3>
            <p>
              I am the services description, I know about the services, do you
              want to know more?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
