import React from 'react';
import ReactHtmlParser from 'react-html-parser'

const HowHorsefly = ({data}) => {
  return (
    <section className="features light-gray">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="mw-960 ahc bold">
                {data.title}
              </h2>
              <p className="mw-560 ahc">
                {ReactHtmlParser(data.description)}
              </p>
            </div>
          </div>

          <div className="row feature ahc">
            {data.data.map((el,i) => (
                <div className="col-lg-4 col-md-12" key={i}>
              <div className="content icon-top">
                <div className="icon">
                  <img
                    src={el.logo.url}
                    alt={el.logo.title}
                    width="100"
                    height="100"
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

export default HowHorsefly