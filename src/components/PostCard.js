import React from "react"
import { Link } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const PostCard = props => (
  <Link to={props.slug} className={`card ${props.classes}`}>
    {props.featuredimage ? (
      <PreviewCompatibleImage
        imageInfo={{
          className: "card__image",
          image: props.featuredimage,
          // image: `${props.full_image}`,
          alt: `featured image thumbnail for post ${props.title}`,
        }}
      />
    ) : null}
    {props.tags ? (
      <div className="tags">
        {props.tags.map(tag => (
          <Link className="tag" to={`/tags/${tag.replace(/ /g, '-').toLowerCase()}/`}>
            <span>{tag}</span>
          </Link>
        ))}
      </div>
    ) : null}
    <div className="card__content">
      {props.title ? (
        <p
          className="card__title"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
      ) : null}
      {props.excerpt ? (
        <div className="card__excerpt">
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        </div>
      ) : null}

      <div className="card__icon">
        <span className="btn btn--sm">Read More</span>
      </div>
    </div>
  </Link>
)

export default PostCard
