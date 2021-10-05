import * as React from "react"
import HeroBanner from "src/components/heroBanner"
import Introduction from "src/components/introduction"
import Services from "src/components/services"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <div className="mainContent">
      <Introduction />
      <Services />
    </div>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
)

export default IndexPage
