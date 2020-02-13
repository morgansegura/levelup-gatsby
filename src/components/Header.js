import React from "react"
import Navbar from "./Navbar"
import { graphql, StaticQuery } from "gatsby"

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
      <header className={`${props.classes}`}>
        <Navbar data={data} count={count} />
      </header>
    )}
  />
)
