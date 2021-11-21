import React from "react"
import * as styles from "src/components/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.firstSide}>
        <div className={styles.info}>
          Sutton, London, letsstayhome75@gmail.com
        </div>
      </div>
      <div className={styles.secondSide}>This is footer two</div>
    </div>
  )
}

export default Footer
