import React from "react"

const Post = props => (
  <div className="p-3">
    <div>
      <div variant="top" alt={props.alt || "default"} src={props.image} />
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.title }} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        </div>
        <div variant="warning" href={props.readMore}>
          Read More...
        </div>
      </div>
    </div>
  </div>
)

export default Post
