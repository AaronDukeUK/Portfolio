import { Route, BrowserRouter, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
