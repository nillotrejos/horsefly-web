import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RpoBannerData = ({data}) => {
  const Heading = ({ children }) => <h2 className="mw-960 ahc">{children}</h2>;
  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <Heading>{children}</Heading>,
    },
    renderText: text => text,
  };
  return (
    <section className="blue bg-07">
    <div className="wrap">
      <div className="col-lg-12">
        <div className="content msg-block">
        {documentToReactComponents(data,options)}
        </div>
      </div>
    </div>
  </section>
  )
}

export default RpoBannerData