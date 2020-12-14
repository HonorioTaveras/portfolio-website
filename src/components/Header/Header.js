import { Link } from "gatsby"
import React from "react"

import './Header.scss';

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Honorio Taveras</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/AboutBlurb/AboutBlurb">About</Link>
            <Link to="/Work/Work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
