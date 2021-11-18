import * as React from "react"
import HeroBanner from "src/components/heroBanner"
import Introduction from "src/components/introduction"
import Services from "src/components/services"
import About from "src/components/About.js"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Parallax from "src/components/Parallax"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <div className="mainContent">
      <Introduction />
      <div className="subSection">
        <About />
      </div>
      <div className="subSection">
        <Services />
      </div>
      <div className="subSection">
        <Parallax />
      </div>
      {/* <form name="contact-form" method="POST" data-netlify="true">
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
      </form> */}
    </div>
  </Layout>
)

export default IndexPage
