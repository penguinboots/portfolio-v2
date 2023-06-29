import melvin from "../assets/melvin-obj.png";

export default function WhyYou() {
  return (
    <div className="why-you">
      <h2>what I love about you</h2>
      <div className="reasons-you-content">
        <img className="melvin" src={melvin} />
        <div className="reasons-you-container">
          <div className="reason-you">
            <h3>The company does things and things</h3>
            <p>
              Things things things things things things things things things
              things things things things things things things some more things
            </p>
          </div>
          <div className="reason-you">
            <h3>The company does things and other things</h3>
            <p>
              Things things things things things things things things things
              things things things some more things
            </p>
          </div>
          <div className="reason-you">
            <h3>The company does a lot of things</h3>
            <p>
              Things things things things things things things things things
              things things things some more things
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
