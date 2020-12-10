import React from "React"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "./Work.scss"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      elysium: file(relativePath: { eq: "elysium-solutions.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delphi: file(relativePath: { eq: "delphi-system-designs.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dirtbag: file(relativePath: { eq: "dirtbag-companion.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="work">
      <div className="container">
        <div className="row">
          <h3>Work</h3>
          <div className="images">
            <div className="left-proj hover">
              <h2>Delphi System Designs</h2>
              <Img
                className="border"
                fluid={data.delphi.childImageSharp.fluid}
              />
              <span>
                Architected and designed a scalable backend to support
                production level web traffic
              </span>
            </div>
            <div className="right-proj hover">
              <h2>Dirtbag Companion</h2>
              <Img fluid={data.dirtbag.childImageSharp.fluid} />
            </div>
            <div className="center-proj hover">
              <Img fluid={data.elysium.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box" />
      <div className="black-box overlay" />
    </div>
  )
}

export default Work
