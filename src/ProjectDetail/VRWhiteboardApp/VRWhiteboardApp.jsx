/* eslint-disable jsx-a11y/anchor-is-valid */
import LightGallery from "lightgallery/react";
import { FaGithub } from "react-icons/fa";

import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import SS2 from "./Assets/CP.gif";
import SS5 from "./Assets/E.gif";
import SS6 from "./Assets/G.gif";
import SS1 from "./Assets/In.gif";
import SS3 from "./Assets/P.gif";
import SS4 from "./Assets/Pn.gif";
import VideoThumb from "./Assets/Thumb.gif";

const VRWhiteboardApp = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={SS1} loading="lazy" alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>VR Whiteboard</h1>
            <h2>A Unity Based Application</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Unity Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Final Deliverable for &prime;AR, VR & MR&prime; course</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Early 2022</p>
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
              A unity application which simulates a real-world classroom with
              the help of a Virtual Reality Whiteboard. This project served as
              the culminating assignment for the &prime;Augmented Reality,
              Virtual Reality and Mixed Reality&prime; course and garnered me an
              exceptional A+ grade. The task entailed proposing a project idea
              and executing it within a compressed two-week timeframe.
            </p>
          </div>
        </div>
      </section>

      <section className="development">
        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">&lt;Dev&gt;</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    The project consist of{" "}
                    <span className="highlight">4 drawing tools:</span>
                  </p>
                  <ul>
                    <li className="large-li">Color Picker</li>
                    <li className="large-li">Pen (Marker)</li>
                    <li className="large-li">Pencil (Marker)</li>
                    <li className="large-li">Eraser</li>
                  </ul>
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
                        <img
                          alt="Introdution to VR Whiteboard"
                          loading="lazy"
                          src={SS1}
                        />
                      </a>
                      <a href={SS2}>
                        <img alt="Color Picker" loading="lazy" src={SS2} />
                      </a>
                      <a href={SS3}>
                        <img alt="Pen" loading="lazy" src={SS3} />
                      </a>
                      <a href={SS4}>
                        <img alt="Pencil" loading="lazy" src={SS4} />
                      </a>
                      <a href={SS5}>
                        <img alt="Eraser" loading="lazy" src={SS5} />
                      </a>
                      <a href={SS6}>
                        <img alt="Environment" loading="lazy" src={SS6} />
                      </a>
                      <a
                        data-src="https://vimeo.com/858012693"
                        data-sub-html="<h4>AR Whiteboard</h4>"
                      >
                        <img
                          src={VideoThumb}
                          loading="lazy"
                          alt="Click here to play video"
                        />
                      </a>
                    </LightGallery>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="container-full">
        <div className="container">
          <h1 className="faded-heading">Links</h1>
          <div className="content-offset">
            <div className="btns">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Gulshan1357/VR_Whiteboard"
              >
                <button className="btn">
                  GitHub
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRWhiteboardApp;
