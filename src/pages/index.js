import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Card from "../components/Card"


export default ({ data }) => {
  console.log(data.allMarkdownRemark)
  const posts = data.allMarkdownRemark.edges
  return (
    <PrimaryLayout className="container">
      <div className="container">
        <div className="grid">
          {posts.map(({ node: post }) => (
            <div key={post.id} className="item-12 item-sm-6 item-lg-4">
              <Card
                classes="bg--white"
                alt={post.frontmatter.description}
                image={post.frontmatter.featuredimage}
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                readMore={post.fields.slug}
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
  allMarkdownRemark {
    edges {
      node {
        id
        excerpt(pruneLength: 130)
        frontmatter {
          featuredimage
          full_image
          description
          date(formatString: "DMY")
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
