import React from "react"

import { graphql, StaticQuery } from "gatsby"

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderBulletinQuery {
        allWordpressPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <aside className={`${props.classes}`}>
        Messages will populate here.
      </aside>
    )}
  />
)
