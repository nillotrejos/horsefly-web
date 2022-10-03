import { useEffect, useCallback, useState } from "react";
import ReactHtmlParser from 'react-html-parser'
const GetStartedHubspot = ({data}) => {
    const [state, setState] = useState(false);
  const form = useCallback(() => {
    setState(true);
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: "9017550",
          formId: "0f82a4cd-092b-4680-ba1a-164e045381c0",
          target: "#hubspotForm",
        });
      }
    });
    return null;
  }, []);
  useEffect(() => {
    if (state !== true) form();
  }, []);
  return (
    <section className="blue bg-08">
    <div className="wrap">
      <div className="col-lg-12">
        <div className="content cta-block">
          <h2 className="mw-960 ahc">{data.title}</h2>
          <p>
            {ReactHtmlParser(data.description)}
          </p>
          <div className="cta-button">
            <div id="hubspotForm"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GetStartedHubspot