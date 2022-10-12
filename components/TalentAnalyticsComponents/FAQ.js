import React from 'react'
import { BLOCKS,INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from "next/link";

const FAQ = ({data}) => {
  const Text = ({ children }) =>  <p>{children}</p>;
  const OL = ({children}) => <ol style={{marginLeft:'80px'}}>{children}</ol>
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
                  {documentToReactComponents(el.faqAnswer.json,options)}
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