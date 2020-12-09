import React from "react"
import './index.scss';

// Import Components
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import AboutBlurb from '../components/AboutBlurb/AboutBlurb';
import Work from '../components/Work/Work';

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <Work />
  </div>
)

export default IndexPage
