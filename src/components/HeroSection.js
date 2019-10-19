import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import LogoBox from "../components/LogoBox"
import Wave from "../components/Wave"

const HeroSection = () => {
  /* THIS GRAPHQL QUERY CREATES NUMEROUS SIZES OF THE BG IMAGE AND CHOOSES THE CORRECT ONE FOR THE SIZE OF THE USER'S SCREEN. IT ALSO PREPS FOR LAZY LOADING, CREATES A PLACEHOLDER IMAGE AND BLURS THE IMAGE IN WHEN IT IS FULLY LOADED */
  const data = useStaticQuery(graphql`
    query BGImage {
      bgImage: file(relativePath: { eq: "wallpaper.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="Hero">
      <Img
        fluid={data.bgImage.childImageSharp.fluid}
        alt="Snow Covered Mountains With Starry Sky Wallpaper"
        style={{
          position: "absolute",
          zIndex: "-2",
          width: "100vw",
          height: "100vh",
          minHeight: "645px",
          maxWidth: "100%",
          maxHeight: "1000px",
        }}
      />
      <div className="HeroGroup">
        <h1 style={{ cursor: "default" }}>
          Combining speed with modern design principles
        </h1>
        <p style={{ cursor: "default" }}>
          53% of mobile site visits are abandoned if pages take longer than 3
          seconds to load.
        </p>
        <p>
          <a href="https://jordans-portfolio.netlify.com">Learn More</a>
        </p>
        <LogoBox />
      </div>
      {/**************WAVE ANIMATION*************/}
      <Wave />
    </div>
  )
}

export default HeroSection
