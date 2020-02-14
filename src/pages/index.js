import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"

// Fonts
import 'typeface-source-sans-pro'

// Styled Components
import styled from 'styled-components'
import { device } from '../assets/styled/device'
import { palette } from '../assets/styled/colors'

const Section = styled.section `

  h2 {
    padding-top: 1rem;
    padding-bottom: 2rem;
    color: ${palette.gray.dark};
    font-weight: 500;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default ({ data }) => {
  const blogContent = data.allWordpressPost.edges
  return (
    <PrimaryLayout>
      <Section>
        {/* Articles */
        blogContent && (
          <div>
            <h2>Articles</h2>

            {blogContent.map(({ node: post }, index) => (
              <article key={post.id} className="post-list__item">

                {/*index === 0 ? (
                  <PostListItem
                    classes={"hello"}
                    catOverride="Fresh Content"
                    path={"article"}
                    post={post}
                  />
                ) : (
                  <PostListItem
                    classes={"hello"}
                    catOverride="Other Shite"
                    path={"article"}
                    post={post}
                  />
                )*/}
              </article>
              ))}
          </div>
        )}
      </Section>
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        url
        nicename
        short
        alias
        acronymn
        title
        description
        keywords
        favicon
        logo
        themeColor
        backgroundColor
      }
    }
    allWordpressPost {
      edges {
        node {
          id
          path
          status
          template
          format
        }
      }
    }    
  }
`
