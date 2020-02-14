import React from "react"
import { graphql, StaticQuery } from "gatsby"

// Fonts 
import 'typeface-source-sans-pro';

// Styled Components
import styled from 'styled-components'
import { device } from '../assets/styled/device'
import { palette } from '../assets/styled/colors'

const Banner = styled.aside `
  background-color: ${palette.secondary.main};
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${palette.secondary.contrast};

  & div {

    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media ${device.mobile} {
      max-width: 90%;
    }
    @media ${device.tablet} {
      max-width: 85%;
    }
  }
`

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderBulletinQuery {
        allWordpressPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <Banner>
        <div>Messages will populate here.</div>
      </Banner>
    )}
  />
)
