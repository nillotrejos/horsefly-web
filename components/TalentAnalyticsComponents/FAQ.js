import React from 'react'

const FAQ = ({data}) => {
  return (
    <section className="features">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{data.title}</h2>
            </div>
          </div>
          <div className="row faqs ahc">
            {data.data.map((el,i) => (
                <div className="col-lg-12 mh-s-md item" key={i}>
              <div className="content">
                <div className="text">
                  <h3>Question</h3>
                  <p>
                    <strong>
                      {el.question}
                    </strong>
                  </p>
                </div>

                <div className="text">
                  <h3>Answer</h3>
                  <p>
                    {el.answer}
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

export default FAQ