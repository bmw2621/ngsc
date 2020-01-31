import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import crest from "../images/crest.svg";


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div id="contactContent" style={{"width": "75%"}}>
      <img id="contactCrest" src={crest} style={{"marginTop":"20px", "height":"100%"}}></img>
      <div id="aboutText">
        <span id="bioName">William B. O'Neal</span>
        <span className="slugText">(470) 577-1270</span>
        <span id="bioName" style={{"font-style":"italic"}}>Email</span>
        <span className="slugText">wboneal@ngsconsultant.com </span>
        <hr style={{
                "color": "black",
                "backgroundColor": "gray",
                "height": "2",
                "width": "80%"
            }}/>
        <span className="slugText" style={{"color":"#6699CC"}}>We are a standards based company whose job is not finished until you are completely satisfied. We strive to develop longterm relationships with our clients so all your security needs are met</span>
      </div>
    </div>
  </Layout>
)

export default ContactPage
