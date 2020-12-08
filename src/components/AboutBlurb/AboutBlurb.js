import React from "React"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "./AboutBlurb.scss"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create and solve</h3>
            <p>
              I am a full stack engineer that loves to build and solve problems
              both on the frontend using Javascript, HTML, CSS, and any
              frameworks/libraries that assist in creating the best user
              experience possible, as well as architecting and designing
              scalable backends to support high production level web traffic. I
              understand the tradeoff between perfect and complete and thrive in
              the workflow balance between agile methodologies in a team and
              executing business requirements autonomously. When I'm not
              crafting wizardry on the computer, I am outside rock climbing or
              creating music with good company.
            </p>
            <br />
            <br />
            <ul>
              <li>
                <span className="tech-type">Front-End</span> - JavaScript (ES5/ES6), React (Hooks), jQuery,
                Bootstrap, Material-UI, SCSS, Styled-Components, CSS, HTML
              </li>
              <li>
                <span className="tech-type">Back-End</span> - Node.js, Express, PostgresQL, MySQL, MongoDB,
                Mongoose
              </li>
              <li>
                <span className="tech-type">Testing​</span> - Jest, Enzyme, Mocha, Chai
              </li>
              <li>
                <span className="tech-type">Tools</span> -​ Git, npm, Webpack, Babel, Jira, Docker, Amazon
                Web Services (AWS), Redux, Stripe, GraphQL, Artillery.io, New
                Relic, Heroku, Postman, Firebase
              </li>
              <li>
                <span className="tech-type">Techniques</span> -​ Agile Development, Pair Programming, Test
                Driven Development (TDD), RESTful Design, Model View Controller
                (MVC)
              </li>
            </ul>

            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb
