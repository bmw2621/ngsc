import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const ServiceCard1 = ({ side , text, imageUrl }) => {

  if(side.toLowerCase() === "left"){
    return (
      <div className="card1">
        <span className="slugText">{text}</span>
        <img src={imageUrl} className="servicesCard1Img"></img>
      </div>
    )
  } else {
    return (
      <div className="card1">
        <img src={imageUrl} className="servicesCard1Img"></img>
        <span className="slugText">{text}</span>
      </div>
    )
  }
}

ServiceCard1.propTypes = {
  side: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
}

ServiceCard1.defaultProps = {
  side: `left`,
  text: `no text passed`,
  imageUrl: `left`,
}

export default ServiceCard1
