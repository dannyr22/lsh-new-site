import * as React from "react"
import PropTypes from "prop-types"
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
            <img src={logo} />
          </div>
        </div>
      </div>
      <div class={styles.navLinks}>
        <ul class={styles.navList}>
          <li class={styles.navLink}>
            <Link to="/"></Link>What We Do
          </li>
          <li class={styles.navLink}>
            <Link to="/"></Link>Cocktail List
          </li>
          <li class={styles.navLink}>
            <Link to="/"></Link>Events
          </li>
          <li class={styles.navLink}>
            <Link to="/"></Link>Reviews
          </li>
          <li class={styles.navLink}>
            <Link to="/"></Link>FAQ's
          </li>
          <li class={styles.navLink}>
            <Link to="/"></Link>Contact Us
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
