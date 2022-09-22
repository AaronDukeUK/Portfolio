import "./About.sass"

const About = () => {
  return (
    <main className="aboutContainer">
      <section className="aboutSectionContainer greyBG">
        <div className="aboutSection">
          <div className="aboutText">
            <h2>About.</h2>
            <p className="lead">
              Hello! I am Aaron, a 32 years young self-taught{" "}
              <span className="italic">web developer</span>.
            </p>
            <p>
              Deciding over six years ago that I wanted to change my career
              path, I started my journey of learning how to code in my spare
              time.
            </p>
            <p>
              During this time, I focussed on the fundamentals of front-end web
              development, followed by programming with React.
            </p>
          </div>

          <img
            className="aboutImage dropped"
            alt="Aaron Duke"
            src={require("../assets/hello2.jpg")}
          />
        </div>
      </section>

      <section className="aboutSectionContainer">
        <div className="aboutSection column">
          <div className="aboutText alignStart">
            <p className="lead">
              Personal <span className="italic">skill</span> set.
            </p>
            <p>What programming languages have I learnt?</p>
          </div>

          <div className="aboutListing">
            <div>
              <p>HTML5</p>
              <p>
                To begin, I developed a solid foundation with HTML.
                Understanding how to use this language efficently whilst
                ensuring accesibilty and semantic markup.
              </p>
            </div>
            <div>
              <p>CSS / SASS</p>
              <p>
                I love the vast possibilities of this language and seeing a
                design come to life upon a web page. Following up from CSS, I
                diverged into SASS and using BEM.
              </p>
            </div>
            <div>
              <p>Javascript / React</p>
              <p>
                Though hard to grasp initally, I have developed a true respect
                for Javascript. Once I felt I had a strong foundation under my
                belt, I delved into React.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutSectionContainer">
        <div className="aboutSection column">
          <img
            className="aboutLargeImage"
            alt="live love learn"
            src={require("../assets/learn.jpg")}
          />
        </div>
      </section>

      <section className="aboutSectionContainer greyBG">
        <div className="aboutSection column">
          <p className="lead">
            Transitioning from <span className="italic">then</span>, to now.
          </p>
          <p>
            From learning, to tackling real-life projects for real-life people.
          </p>
          <p>And more learning.</p>
        </div>
      </section>

      <section className="aboutSectionContainer">
        <div className="aboutSection">
          <div className="aboutText">
            <p className="lead">
              Part-time <span className="italic">freelance</span> web
              development.
            </p>
            <p>Working with Shopify (Liquid), Gatsby, Wordpress & Wix.</p>
            <p>
              For several years, I have been taking on private & agency work.
            </p>
            <p>
              From this, I have attained valuable knowledge in other aspects of
              web development. Along with using several Headless CMS Platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutSectionContainer greyBG">
        <div className="aboutSection">
          <div className="aboutText">
            <h2>CONTACT</h2>
            <p className="lead">
              Want to know <span className="italic">more,</span> feel free to
              get in contact.
            </p>
            <p>+44(0) 7435 236295</p>
            <a href="mailto:hello@aaronduke.co.uk">
              <p>hello@aaronduke.co.uk</p>
            </a>
          </div>

          <img
            className="aboutImage raised"
            alt="live love learn"
            src={require("../assets/free.jpg")}
          />
        </div>
      </section>
    </main>
  )
}

export default About
