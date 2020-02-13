import React from "react"
import Header from "../components/Header"
import HeaderBulletin from "../components/HeaderBulletin"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import * as settings from "../../settings"

import "../utils/typography"

const PrimaryLayout = props => (
  <div className="wrapper">
      <SEO data={settings} />
      <div className="header__wrapper fixed">
        <HeaderBulletin classes={`header__bulletin`} />
        <Header data={settings} classes={`header`} />
      </div>
      <main className="main content">
        {props.children}
      </main>
      <Footer data={settings} />
  </div>
)

export default PrimaryLayout
