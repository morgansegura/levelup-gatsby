import React, {Fragment} from "react"
import Header from "../components/Header"
import HeaderBulletin from "../components/HeaderBulletin"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import * as settings from "../../settings"

import { Normalize } from 'styled-normalize';

import 'typeface-aleo';
import 'typeface-lato';
import 'typeface-merriweather';

const PrimaryLayout = props => (
  <Fragment>
    <Normalize /> 
    <SEO data={settings} />
    <div className="header__wrapper">
      <HeaderBulletin classes={`header__bulletin`} />
      <Header data={settings} classes={`header__main`} />
    </div>
    <main className="main content">
      {props.children}
    </main>
    <Footer data={settings} />
  </Fragment>
)

export default PrimaryLayout
