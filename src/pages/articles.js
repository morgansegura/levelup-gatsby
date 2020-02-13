import React from "react"
import { graphql } from "gatsby"
import BlogPostLayout from "../layouts/BlogPostLayout"
import PostListItem from "../components/PostListItem"

const Articles = ({ data }) => {

  const posts = data.allWordpressPost.edges
  return (
    <BlogPostLayout>
      <div className="blogpost container mtb-3">
        {posts &&
          posts.map(({ node: post }) => (
            <PostListItem
              classes={"hello"}
              catOverride="Article"
              path="article"
              post={post}
            />
          ))}
      </div>
    </BlogPostLayout>
  )
}
export default Articles

export const query = graphql`
  query BlogPostsPageQuery {
    allWordpressPost(limit: 1000) {
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
