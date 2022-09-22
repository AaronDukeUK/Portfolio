import { Link } from "react-router-dom"

import "./Plan.sass"

const Plan = () => {
  return (
    <section className="homeSectionContainer">
      <div className="homeSection">
        <img
          className="homeImage"
          alt="sketch of website"
          src={require("../../assets/plan.jpg")}
        />

        <div className="homeText">
          <p className="lead">
            Using <span className="italic">modern</span> technologies.
          </p>
          <p>
            Keeping <span className="italic">up-to-date</span> with the latest
            web technologies.
          </p>
          <p>
            Understanding <span className="italic">user experience</span> and
            optimisation.
          </p>
          <Link className="link speedLink" to="/about">
            How are my websites optimised?
          </Link>
          <h2 className="coloredYellow">PLAN.</h2>
        </div>
      </div>
    </section>
  )
}

export default Plan
