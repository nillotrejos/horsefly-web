import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const BannerSec = ({info}) => {
  const Text = ({ children }) =>  <p className="mw-960 ahc">{children}</p>;

  const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node,children) =>  (
          <>
        <Text>{children}</Text>
        <br />
        <br />
        </>
        ),
      }, 
      renderText: text => text,
    };
  return (
    <section className="blue bg-06 bg-filter">
            <div className="wrap">
          <div className="col-lg-12">
            <div className="content msg-block">
            {documentToReactComponents(info,options)}
            </div>
          </div>
        </div>
      </section>
  )
}

export default BannerSec