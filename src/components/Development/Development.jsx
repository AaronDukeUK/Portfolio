import { Link } from "react-router-dom"

import "./Development.sass"

const Development = () => {
  return (
    <section className="homeSectionContainer greyBG">
      <div className="homeSection">
        <div className="homeText">
          <p className="lead">
            From <span className="italic">hospitality</span>, to front-end.
          </p>
          <p>Learning to code from the ground up.</p>
          <p>
            Spending time to learn the fundamentals of{" "}
            <span className="italic">Web Development</span>.
          </p>
          <Link className="link customLink" to="/about">
            What are my skills?
          </Link>
          <h2 className="coloredBlue">DEVELOP.</h2>
        </div>

        <img
          className="homeImage"
          alt="laptop displaying code"
          src={require("../../assets/development.jpg")}
        />
      </div>
    </section>
  )
}

export default Development
