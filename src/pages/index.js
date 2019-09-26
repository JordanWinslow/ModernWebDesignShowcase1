import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/HeroSection"
import CardBox from "../components/CardBox"
import Section from "../components/Section"
import VendorLogoGrid from "../components/VendorLogoGrid"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      {/*
  ALL STYLING ON THE FOLLOWING JSX IS COMING FROM layout.css.
  NORMALLY I WOULD MAKE EVERYTHING INTO A styled-component AND SEPARATE OUT
  EACH SECTION INTO REACT COMPONENTS RATHER THAN MAKING ONE MASSIVE
  APP FILE, BUT FOR THIS PROJECT I WANTED TO EXPERIMENT, PRACTICE, AND 
  DEMONSTRATE NUMEROUS STYLING METHODS.
  */}
      <SEO title="Jordan Winslow - Front End Web Developer React GraphQL Demo" />
      <HeroSection />
      <CardBox />
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
}

export default IndexPage
