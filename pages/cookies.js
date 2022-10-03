import Link from "next/link";

export default function Cookies() {
  return (
    <main>
      <section className="simple management">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h1>Cookies on Horsefly Analytics</h1>
              <h2 className="smalltop">Cookie Declaration</h2>
              <p>
                We use &apos;cookies&apos; and similar technologies{" "}
                <i>
                  (for simplicity we refer to all such technologies as
                  &apos;cookies&apos;)
                </i>{" "}
                to collect or retrieve information on your browser/device.
              </p>
              <p>
                Cookies are small text files that can be used by websites to
                make a user&apos;s experience more efficient.
              </p>
              <p>
                The information collected might be related to you, your
                preferences or your device and is mostly used to make the site
                work as you expect it to. This information does not directly
                identify you, but it can give you a more personalised
                experience.
              </p>
              <p>
                The law states that we can store cookies on your browser/device
                if they are strictly necessary for the operation of this site.
                For all other types of cookies we need your permission.
              </p>
              <p>
                When you first visit our website, we{" "}
                <i>(AI Recruitment Technologies Ltd.)</i> do not set any other
                kind of cookies on your device unless you accept/enable all
                cookies, or select your own cookie preferences.
              </p>
              <p>
                You can change your settings at any time, however, be aware that
                blocking some types of cookies may impact your experience of the
                website and the services we are able to offer.
              </p>
              <p>
                We place some of the cookies ourselves{" "}
                <i>(&apos;First Party&apos;)</i>, while other cookies are placed
                by another company <i>(&apos;Third Party&apos;)</i> providing a
                service to us{" "}
                <i>
                  (for example, we Google Analytics to help us understand how
                  our website is being used)
                </i>
                . Due to the nature of cookies, our website cannot access
                third-party cookies; nor can other organisations access the data
                in the cookies we use on our website.
              </p>

              <h2>Cookie Settings</h2>
              <p>HorseflyAnalytics.com uses three types of cookies</p>

              <h3 className="smalltop">Essential cookies</h3>
              <p>
                These cookies are necessary for the website to function and
                cannot be switched off in our systems. They are usually only set
                in response to actions made by you which amount to a request for
                services, such as setting your privacy preferences, logging in
                or filling in forms. The information collected through these
                cookies is not used for marketing purposes.
              </p>

              <h3 className="smalltop">Cookies that remember your settings</h3>
              <p>
                These cookies are used to remember your preferences when you
                return to our website. This enables us to personalise our
                content for you.
              </p>
              <div className="switch">
                <input type="checkbox" name="settings" id="settings" />
                <label for="settings">Settings cookies</label>
              </div>

              <h3 className="smalltop">Cookies that measure website use</h3>
              <p>
                These cookies help us to improve our website. The cookies
                collect information about how our visitors use
                HorseflyAnalytics.com, including information about the pages
                most visited and bounce rate. For example, Google Analytics sets
                cookies that store anonymised information about general usage.
              </p>
              <div className="switch">
                <input type="checkbox" name="usage" id="usage" />
                <label for="usage">Usage cookies</label>
              </div>

              <h3 className="smalltop">
                Cookies that help with our communications and marketing{" "}
              </h3>
              <p>
                These cookies may be set by third party websites and do things
                like measure how you view YouTube videos that are on
                HorseflyAnalytics.com. They may be used to build a profile of
                your interests. They do not store personal information directly,
                but are based on uniquely identifying your browser and internet
                device.
              </p>
              <div className="switch">
                <input type="checkbox" name="campaigns" id="campaigns" />
                <label for="campaigns">Campaign cookies</label>
              </div>

              <div className="button-set">
                <Link href="#" className="btn btn-blue" id="update-settings">
                  <a className="btn btn-blue">Update Settings</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
