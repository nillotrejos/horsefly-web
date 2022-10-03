import React from 'react'

const WorkBlogs = ({data}) => {
  return (
    <>
    {data.map(el => {
        if(el.imageDirection == "Left"){
            return(
                <section className="mod-cols-2 border-s" key={el.title}>
        <div className="wrap centered">
          <div className="col-lg-7 col-md-12">
            <img
              src={el.image.url}
              alt={el.image.title}
              width="650"
              height="455"
            />
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="content">
              <small className="mh-s-sm">{el.title}</small>
              <h2 className="mh-s-md">
                {el.subTitle}
              </h2>
              {el.listItems.length > 1 ? (
                <ul>
                    {el.listItems.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
              ): (
                <>
                {el.listItems.map(item => (
                    <p key={item}>
                     {item}
                    </p>
                ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
            )
        }else{
            return(
                <section className="mod-cols-2 border-s" key={el.title}>
        <div className="wrap centered">
          <div className="col-lg-5 col-md-12">
            <div className="content">
              <small className="mh-s-sm">
               {el.title}
              </small>
              <h2 className="mh-s-md">{el.subTitle}</h2>
              {el.listItems.length > 1 ? (
                <ul>
                    {el.listItems.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
              ): (
                <>
                {el.listItems.map((item) => (
                    <p key={item}>
                     {item}
                    </p>
                ))}
                </>
              )}
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <img
              src={el.image.url}
              alt={el.image.title}
              width="660"
              height="479"
            />
          </div>
        </div>
      </section>
            )
        }
    })}
      </>
  )
}

export default WorkBlogs