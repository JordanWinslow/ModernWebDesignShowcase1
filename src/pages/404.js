import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Wave from "../components/Wave"
const NotFoundPage = () => (
    <div className="Hero">
      <div className="HeroGroup">
        <SEO title="404: Not found" />
        <h1>We're not sure how you got here, but thanks for coming</h1>
        <p>
          This page does not exist. No problem though, just click the home
          button and we'll take you back to reality!
        </p>
        <Link to="/">Home</Link>
        <p><br /></p>
      </div>
      <Wave />
    </div>
)

export default NotFoundPage
