import React from 'react'

const Strategic = ({data}) => {
  return (
    <section className="features">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{data.title}</h2>
            </div>
          </div>

          <div className="row feature ahc">
            {data.data.map((el,i) => (
                <div className="col-lg-4 col-md-12" key={i}>
              <div className="content icon-top">
                <div className="icon green star">
                  <img
                    src={el.image.url}
                    alt={el.image.title}
                    width="28"
                    height="27"
                  />
                </div>

                <div className="text paddingless">
                  <h3>{el.title}</h3>
                  <p>
                    {el.description}
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

export default Strategic