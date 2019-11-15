import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import PostCard from "../components/PostCard"


export default ({ data }) => {
  const posts = data.BlogPosts.edges
  return (
    <PrimaryLayout className="container">
      {console.log(posts)}
      <div className="container">
        <div className="grid">
          {posts.map(({ node: post }) => (
            <div key={post.id} className="p-b--1h item-12 item-md-6 item-xl-4">
              {console.log(post)}
              <PostCard
                classes="bg--white"
                alt={post.frontmatter.description}
                featuredimage={post.frontmatter.featuredimage}
                image={post.frontmatter.full_image}
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                slug={post.fields.slug}
              />
            </div>
          ))}
        </div>
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
    BlogPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 130)
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            full_image
            description
            date(formatString: "MMMM DD, YYYY")
            heading
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
