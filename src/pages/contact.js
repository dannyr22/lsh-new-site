import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Contact</h1>

    <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholer="email@example.com" />
      </div>
      <div>
        <textarea name="message" placeholder="type your message here" />
      </div>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default SecondPage
