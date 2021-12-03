import React from "react"
import * as styles from "src/components/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMain}>
        <div className={styles.firstSide}>
          <div className={styles.info}>
            <p>Let's Stay Home Ltd,</p>
            <p>Sutton,</p>
            <p>London,</p>
            <p>email: letsstayhome75@gmail.com</p>
          </div>
        </div>
        {/* <div className={styles.secondSide}>This is footer two</div> */}
      </div>
      <p style={{ textAlign: "center" }}>&copy; Let's Stay Home Drinks</p>
    </div>
  )
}

export default Footer
