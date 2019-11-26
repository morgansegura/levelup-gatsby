import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import PostCard from "../components/PostCard"


export default ({ data }) => {
  const posts = data.BlogPosts.edges
  const tutorials = data.TutorialPosts.edges
  // console.log(posts)
  // console.log(tutorials)
  let singlePostItem = (item=null, key=null, classes=``) => (
    <PostCard
      key={key}
      classes={classes}
      alt={item.frontmatter.description}
      image={item.frontmatter.featuredimage}
      title={item.frontmatter.title}
      tags={item.frontmatter.tags}
      excerpt={item.excerpt}
      slug={item.fields.slug}
    />
  )

  return (
    <PrimaryLayout>
    {posts.length > 0 ? (
      <div className="container">
        <div className="grid">
          {posts.map(({ node: post }) => (
            <div key={post.id} className="p-b--1h item-12 item-md-6 item-xl-4">
              {singlePostItem(post)}
            </div>
          ))}
        </div>
      </div>
      ) : null }
      {tutorials.length > 0 ? (
        <div className="content__wrapper bg--grey-dark-steel">
          <div className="container">

            <header className="content__header">
              <h2 className="heading">
                <span className="border--top">Tutorials</span>
              </h2>
              <h3 className="subheading">
                <span>Subheading</span>
              </h3>            
            </header>

            <div className="tutorials">
              <div className="grid">
                <div className="card__half-tall item-12 item-md-6">
                  {tutorials.map(
                    ({ node: tutorial }, i) =>
                      i === 0 ? (
                        singlePostItem(tutorial, tutorial.id, 'card__dark-overlay p-b--1h')
                      ) : null
                  )}
                </div>

                <div className="card__half-stack flex-column item-12 item-md-6">
                  {tutorials.map(
                    ({ node: tutorial }, i) =>
                      i > 0 && i < 3 ? (                    
                        singlePostItem(tutorial, tutorial.id, 'p-b--1h')
                      ) : null                   
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
            # featuredimage
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
            # featuredimage
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
