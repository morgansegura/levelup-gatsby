import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

import "../utils/typography"

const PrimaryLayout = props => (
  <div className="wrapper">
    <SEO />
    <Header />
    <main className="main">
      <div className="container">
        <div className="content">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default PrimaryLayout
