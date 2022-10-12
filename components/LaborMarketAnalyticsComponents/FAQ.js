import Link from "next/link";
import React from 'react'
import { BLOCKS,INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const FAQS = ({data}) => {
    const Text = ({ children }) =>  <p>{children}</p>;
    const OL = ({children}) => <ol style={{marginLeft:'80px'}}>{children}</ol>
    console.log(data)
    const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node,children) =>  <Text>{children}</Text>,
          [BLOCKS.OL_LIST]: (node,children) =>  <OL>{children}</OL>,
          [INLINES.HYPERLINK]: ({ data }, children) => (
                <Link
                href={data.uri}
                className="link alt"
                target={`${data.uri ? '_self' : '_blank'}`}
                rel="nofollow noreferrer noopener"
                ><a className="link alt">{children}</a></Link>
            )
        },
        renderText: text => text,
      };
  return (
    <section className="features">
        <div className="wrap">
          <div className="col-lg-12" style={{width:'80%',margin:'auto',display:'flex'}}>
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
                    <strong style={{fontWeight:'800 !important'}}>
                      {el.question}
                    </strong>
                  </p>
                </div>

                <div className="text" style={{display:'flex'}}>
                  <h3>Answer</h3>
                  <span className="spa">
                  {documentToReactComponents(el.faqAnswer.json,options)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

  )
}

export default FAQS