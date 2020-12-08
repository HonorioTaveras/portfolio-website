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
            <h3>The ability to create</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              enim magni, voluptates distinctio porro necessitatibus explicabo
              hic quos totam, et perferendis recusandae soluta nihil voluptatem
              ipsa obcaecati labore. Eos, omnis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quidem enim magni, voluptates
              distinctio porro necessitatibus explicabo hic quos totam, et
              perferendis recusandae soluta nihil voluptatem ipsa obcaecati
              labore. Eos, omnis.<br /><br />

              Technologies I work with:<br />
             • Front-End -​ JavaScript (ES5/ES6), React (Hooks), jQuery, Bootstrap, Material-UI, SCSS, Styled-Components, CSS, HTML<br />
             • Back-End -​ Node.js, Express, PostgresQL, MySQL, MongoDB, Mongoose<br />
             • Testing -​ Jest, Enzyme, Mocha, Chai<br />
             • Tools -​ Git, npm, Webpack, Babel, Jira, Docker, Amazon Web Services (AWS), Redux, Stripe, GraphQL, Artillery.io, New Relic, Heroku, Postman, Firebase<br />
             • Techniques -​ Agile Development, Pair Programming, Test Driven Development (TDD), RESTful Design, Model View Controller (MVC)

            </p>
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

export default AboutBlurb;
