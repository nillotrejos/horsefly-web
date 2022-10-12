import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichText = ({data}) => {
    const Heading = ({ children }) => <h2 className="mw-960 ahc">{children}</h2>;
    const Text = ({ children }) =>  <p className="mw-960 ahl">{children}</p>;
    const Ul = ({ children }) =>  <ul className="mw-960 mh-n-md">{children}</ul>; 

    const options = {
        renderNode: {
          [BLOCKS.HEADING_2]: (node, children) => <Heading>{children}</Heading>,
          [BLOCKS.PARAGRAPH]: (node,children) =>  <Text>{children}</Text>,
          [BLOCKS.UL_LIST]: (node,children) =>  <Ul>{children}</Ul>,
        },
        renderText: text => text,
      };
  return (
    <section className="blue bg-04">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block"> 
             {documentToReactComponents(data,options)}
            </div>
          </div>
        </div>
      </section>
  )
}

export default RichText