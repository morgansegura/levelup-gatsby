import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageClass = imageInfo.className
  const { alt = "", childImageSharp, image } = imageInfo

  if (!!image) {
    return (
      <Img
        className={imageClass}
        fluid={image.fluid}
        alt={alt}
        rel="!!image && !!image.childImageSharp"
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        className={imageClass}
        fluid={image}
        alt={alt}
        rel="!!childImageSharp"
      />
    )
  }

  if (!!image && typeof image === "string")
    return (
      <img
        className={imageClass}
        src={image}
        alt={alt}
        rel="!!image && typeof image === 'string'"
      />
    )

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    className: PropTypes.string,
  }).isRequired,
}

export default PreviewCompatibleImage
