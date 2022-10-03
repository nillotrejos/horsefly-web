import React from 'react'
import Link from "next/link";
import { BLOCKS,INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BannerInfo = ({data}) => {
    const Text = ({ children }) =>  <p className="mw-960 ahc">{children}</p>;

    const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node,children) =>  (
          <>
          <Text>{children}</Text>
          <br />
          </>
          ),
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
    <section className="blue bg-01">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block">
                {documentToReactComponents(data.json,options)}
            </div>
          </div>
        </div>
      </section>
  )
}

export default BannerInfo