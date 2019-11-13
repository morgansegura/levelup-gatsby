import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
// import Post from "../components/Post"


export default ({ data }) => {
  console.log(data.site)
  return (
    <PrimaryLayout column="col-xs-6">
      <div className="container">
      pages/index.js
      {/*data.allWordpressPost.nodes.map(node => (
        <Post
          // alt={node.featured_media.slug}
          // image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))*/}
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
}
`
