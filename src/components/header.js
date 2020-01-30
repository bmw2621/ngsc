import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logoWhite2.svg";
import NavBarButton from "./navBarButton"

const links = ["About", "Services", "Contact"]

const Header = ({ siteTitle }) => (
  <header>
    <div id="headerInfo">
      <Link to='/'><img src={logo} id="headerLogo"/></Link>
      <div id="headerText">
        <span id="titleText"><span class="firstLetter">N</span>orth <span class="firstLetter">G</span>eorgia <span class="firstLetter">S</span>ecurity <span class="firstLetter">C</span>onsultants</span>
        <span id="slugText">Georgia’s Premier Residential and Commercial Security Experts</span>
      </div>
    </div>
    <nav>
      {links.map((navBarLink)=><NavBarButton text={navBarLink} />)}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
