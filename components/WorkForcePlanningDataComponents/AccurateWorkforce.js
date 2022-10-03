import React from 'react'

const AccurateWorkforce = ({data}) => {
  return (
    <section className="features light-gray">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">
                {data.title}
              </h2>
              <p>{data.description}</p>
            </div>
          </div>

          <div className="row feature ahc">
            {data.talentDataRefCollection.items.map((el,i) => (
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
  
                  <div className="text">
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

export default AccurateWorkforce