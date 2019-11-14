import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import * as settings from "../../settings"

import "../utils/typography"

const PrimaryLayout = props => (
  <div className="wrapper">
    <SEO data={settings} />
    <Header data={settings} />
    <main className="main content">
      <div className="container">{props.children}</div>
    </main>
    <Footer data={settings} />
  </div>
)

export default PrimaryLayout
