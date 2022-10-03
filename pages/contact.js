import { useEffect, useCallback, useState } from "react";
export default function Contact() {
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
          formId: "b6dfa725-3c78-47eb-a8d8-82074cc67926",
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
    <main>
      <section className="contact">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">
                Experience the Power of Horsefly
                <br />
                Sign up for a Demo Today!
              </h2>
              <p className="mw-960 ahc">
                Contact us to learn how we can power your team&apos;s hiring and
                talent strategy!{" "}
                <strong>
                  Please fill out the form below and we will be in touch
                  shortly!
                </strong>
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="content mw-960">
              <div id="hubspotForm"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
