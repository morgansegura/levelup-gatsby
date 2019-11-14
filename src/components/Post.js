import React from "react"

const Post = props => (
  <div className="post__list--item">
    <div className="">
      <div variant="top" alt={props.alt || "default"} src={props.image} />
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.title }} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        </div>
        <div className="btn__block" href={props.readMore}>
          <span className="btn btn--sm btn--theme-color">Read More</span>
        </div>
      </div>
    </div>
  </div>
)

export default Post
