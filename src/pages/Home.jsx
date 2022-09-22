import { Development, Hero, Projects, Plan } from "../components"

const Home = () => {
  return (
    <main className="homeContainer">
      <Hero />
      <Development />
      <Plan />
      <Projects />
    </main>
  )
}

export default Home
