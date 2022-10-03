import React from 'react'

const Plateform = ({data}) => {
  return (
    <section className="features light-gray">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{data.title}</h2>
              <p className="mw-560 ahc">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Plateform