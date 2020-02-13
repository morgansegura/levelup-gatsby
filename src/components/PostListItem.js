import React from "react"
import CheckLink from "../components/CheckLink"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

const PostListItem = props => {

  // deconstruct post content
  const {id, slug, title, image, updatedAt, dateTime, subheading, excerpt, author, tags, categories} = props.post

  const slugPath = (path, slug) => {

    if (path !== '') {
      return `/${path}/${slug}`
    } else {
      return slug
    }
  }

  return (
    <article
      id={id}
      data-index={props.index}
      className={`post-list__item ${props.classes}`}
    >
      <div className="post-list__item-content">
        <header>
          <strong className="label">{props.catOverride}</strong>
          <time className="date" dateTime={dateTime}>
            {updatedAt}
          </time>
        </header>

        <h1 className="heading">{title}</h1>

        {/* [start] Author Card */}
        {author &&
          author.map((author, i) => (
            <div key={i} className="author">
              <PreviewCompatibleImage
                imageInfo={{
                  className: "author__image",
                  image: author.image,
                  alt: `featured image thumbnail for post ${title}`,
                }}
              />
              <div className="author__meta">
                <p className="author__meta-prefix">
                  <span>Author</span>
                </p>
                <p className="author__meta-label">
                  <CheckLink
                    url={`/author/${author.slug}`}
                    className={``}
                    description={author.name}
                    type={`gatsbyLink`}
                  >
                  {author.name}
                  </CheckLink>
                </p>
              </div>

              <div className="author__meta">
                <p className="author__meta-prefix">
                  <span>Comments</span>
                </p>
                <p className="author__meta-label">Start the Conversation</p>
              </div>
            </div>
          ))}

        {/* [start] Subheading */}
        {subheading && (
          <div className="subheading">
            <p>{subheading}</p>
          </div>
        )}
        {/* [start] Excerpt */}
        {excerpt && (
          <div className="excerpt">
            <p>{excerpt.excerpt}{' '}          
              <CheckLink
                url={slugPath(props.path, slug)}
                className={`excerpt__read-more`}
                description={`Read the entire article ${title}`}
                type={`gatsbyLink`}
              >
                Read Article 
              </CheckLink> 
            </p>

          </div>
        )}

        {/* [start] Tags */}
        {tags && (
          <div className="tags">
            <ul>
              {tags.map(tag => (
                <li key={tag.id}>
                  <CheckLink
                    url={`/tag/${tag.slug}`}
                    className={`tag`}
                    description={`View tag ${tag.title}`}
                    type={`gatsbyLink`}
                  >
                  {tag.title}
                  </CheckLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* [start] Categories */}
        {categories && (
          <div className="tags">
            <ul>
              {categories.map(cat => (
                <li key={cat.id}>
                  <CheckLink
                    url={`/category/${cat.slug}`}
                    className={`tag`}
                    description={`View category ${cat.title}`}
                    type={`gatsbyLink`}
                  >
                  {cat.title}
                  </CheckLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* [start] Image */}
        {image && (
          <PreviewCompatibleImage
            imageInfo={{
              className: "cover__image",
              image: image,
              alt: `featured image thumbnail for post ${title}`,
            }}
          />
        )}
      </div>
    </article>
  )
}

export default PostListItem
