import * as React from "react"
import HeroBanner from "src/components/heroBanner"
import Introduction from "src/components/introduction"
import Services from "src/components/services"
import About from "src/components/About.js"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <div className="mainContent">
      <Introduction />
      <div className="subSection">
        <Services />
      </div>
      <div className="subSection">
        <About />
      </div>
    </div>
  </Layout>
)

export default IndexPage
