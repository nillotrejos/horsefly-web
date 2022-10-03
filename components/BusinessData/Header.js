import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Header = ({data}) => {
  return (
    <section className="hero">
        <div className="wrap centered">
          <div className="col-lg-6 col-md-12">
            <img
              src={data.image.url}
              alt={data.image.title}
              width="560"
              height="546"
            />
          </div> 
          <div className="col-lg-6 col-md-12">
            <div className="content">
              <small className="mh-s-sm">{data.title}</small>
              <h1 className="mh-s-md">
               {ReactHtmlParser(data.subTitle)}
              </h1>
              <p>
                {ReactHtmlParser(data.description)}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Header