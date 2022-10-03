import React from 'react'

const HorseflyBanner = ({data}) => {
  return (
    <section className="blue bg-04">
            <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block">
              <h2 className="mw-960 ahc">{data.title}</h2>
              <p className="mw-960 ahc">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HorseflyBanner