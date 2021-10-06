import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/letsstaylogonoBackground.png"
import * as styles from "src/components/header.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div class={styles.navBar}>
      <div class={styles.logo}>
        <div class={styles.logoWrapper}>
          <div class={styles.logoContainer}>
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
        </div>
      </div>
      <div class={styles.navLinks}>
        <ul class={styles.navList}>
          {/* <li class={styles.navLink}>
            <Link to="/"></Link>What We Do
          </li> */}
          <li class={styles.navLink}>
            <Link to="/cocktail-list">Cocktail List</Link>
          </li>
          <li class={styles.navLink}>
            <Link to="/events">Events</Link>
          </li>
          <li class={styles.navLink}>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li class={styles.navLink}>
            <Link to="/faqs">FAQ's</Link>
          </li>
          <li class={styles.navLink}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
