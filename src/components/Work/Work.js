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
        <h3>Work</h3>
        <div className="row">
          <div className="images">
            <div className="left-proj hover">
              <div className="proj-title">Delphi System Designs</div>
              <Img
                className="border"
                fluid={data.delphi.childImageSharp.fluid}
              />
              <span>
                Delphi System Designs is a back-end focused initiative that
                optimized inherited front end legacy code. The front-end
                consists of the Ratings and Reviews module of a single page
                e-commerce web application within a service-oriented /
                microservices architecture. I was tasked with architcting and
                designing a clean and scalable back-end that could handle high
                production-level web traffic.
              </span>
            </div>
            <div className="center-proj hover">
              <div className="proj-title">Elysium Solutions</div>
              <Img
                className="border"
                fluid={data.elysium.childImageSharp.fluid}
              />
              <span>
                Elysium Solutions is an apparel shopping app with a focus on
                modern and accessible user interactions. This app was built from
                the ground up and is the product detail / overview module of an
                entire single page e-commerce web application in a service
                oriented / microservices architecture.
              </span>
            </div>
            <div className="right-proj hover">
              <div className="proj-title">Dirtbag Companion</div>
              <Img
                className="border"
                fluid={data.dirtbag.childImageSharp.fluid}
              />
              <span>
                An application for dirtbag (and non-dirtbag) climbers and
                outdoors enthusiasts! This single page mini app is here to serve
                the user by providing them with general information about fifty
                of some of the most popular routes in the Boulder outdoor
                climbing scene.
              </span>
            </div>
            <div className="black-box" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
