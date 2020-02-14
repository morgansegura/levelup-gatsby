import React from "react"
import Header from "../components/documentation/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import * as settings from "../../settings"

const DocumentationLayout = props => (
  <div className="wrapper">
      <SEO data={settings} />
      <Header data={settings} classes="header" />
      <main className="main content">
        {props.children}
      </main>
      <Footer data={settings} />
  </div>
)

export default DocumentationLayout
