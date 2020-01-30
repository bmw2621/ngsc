import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logoWhite2.svg";
import NavBarButton from "./navBarButton"

const links = ["About", "Services", "Contact"]

const firstLetter = str => {
  // Turn string into array to iterate over
  let strArr = str.split(' ')
  //create new array to populate
  let newArr = []

  strArr.forEach(word => {
    // Create JSX Element NOT STRING to populate Array
    // Make sure to use className not class since it's JSX not HTML
    word = <><span className='firstLetter'>{word.slice(0,1)}</span>{word.slice(1)} </>

    newArr.push(word)
  })

  return newArr
}

const Header = ({ siteTitle }) => (
  <header>
    <div id="headerInfo">
      <Link to='/'><img src={logo} id="headerLogo"/></Link>
      <div id="headerText">
        <span id="titleText">{firstLetter(siteTitle)}</span>
        <span className="slugText">Georgia’s Premier Residential and Commercial Security Experts</span>
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
