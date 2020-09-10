import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChartBarTwo from "../components/CharBarTwo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>
    <div>
      <ChartBarTwo />
    </div>
  </Layout>
)

export default IndexPage
