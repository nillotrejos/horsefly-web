import React from 'react'

const LaborBlogs = ({data}) => {
  return (
    <>
    <section className="features no-pad-s">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="mw-960 ahc bold">
                {data.title}
              </h2>
            </div>
          </div>
        </div>
      </section>
    {data.data.map((el,i)=> {
        if(el.imageDirection == "Right"){
            return(
<section className="mod-cols-2 border-s" key={i}>
        <div className="wrap centered">
          <div className="col-lg-5 col-md-12">
            <div className="content">
              <h2 className="mh-s-md">
                {el.title}
              </h2>
              {el.listItems.length > 1 ? (
                 <ul>
                    {el.listItems.map((item,index) => (
                        <li key={index}>
                         {item}
                        </li>
                    ))}
               </ul>
              ): (
                <>
                {el.listItems.map((item,index) => <p key={index}>{item}</p>)}
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
        }else{
            return(
<section className="mod-cols-2 border-s" key={i}>
        <div className="wrap centered">
          <div className="col-lg-7 col-md-12">
            <img
              src={el.image.url}
              alt={el.image.title}
              width="660"
              height="480"
            />
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="content">
              <h2 className="mh-s-md">
                {el.title}
              </h2>
              {el.listItems.length > 1 ? (
                <ul>
                    {el.listItems.map((items,index) => (
                        <li key={index}>
                  {items}
                </li>
                    ))}
                
              </ul>
              ): (
                <>
                {el.listItems.map((item,index) => (
                    <p key={index}>
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
        }
    })}
    </>
  )
}

export default LaborBlogs