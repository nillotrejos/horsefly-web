import React from 'react'

const MarketTools = ({data}) => {
  return (
    <section className="picture-items">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">
                {data.title}
              </h2>
              <p className="mw-560 ahc">
                {data.description}
              </p>
            </div>
          </div>

          <div className="row item ahc">
            {data.data.map((el,i) => (
                <div className="col-lg-3 col-md-6 col-xs-12" key={i}>
              <div className="content">
                <div className="image">
                  <img
                    src={el.image.url}
                    alt={el.image.title}
                    width="216"
                    height="216"
                  />
                </div>

                <div className="text paddingless">
                  <h3>{el.title}</h3>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default MarketTools