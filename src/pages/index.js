import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import crest from "../images/crest.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="mainContent">
      <span className="slugText">Security Planning for Residential and Commercial Locations</span>
      <img id="crest" src={crest}></img>
      <span className="slugText">Personnel Training with Site Security Analysis and Improvement</span>
    </div>
    <span className="slugText">Specialization in Places of Worship</span>
  </Layout>
)

export default IndexPage
