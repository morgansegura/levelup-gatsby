import React from "react"
import HeaderBulletin from "../components/HeaderBulletin"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import * as settings from "../../settings"

import 'typeface-aleo';
import 'typeface-lato';
import 'typeface-merriweather';

import "../assets/css/bundle.css";

const BlogPostLayout = props => (
  <div className="wrapper">
    <SEO data={settings} />
    <HeaderBulletin classes={`header__bulletin`} />
    <Header data={settings} classes={`header`} />
    <main className="main content">{props.children}</main>
    <Footer data={settings} />
  </div>
)

export default BlogPostLayout
