import React from 'react'

function Video({id}) {
  return (
    <section className="video">
        <div className="wrap">
          <div className="col-lg-12">
            <lite-youtube
              videoid={id}
              style={{
                backgroundImage: "/webp/homepage/horsefly-video-thumbnail.webp",
              }}
            >
              <button type="button" className="lty-playbtn">
                <span className="lyt-visually-hidden">
                  Play Video: How does Horsefly work?
                </span>
              </button>
            </lite-youtube>
          </div>
        </div>
      </section>
  )
}

export default Video