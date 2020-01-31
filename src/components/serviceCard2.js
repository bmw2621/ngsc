import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const ServiceCard2 = ({ services, imageUrl }) => (
      <div className="card2">
        <img src={imageUrl} className="servicesCard2Img"></img>
        {services.map(item => <span className="slugText">{item}</span>)}
      </div>
    )

ServiceCard2.propTypes = {
  services: PropTypes.array,
  imageUrl: PropTypes.string,
}

ServiceCard2.defaultProps = {
  services: [`no services passed`],
  imageUrl: `left`,
}

export default ServiceCard2
