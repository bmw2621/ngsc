import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import benPic from "../images/ben.png";

const creds = [
  "23+ Years as an Army Military Policeman​",
  "Bachelor's Degree in Criminal Justice",
  "Masters of Arts in Business and Organizational Security Management",
  "Extensive Anti-Terrorism Schooling and Weapons Training",
  "Army Physical Security School (Site Security/Asset Protection)",
  "Army Protective Services School (Personal Security)",
  "Special Reaction Team (S.W.A.T)",
  "Precision Marksman/Observer School",
  "Top Secret Security Clearance",
]

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div id="aboutContent">
      <img src={benPic} style={{"marginTop":"20px", "height":"100%"}}></img>
      <div id="aboutText">
        <span id="bioName">William B. O'Neal</span>
        {creds.map(cred => <><span className="slugText">{cred}</span><br/></>)}
      </div>
    </div>
  </Layout>
)

export default AboutPage
