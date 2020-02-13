import React from "react"
import { Link, graphql } from "gatsby"
import BlogPostLayout from "../layouts/BlogPostLayout"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
const Post = ({ data }) => {
  const {
    id,
    // slug,
    title,
    date,
    subheading,
    excerpt,
    body,
    author,
    tags,
    image,
  } = data.wordpressPost
  
  return (
    <BlogPostLayout>
      <div className="blogpost container mtb-3" id={id}>
        {!!title && <h1>{title}</h1>}
        {!!subheading && <h2>{subheading}</h2>}
        {!!date && <p>{date}</p>}
        {!!excerpt && <p>{excerpt.excerpt}</p>}
        {!!image && (
          <PreviewCompatibleImage
            imageInfo={{
              className: "featured__image",
              image: image,
              alt: `featured image thumbnail for post ${title}`,
            }}
          />
        )}
        {!!tags && (
          <ul className="tags">
            {tags.map(tag => (
              <li key={tag.id}>
                <Link to={`/tag/${tag.slug}`} className="tag">
                  {tag.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!!body.childMarkdownRemark && (
          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />
        )}

        {!!author &&
          author.map((author, i) => (
            <div className="author" key={i}>
              {!!author.name && (
                <p>
                  <Link to={author.slug}>{author.name}</Link>
                </p>
              )}
              {!!author.excerpt && <p>{author.excerpt.excerpt}</p>}
              {!!author.bio && (
                <div>
                  <p>{author.bio.bio}</p>
                </div>
              )}
              {!!author.image && (
                <PreviewCompatibleImage
                  imageInfo={{
                    className: "",
                    image: author.image,
                    alt: `featured image thumbnail for post ${author.name}`,
                  }}
                />
              )}
            </div>
          ))}
      </div>
    </BlogPostLayout>
  )
}
export default Post
export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      id
      path
      status
      template
      format     
    }
  }
`
