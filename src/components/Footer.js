import React from 'react';
import { Link } from "gatsby"
import { Icon } from "react-icons-kit"
import { github, rss, dribbble } from "react-icons-kit/entypo"

// Fonts 
import 'typeface-source-sans-pro';

// Styled Components
import styled from 'styled-components'
import { device } from '../assets/styled/device'
import { palette } from '../assets/styled/colors'

const Container = styled.footer `
  background-color: ${palette.primary.main};
  color: ${palette.primary.contrast};
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: grid;  
  align-items: center;

  @media ${device.mobile} {
    padding-left: 1rem;    
    padding-right: 1rem;
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    padding-left: 2rem;    
    padding-right: 2rem; 
    grid-template-columns: 1fr 2fr 1fr;  
  }    
`
const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;

  & a {
    color: ${palette.primary.contrast};
    font-weight: 500;
    text-decoration: none;
    padding: .25rem .5rem;
  }

  @media ${device.mobile} {
    margin-bottom: .5rem;
  }
  @media ${device.tablet} {
    margin-bottom: auto;
  }    
`
const Copyright = styled.div`
  font-weight: 300;

  @media ${device.mobile} {
    text-align: center;
  }
  @media ${device.tablet} {
    text-align: right; 
  }  
`
const Social = styled.div`
  font-weight: 300;

  & svg {
    fill: ${palette.primary.contrast};
    width: 20px;
    height: 20px;
    padding-right: .5rem;

    &:hover {
      fill: ${palette.secondary.light};
    }
  }
  @media ${device.mobile} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: .5rem;
  }
  @media ${device.tablet} {
    margin-left: inherit;
    margin-right: inherit;
    margin-bottom: 0;
  }    
`

const Footer = props => (
  <Container>

      <Social>
        <a aria-label={`RSS feed icon for ${props.data.nicename}`} href="/" title="">
          <Icon icon={rss} />
        </a>
        <a aria-label={`Github.com icon for ${props.data.nicename}`} href="/" title="">
          <Icon icon={github} />
        </a>
        <a aria-label={`Dribbble.com icon for ${props.data.nicename}`} href="/" title="">
          <Icon icon={dribbble} />
        </a>
      </Social>

      <Col>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </Col>

      <Copyright>
        <span className="">
          {props.data.nicename} © {new Date().getFullYear()}
        </span>
      </Copyright>

  </Container>
)

export default Footer;