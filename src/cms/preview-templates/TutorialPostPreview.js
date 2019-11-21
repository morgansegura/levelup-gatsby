import React from "react"
import PropTypes from "prop-types"
import { TutorialPostTemplate } from "../../templates/tutorial-post"
import "../../assets/css/bundle.css"

const TutorialPostPreview = ({ entry, widgetFor }) => (
  <TutorialPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
)

TutorialPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TutorialPostPreview
