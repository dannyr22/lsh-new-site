import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/letsstaylogonoBackground.png"
import * as styles from "src/components/header.module.css"
import navIcon from "src/images/nav-menu.svg"
import closeSvg from "src/images/close.svg"

const Header = ({ siteTitle }) => {
  const [showHeader, setShowHeader] = useState(false)
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
        <div className={styles.mobileNav} onClick={() => setShowHeader(true)}>
          <img src={navIcon} alt="menu-icon" />
        </div>
        {showHeader && (
          <div className={styles.mobileNavLinks}>
            <div onClick={() => setShowHeader(false)}>
              <img src={closeSvg} alt="close menu" />
            </div>
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavLink}>
                <Link to="/cocktail-list" activeStyle={{ fontWeight: "bold" }}>
                  Cocktail List
                </Link>
              </li>
              <li className={styles.mobileNavLink}>
                <Link to="/events" activeStyle={{ fontWeight: "bold" }}>
                  Events
                </Link>
              </li>
              <li className={styles.mobileNavLink}>
                <Link to="/reviews" activeStyle={{ fontWeight: "bold" }}>
                  Reviews
                </Link>
              </li>
              <li className={styles.mobileNavLink}>
                <Link to="/faqs" activeStyle={{ fontWeight: "bold" }}>
                  FAQ's
                </Link>
              </li>
              <li className={styles.mobileNavLink}>
                <Link to="/contact" activeStyle={{ fontWeight: "bold" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
