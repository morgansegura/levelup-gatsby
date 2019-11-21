import React from "react"
import PropTypes from "prop-types"
import { AuthorPostTemplate } from "../../templates/author-post"
import "../../assets/css/bundle.css"

const AuthorPostPreview = ({ entry, widgetFor }) =>
  (
    <AuthorPostTemplate
      description={entry.getIn(["data", "description"])}
      biography={widgetFor("biography")}
      authorImage={entry.getIn(["data", "authorImage"])}
      firstName={entry.getIn(["data", "firstName"])}
      lastName={entry.getIn(["data", "lastName"])}
      title={entry.getIn(["data", "title"])}
    />
  )

AuthorPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AuthorPostPreview
