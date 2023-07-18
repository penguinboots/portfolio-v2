import { devIcons } from "../assets/icons";
import wave from "../assets/wave_5.svg";
import { ReactSVG } from "react-svg";

export default function Skills() {
  return (
    <section className="skills-wrapper">
      <div className="skills-container">
        <h2>stuff I've worked with</h2>
        <h3>Languages</h3>
        <ul>
          <li>
            <img src={devIcons.js} alt="javascript" />
          </li>
          <li>
            <img src={devIcons.ts} alt="typescript" />
          </li>
          <li>
            <img src={devIcons.ruby} alt="ruby" />
          </li>
          <li>
            <img src={devIcons.java} alt="java" />
          </li>
          <li>
            <img src={devIcons.html} alt="html" />
          </li>
          <li>
            <img src={devIcons.css} alt="css" />
          </li>
        </ul>
        <h3>Frameworks & Libraries</h3>
        <ul>
          <li>
            <img src={devIcons.node} alt="node" />
          </li>
          <li>
            <img src={devIcons.react} alt="react" />
          </li>
          <li>
            <img src={devIcons.next} alt="next" />
          </li>
          <li>
            <img src={devIcons.express} alt="express" />
          </li>
          <li>
            <img src={devIcons.jquery} alt="jquery" />
          </li>
          <li>
            <img src={devIcons.sass} alt="sass" />
          </li>
          <li>
            <img src={devIcons.tw} alt="tailwind" />
          </li>
          <li>
            <img src={devIcons.rails} alt="rails" />
          </li>
        </ul>
        <h3>Systems & Databases</h3>
        <ul>
          <li>
            <img src={devIcons.postgresql} alt="postgresql" />
          </li>
          <li>
            <img src={devIcons.git} alt="git" />
          </li>
          <li>
            <img src={devIcons.prisma} alt="prisma" />
          </li>
        </ul>
        <h3>Testing</h3>
        <ul>
          <li>
            <img src={devIcons.mocha} alt="mocha" />
          </li>
          <li>
            <img src={devIcons.chai} alt="chai" />
          </li>
          <li>
            <img src={devIcons.storybook} alt="storybook" />
          </li>
          <li>
            <img src={devIcons.jest} alt="jest" />
          </li>
          <li>
            <img src={devIcons.cypress} alt="cypress" />
          </li>
          <li>
            <img src={devIcons.rspec} alt="rspec" />
          </li>
        </ul>
        <h3>Other</h3>
        <ul>
          <li>
            <img src={devIcons.vercel} alt="vercel" />
          </li>
          <li>
            <img src={devIcons.ps} alt="photoshop" />
          </li>
        </ul>
      </div>
      <ReactSVG className="wave" src={wave} />
    </section>
  );
}
