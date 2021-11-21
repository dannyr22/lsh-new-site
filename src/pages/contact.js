import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="pageWidth">
      <div className="form-container">
        <h1>Contact</h1>

        <form
          className="contact-form"
          name="Contact Form"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          {/* <div> */}
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email@example.com" />
          {/* </div> */}
          <div>
            <textarea
              name="message"
              placeholder="type your message here"
              rows="5"
              style={{ width: "100%", textAlign: "center" }}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </Layout>
)

export default SecondPage
