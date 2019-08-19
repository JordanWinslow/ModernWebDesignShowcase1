import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import VendorLogoGrid from "../components/VendorLogoGrid"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Jordan Winslow - Front End Web Developer Portfolio Website" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Combining speed with modern design principles</h1>
        <p>
          53% of mobile site visits are abandoned if pages take longer than 3
          seconds to load.
        </p>
        <p>
          <Link to="/">Learn More</Link>
        </p>
        <div className="Logos">
          <img
            alt="sketch logo"
            src={require("../images/logo-sketch.png")}
            width="50"
          />
          <img
            alt="figma logo"
            src={require("../images/logo-figma.png")}
            width="50"
          />
          <img
            alt="studio logo"
            src={require("../images/logo-studio.png")}
            width="50"
          />
          <img
            alt="framer logo"
            src={require("../images/logo-framer.png")}
            width="50"
          />
          <img
            alt="react logo"
            src={require("../images/logo-react.png")}
            width="50"
          />
          <img
            alt="swift logo"
            src={require("../images/logo-swift.png")}
            width="50"
          />
        </div>
        {/**************WAVE ANIMATION*************/}
        <Wave />
      </div>
    </div>
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
    <Section
      image={require("../images/wallpaper6.jpg")}
      logo={require("../images/logo-react.png")}
      title="My Areas of Expertise & Tech-Stack"
      text="Below I have programmed a grid which intelligently adapts to your screen, fetches a series of logos and titles from a .json file and then automatically displays them in the perfect size along with some basic animation and a gradient background."
    />

    <VendorLogoGrid />
    <Footer />
  </Layout>
)

export default IndexPage
