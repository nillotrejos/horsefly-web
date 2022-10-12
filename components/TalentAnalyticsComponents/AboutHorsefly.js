import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const AboutHorsefly = ({data}) => {
  return (
    <section className="features">
    <div className="wrap">
      <div className="col-lg-12">
        <div className="content">
          <h2 className="ahc bold">
            {ReactHtmlParser(data.title)}
          </h2>
          <p className="mw-560 ahc">
            {ReactHtmlParser(data.description)}
          </p>
        </div>
      </div>

      <div className="row feature-list ahc">
        {data.data.map((el,i) => {
            return(
            <div className="col-lg-12 mh-ns-lg" key={i}>
          <div className="content">
            <div className="feature-check">
              <img
                src={el.logo.url}
                alt={el.logo.title}
                width="100"
                height="100"
              />
            </div>

            <div className="feature-description">
              <h3>{ReactHtmlParser(el.title)}</h3>
              <p>
               {ReactHtmlParser(el.description)}
              </p>
            </div>
          </div>
        </div>
        )})}
      </div>
    </div>
  </section>
  )
}

export default AboutHorsefly