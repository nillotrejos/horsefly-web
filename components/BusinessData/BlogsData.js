import React from 'react'
import ReactHtmlParser from 'react-html-parser'
const BlogsData = ({data}) => {
  return (
    <>
    {data.map((el,i)=> {
        if(el.imageDirection == "Right"){
            return(
<section className="mod-cols-2 border-s" key={i}>
        <div className="wrap centered">
          <div className="col-lg-6 col-md-12">
            <div className="content">
              <h2 className="lg mh-s-md">
                {ReactHtmlParser(el.title)}
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

          <div className="col-lg-6 col-md-12">
            <img
              src={el.image.url}
              alt={el.image.title}
              width="560"
              height="560"
            />
          </div>
        </div>
      </section>
            )
        }else{
            return(
<section className="mod-cols-2 border-s" key={i}>
        <div className="wrap centered">
          <div className="col-lg-6 col-md-12">
            <img
              src={el.image.url}
              alt={el.image.title}
              width="560"
              height="560"
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="content">
              <h2 className="lg mh-s-md">
              {ReactHtmlParser(el.title)}
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

export default BlogsData