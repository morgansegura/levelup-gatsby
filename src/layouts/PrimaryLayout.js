// Libs
import React, {Fragment} from "react"
import { Normalize } from 'styled-normalize';

// Settings
import * as settings from "../../settings"

// Components 
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import HeaderBulletin from "../components/HeaderBulletin"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

// Styled Components
import styled from 'styled-components'
import { device } from '../assets/styled/device'
import { palette } from '../assets/styled/colors'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${palette.gray.light};
`
const Content = styled.main`  
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
  flex: 1;
  width: 100%;

  @media ${device.mobile} {
    max-width: 90%;
  }
  @media ${device.tablet} {
    max-width: 85%;
  }
  @media ${device.laptop} {
    max-width: 70%;
  }  

`

const PrimaryLayout = props => (
  <Wrapper>
    <Normalize />
    <SEO data={settings} />

    <Header>
      <HeaderBulletin />
      <Navbar />
    </Header>

    <Content>
      {props.children}
    </Content>

    <Footer data={settings} />
  </Wrapper>
)

export default PrimaryLayout
