import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import YoutubeSubCounter from "../components/YouTube/YoutubeSubCounter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <YoutubeSubCounter />
    </div>
  </Layout>
)

export default IndexPage
