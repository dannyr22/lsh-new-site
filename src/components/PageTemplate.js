import React from "react"
import * as styles from "src/components/PageTemplate.module.css"

const PageTemplate = ({ title, text, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.text}>{text}</div>
      <div className={styles.image}>{image}</div>
    </div>
  )
}

export default PageTemplate
