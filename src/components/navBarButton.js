import React from "react"
import { Link } from "gatsby"

const NavBarButton = (props) => {
  let slug = `/${props.text.toLowerCase()}`
  return <Link className="navBarButton" to={slug}>{props.text}</Link>
}

export default NavBarButton
