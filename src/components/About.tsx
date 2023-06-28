import wave from "../assets/bottom_wave.svg";
import { ReactSVG } from "react-svg";

export default function About() {
  return (
    <div className="about">
      <ReactSVG className="wave" src={wave} />
      <div className="about-content">
        <h2>A little about me...</h2>
        <div className="card-container">
          <div className="card timeline">
            <div className="timeline-item">
              <time className="time">2014-2016</time>
              <h3>🚌 The University of British Columbia</h3>
              <p>After high school, I studied computer science at UBC.</p>
              <p>
                &lt;👵🏼&gt; Back in my day, we wrote code on paper! With pencils!
                &lt;/👵🏼&gt;
              </p>
            </div>
            <div className="timeline-item">
              <time className="time">2016-2020</time>
              <h3>💭 Wandering, Exploring, Maybe a Little Lost</h3>
              <p>
                I wasn't sure what I wanted to do with my life. I took some time
                away from school to work full-time. During this period, I worked
                retail, hospitality, legal, and even spent some time as a pastry
                cook!
              </p>
              <p>It was fun. It was exhausting. It was... life.</p>
              <p>
                I felt like something was still missing. I knew I wanted to go
                back to school.
              </p>
            </div>
            <div className="timeline-item">
              <time className="time">2020-2023</time>
              <h3>📚 Return to School</h3>
              <p>
                I was laid off when the pandemic hit. I took this opportunity to
                finish my degree, majoring in something I had always been
                passionate about - psychology.
              </p>
              <p>
                However, after some time passed... I found myself missing
                coding.
              </p>
              <p>
                In 2022, in the last year of my UBC undergraduate degree, I
                signed up for the Lighthouse Labs flex program!
              </p>
              <p>
                It was definitely difficult to balance the two programs, but I
                knew I could rise to the challenge.
              </p>
            </div>
            <div className="timeline-item">
              <time className="time">TODAY</time>
              <h3>🎓 Graduated x2!</h3>
              <p>
                I've just graduated from both Lighthouse Labs and UBC (with
                distinction!), and am looking for my next challenge!
              </p>
            </div>
          </div>
          <div className="card about-me">
            <h3>but wait.. there's more!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
