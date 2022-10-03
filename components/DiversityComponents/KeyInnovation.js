import React from 'react'

const KeyInnovation = ({data}) => {
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

          <div className="row feature-list ahc">
            {data.data.map((el,i) => (
                <div className="col-lg-12 mh-ns-lg" key={i}>
              <div className="content">
                <div className="feature-check">
                  <span>{el.listNumber}</span>
                </div>

                <div className="feature-description">
                  <h3>
                    {el.title}
                    <small>
                      {el.subTitle}
                    </small>
                  </h3>
                  <p className="mh-n-sm">
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

export default KeyInnovation