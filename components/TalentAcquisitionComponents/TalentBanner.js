import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TalentBanner = ({data}) => {
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

export default TalentBanner