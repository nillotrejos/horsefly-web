import React from 'react'

const TopHeader = ({data}) => {
  return (
    <section className="hero">
            <div className="wrap centered">
          <div className="col-lg-6 col-md-12">
            <img
              src={data.image.url}
              alt={data.image.title}
              width="560"
              height="361"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="content">
              <h1 className="mh-s-md">
                {data.title}
              </h1>
              <p>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TopHeader