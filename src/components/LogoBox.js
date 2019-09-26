import React from "react"

const LogoBox = () => {
  return (
    <div className="Logos">
      {/*
        in-line require()'d images can be replaced with image imports
        */}
      <img
        className="Logo"
        alt="sketch logo"
        src={require("../images/logo-sketch.png")}
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
        alt="studio logo"
        src={require("../images/logo-studio.png")}
        width="50"
      />
      <img
        className="Logo"
        alt="framer logo"
        src={require("../images/logo-framer.png")}
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
        alt="swift logo"
        src={require("../images/logo-swift.png")}
        width="50"
      />
    </div>
  )
}

export default LogoBox
