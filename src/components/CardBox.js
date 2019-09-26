import React from "react"
import Card from "../components/Card"

const CardBox = () => {
  return (
    <div id="CardSection">
      <h2>Keep Scrolling</h2>
      <div className="Cards">
        <Card
          title="UI/UX Design"
          description="3 years experience"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Website Design"
          description="8 years experience"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="Data Integration & Migration"
          description="2 Years Experience"
          image={require("../images/wallpaper4.jpg")}
        />
        <Card
          title="Web App Development"
          description="1 Year Experience"
          image={require("../images/wallpaper5.jpg")}
        />
        <Card
          title="Branding & Marketing"
          description="5 years experience"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="Payment Processing"
          description="5 years experience"
          image={require("../images/wallpaper2.jpg")}
        />
      </div>
    </div>
  )
}

export default CardBox
