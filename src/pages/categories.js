import React from "react"
import { Link, graphql } from "gatsby"
import BlogPostLayout from "../layouts/BlogPostLayout"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
const Categories = ({ data }) => {
  const posts = data.allWordpressCategory.edges
  return (
    <BlogPostLayout>
      <div className="blogpost container mtb-3">
        {!!posts
          ? posts.map(({ node: post }) => (
              <Link to={post.slug} key={post.id} id={post.id}>
                {!!post.title && <h4>{post.title}</h4>}
                {!!post.date && <p>{post.date}</p>}
                {!!post.description && <p>{post.description.description}</p>}
                {!!post.image && (
                  <PreviewCompatibleImage
                    imageInfo={{
                      className: "card__image",
                      image: post.image,
                      alt: `featured image thumbnail for post ${post.title}`,
                    }}
                  />
                )}
              </Link>
            ))
          : "Whatveva!"}
      </div>
    </BlogPostLayout>
  )
}
export default Categories

export const query = graphql`
  query CategoriesPageQuery {
    allWordpressCategory(limit: 1000) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`
