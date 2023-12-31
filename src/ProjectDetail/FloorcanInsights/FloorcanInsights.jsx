import LightGallery from "lightgallery/react";

import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import HeroImage from "./Assets/SS1.png";

import SS2 from "./Assets/SS1.png";
import SS1 from "./Assets/SS2.png";
import SS3 from "./Assets/SS3.png";
import SS4 from "./Assets/SS4.png";

const FloorcanInsights = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={HeroImage} loading="lazy" alt="Background Screenshot" />
        <div className="container">
          <div className="main-content">
            <h1>Floorcan Insights</h1>
            <h2>A React Based DECK.GL Data Visualization App</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Front-End Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Visualize geographical data</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Early 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="container-full">
        <div className="container">
          <h1 className="faded-heading">Why?</h1>
          <div className="content-offset">
            <p>
              We were tasked with revitalizing the data visualization tools
              utilized by a specific department at RBC. Their existing tools
              were outdated for analyzing client geographical data. To modernize
              this process, we embraced the{" "}
              <span className="highlight"> DECK.GL </span>framework in
              combination with React, enabling a comprehensive redesign. My
              primary responsibility involved conceiving and executing the User
              Interface (UI) transformation.
            </p>
          </div>
        </div>
      </section>

      <article className="container-half dev-phase">
        <div className="container">
          <h1 className="faded-heading">Tools & Tech</h1>
          <div className="content-offset">
            <div className="half-cols">
              <div className="left-half">
                <div className="left-half-text">
                  <p>Design</p>
                  <ul>
                    <li className="large-li">Pen & Paper</li>
                    <li className="large-li">Figma</li>
                  </ul>
                </div>
              </div>
              <div className="right-half">
                <div className="right-half-text">
                  <p>Development</p>
                  <ul>
                    <li className="large-li">CSS</li>
                    <li className="large-li">JavaScript</li>
                    <li className="large-li">React</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="container-half dev-phase">
        <div className="container">
          <h1 className="faded-heading">&lt;Dev&gt;</h1>
          <div className="content-offset">
            <div className="half-cols">
              <div className="left-half">
                <p>
                  Beginning with the design phase, I leveraged Figma to craft
                  the UI, meticulously sculpting a visual identity with
                  RBC&apos;s design guide. After the design was finalized, I
                  transitioned to the development phase. Implementing the UI in
                  React, I employed CSS to bring the design to life, ensuring a
                  seamless and intuitive user experience.
                </p>
              </div>
              <div className="right-half">
                <div className="right-half-images">
                  <LightGallery
                    speed={500}
                    plugins={[lgZoom, lgFullscreen, lgAutoplay, lgVideo]}
                    enableThumbSwipe={true}
                    loadYouTubeThumbnail={true}
                    licenseKey={
                      import.meta.env.MODE === "development"
                        ? "x"
                        : import.meta.env.LIGHTGALLERY_LICENCE
                    }
                  >
                    <a href={SS1}>
                      <img alt="ScreenShot 1" loading="lazy" src={SS1} />
                    </a>
                    <a href={SS2}>
                      <img alt="ScreenShot 2" loading="lazy" src={SS2} />
                    </a>
                    <a href={SS3}>
                      <img alt="ScreenShot 3" loading="lazy" src={SS3} />
                    </a>
                    <a href={SS4}>
                      <img alt="ScreenShot 4" loading="lazy" src={SS4} />
                    </a>
                  </LightGallery>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="container-full">
        <div className="container">
          <h1 className="faded-heading">Links</h1>
          <div className="content-offset">
            <div className="btns">
              <a target="_blank" rel="noopener noreferrer" href="/">
                <button className="btn" disabled>
                  Live Link unavailable due to client privacy considerations
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloorcanInsights;
