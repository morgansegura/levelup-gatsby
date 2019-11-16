import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import PostCard from "../components/PostCard"


export default ({ data }) => {
  const posts = data.BlogPosts.edges
  const tutorials = data.TutorialPosts.edges
  return (
    <PrimaryLayout>
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
      <div className="content__wrapper bg--grey-dark-steel">
        <div className="container">
          <h2 className="heading">
            <span className="border--top">Testees</span>
          </h2>
          <p className="subheading"></p>

          <div className="grid">
            <div className="card__half-tall item-12 item-md-6">
              <PostCard
                classes="p-b--1h"
                alt={tutorials[0].node.frontmatter.description}
                featuredimage={tutorials[0].node.frontmatter.featuredimage}
                image={tutorials[0].node.frontmatter.full_image}
                title={tutorials[0].node.frontmatter.title}
                excerpt={tutorials[0].node.excerpt}
                slug={tutorials[0].node.fields.slug}
              />
            </div>
            <div className="card__half-stack flex-column item-12 item-md-6">
              <PostCard
                classes="p-b--1h"
                alt={tutorials[1].node.frontmatter.description}
                featuredimage={tutorials[1].node.frontmatter.featuredimage}
                image={tutorials[1].node.frontmatter.full_image}
                title={tutorials[1].node.frontmatter.title}
                excerpt={tutorials[1].node.excerpt}
                slug={tutorials[1].node.fields.slug}
              />
              <PostCard
                classes="p-b--1h"
                alt={tutorials[2].node.frontmatter.description}
                featuredimage={tutorials[2].node.frontmatter.featuredimage}
                image={tutorials[2].node.frontmatter.full_image}
                title={tutorials[2].node.frontmatter.title}
                excerpt={tutorials[2].node.excerpt}
                slug={tutorials[2].node.fields.slug}
              />
            </div>
          </div>
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
    TutorialPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "tutorial-post" } } }
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
