import React from "react"

const Card = props => (
  <div className={`card ${props.classes}`}>
    {props.image ? (
      <div
        className="card__image"
        variant="top"
        alt={props.alt || "default"}
        src={props.image}
      />
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

      <div className="card__icon" href={props.readMore}>
        <span className="btn btn--sm">Read More</span>
      </div>
    </div>
  </div>
)

export default Card
