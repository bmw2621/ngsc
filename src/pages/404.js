import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>The link you are attempting to navigate does not exist.</p>
    <p>If you believe you have reached this message in error, please contact the site administrator</p>
  </Layout>
)

export default NotFoundPage
