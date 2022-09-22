import { ProjectItem } from "../index"

import "./Projects.sass"

const Projects = () => {
  return (
    <>
      <section className="homeContainer noPaddingBottom">
        <div className="homeSectionContainer greyBG projectsContainer">
          <div className="homeSection projects">
            <div className="projectsTextContainer">
              <h2 className="coloredOrange">Projects.</h2>
              <p className="lead">
                Enough talk, lets look at some of{" "}
                <span className="italic">my projects.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="projectItemsContainer greyBG">
        <ProjectItem
          alt=""
          image=""
          category="E-commerce website"
          title="Fairies of Tranquility"
          lead="Handmade Fairy Products."
          link="https://fairiesoftranquility.netlify.app/"
          bgClass="yellowBG"
        />

        <ProjectItem
          alt=""
          image=""
          category="Brochure website"
          title="Wood Wizards"
          lead="Bespoke Garden Furniture."
          link="https://wood-wizards.netlify.app/"
          bgClass="blueBG"
        />

        <ProjectItem
          alt=""
          image=""
          category="Restaurant website"
          title="Squirrels Drey"
          lead="Fine Dining Restuarant."
          link="https://www.squirrelsdrey.co.uk/"
          bgClass="orangeBG"
        />
      </div>
    </>
  )
}

export default Projects
