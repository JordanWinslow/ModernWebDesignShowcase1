import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useState, useEffect } from "react"

import "./header.css"
// WE CAN IMPORT AND USE IMAGES INSIDE OF JSX TAGS BY IMPORTING
// import logo from "../images/logo-designcode.svg"
// OR WE CAN USE "require("../images/etc.") INLINE

const Header = () => {
  /* USING REACT HOOKS TO DETERMINE IF USER HAS SCROLLED OR NOT SO WE CAN CHANGE THE BACKGROUND OF OUR NAVBAR TO A SOLID COLOR */
  let [hasScrolled, setScrollState] = useState(false)
  /* INSTEAD OF componentDidMount WE ARE USING EFFECT HOOKS */
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
  })
  /* WHEN WE USE useEffect() WE TELL REACT TO RUN WHATEVER FUNCTION IS CONTAINED WITHIN AFTER FLUSHING CHANGES TO THE DOM. BY DEFAULT, REACT RUNS THE EFFECTS AFTER EVERY RENDER INCLUDING THE FIRST RENDER */
  const scrollHandler = () => {
    const scrollTop = window.pageYOffset

    scrollTop > 50 ? setScrollState(true) : setScrollState(false)
  }

  return (
    <div className={hasScrolled ? "Header HeaderScrolled" : "Header"}>
      <div className="HeaderGroup">
        <img
          src={require("../images/logo-jordanwinslow.svg")}
          width="60"
          alt="Jordan Winslow Front End Web Developer Logo"
        />
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <a href="https://jordanwinslow.me">Music</a>
        <button>Portfolio</button>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
