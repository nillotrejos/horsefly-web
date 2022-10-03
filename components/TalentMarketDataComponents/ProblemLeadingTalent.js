import React from 'react'

const ProblemLeadingTalent = ({data}) => {
  return (
    <section className="features">
    <div className="wrap">
      <div className="col-lg-12">
        <div className="content">
          <h2 className="ahc bold">
            {data.title}
          </h2>
          <p className="mw-960 ahc">
            {data.description}
          </p>
        </div>
      </div>

      <div className="row feature-list ahc">
        {data.data.map((el,i) => (
            <div className="col-lg-12 mh-s-lg" key={i}>
          <div className="content">
            <div className="feature-title">
              <h2>{el.questionType}</h2>
            </div>

            <div className="feature-description">
              <h3>{el.question}</h3>
              <p>
                {el.answer}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ProblemLeadingTalent