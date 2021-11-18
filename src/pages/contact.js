import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <form name="contact-form" method="POST" data-netlify="true">
      <p>
        <input type="text" name="name" placeholder="name" />
      </p>
      <p>
        <input type="email" name="email" placeholder="email@example.com" />
      </p>
      <p>
        <textarea
          name="message"
          placeholder="Type your message here"
        ></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default SecondPage
