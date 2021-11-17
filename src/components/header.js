import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/letsstaylogonoBackground.png"
import * as styles from "src/components/header.module.css"

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `white`,
      }}
    >
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoContainer}>
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.navLinks}>
          <ul className={styles.navList}>
            {/* <li class={styles.navLink}>
            <Link to="/">Home</Link>
          </li> */}
            <li className={styles.navLink}>
              <Link to="/cocktail-list" activeStyle={{ fontWeight: "bold" }}>
                Cocktail List
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/events" activeStyle={{ fontWeight: "bold" }}>
                Events
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/reviews" activeStyle={{ fontWeight: "bold" }}>
                Reviews
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/faqs" activeStyle={{ fontWeight: "bold" }}>
                FAQ's
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/contact" activeStyle={{ fontWeight: "bold" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
