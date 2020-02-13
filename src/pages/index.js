import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import PostListItem from "../components/PostListItem"

export default ({ data }) => {
  const blogContent = data.allWordpressPost.edges
  return (
    <PrimaryLayout>
      <div className="container mtb-3">

        {/* Articles */
        blogContent && (
          <div className="blog-roll">
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
      </div>
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
