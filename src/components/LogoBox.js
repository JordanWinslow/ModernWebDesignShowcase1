import React from "react"

const LogoBox = () => {
  return (
    <div className="Logos">
      {/*
        in-line require()'d images can be replaced with image imports
        */}
      <img
        className="Logo"
        alt="javascript logo"
        src={require("../images/logo-javascript.png")}
        width="50"
      />
      <img
        className="Logo"
        alt="figma logo"
        src={require("../images/logo-figma.png")}
        width="50"
      />
      <img
        className="Logo"
        alt="css3 logo"
        src={require("../images/logo-css3.png")}
        width="50"
      />
      <img
        className="Logo"
        alt="styled components logo"
        src={require("../images/logo-styled-components.png")}
        width="50"
      />
      <img
        className="Logo"
        alt="react logo"
        src={require("../images/logo-react.png")}
        width="50"
      />
      <img
        className="Logo"
        alt="graphQL logo"
        src={require("../images/logo-graphql.png")}
        width="50"
      />
    </div>
  )
}

export default LogoBox
