import React from "react"
import {Link} from "gatsby"
// import PropTypes from "prop-types"


const CheckLink = (linkInfo) => {

  const { description, url, type, className} = linkInfo

  if (type === 'gatsbyLink') {
    return (
      <Link to={url} aria-label={description} className={className}>
      {linkInfo.children}
      </Link>
    )
  } else {
    return (
      <a href={url} aria-label={description} className={className}>
      {linkInfo.children}
      </a>
    )
  }

}

// Link.propTypes = {
//   imageInfo: PropTypes.shape({
//     alt: PropTypes.string,
//     childImageSharp: PropTypes.object,
//     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
//     className: PropTypes.string,
//   }).isRequired,
// }

export default CheckLink
