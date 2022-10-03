import React from 'react'

const BannerSection = ({data}) => {
  return (
    <section className="mod-cols-2">
        <div className="wrap centered">
          <div className="col-lg-7 col-md-12">
            <img
              src={data.image.url}
              alt={data.image.title}
              width="660"
              height="395"
            />
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="content">
              <p>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BannerSection