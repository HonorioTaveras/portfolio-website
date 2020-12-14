import React from "react"
import './index.scss';

import Scrollbar from "smooth-scrollbar"

// Import Components
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import AboutBlurb from '../components/AboutBlurb/AboutBlurb';
import Work from '../components/Work/Work';
import Footer from "../components/Footer/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <Work />
    <Footer />
  </div>
)

export default IndexPage
