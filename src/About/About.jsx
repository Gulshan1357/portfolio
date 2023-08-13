import "./About.scss";
import heroImage from "./heroImage.png";

import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <header className="container">
      <main className="main">
        <div className="introduction">
          <h1 className="faded-heading faded-heading--dark">I AM</h1>
          <div className="introduction-text">
            <h2>Gulshan Sankhyan</h2>
            <h3>
              <span>
                <TypeAnimation
                  sequence={[
                    "Front-End",
                    600,
                    "Full-Stack",
                    600,
                    "UI",
                    700,
                    "AR",
                    700,
                    "VR",
                    700,
                    "XR",
                    700,
                  ]}
                  speed={10}
                  repeat={Infinity}
                />
              </span>
              <span>Developer</span>
            </h3>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Gulshan's head shot modified using Stable Diffusion AI"
          />
        </div>
      </main>

      <section className="aboutMe" id="about">
        <h1 className="faded-heading">About Me</h1>
        <p>
          Software developer with a focus on eXtended Reality applications for
          platforms such as Virtual Reality and Mixed Reality headsets and
          mobile apps using Unity. Proficiency in Front‑End Web Development,
          with a Master’s degree in the field of Human‑Computer Interaction.
        </p>

        <article>
          <div className="expertise">
            <h5>UI Designer</h5>
            <p>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h6>Things I enjoy designing:</h6>
            <p>Websites, UI (Mobile and XR Apps)</p>
            <h6>Design Tools</h6>
            <p>Figma</p>
            <p>Font Awesome</p>
            <p>Pen & Paper</p>
            <p>Webflow</p>
          </div>
          <div className="expertise">
            <h5>Front-End Developer</h5>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h6>Languages I speak:</h6>
            <p>JavaScript, TypeScript, Ruby, HTML, CSS</p>
            <h6>Dev Tools</h6>
            <p>VS Code</p>
            <p>React</p>
            <p>Angular</p>
            <p>Ruby on Rails</p>
            <p>Flexbox & CSS Grid</p>
            <p>Node</p>
            <p>Git and GitHub</p>
          </div>
          <div className="expertise">
            <h5>XR Developer</h5>
            <p>
              I like to code 3D environments too. Creating immersive experience
              is something I am very passionate about.
            </p>
            <h6>Languages I speak:</h6>
            <p>C#, Shader Programming(HLSL)</p>
            <h6>Dev Tools</h6>
            <p>Unity</p>
          </div>
        </article>
      </section>
    </header>
  );
};

export default Introduction;
