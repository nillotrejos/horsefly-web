import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const LabourDescription = ({info}) => {

  const Heading = ({ children }) => <h2 className="mw-960 ahc">{children}</h2>;
  const Heading2 = ({ children }) => <h3 className="mw-960 ahc">{children}</h3>;
  const Text = ({ children }) =>  <p className="mw-960 ahc">{children}</p>;

  const options = {
      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => <Heading>{children}</Heading>,
        [BLOCKS.PARAGRAPH]: (node,children) =>  (
          <>
        <Text>{children}</Text>
        <br />
        <br />
        </>
        ),
        [BLOCKS.HEADING_3]: (node,children) =>  <Heading2>{children}</Heading2>,
      },
      renderText: text => text,
    };
  return (
    <>
    <section className="blue bg-05">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block">
            {documentToReactComponents(info,options)}
            </div>
          </div> 
        </div>
      </section>
      </>
  )
}

export default LabourDescription