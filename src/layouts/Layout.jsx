import { Border, Footer } from "../components"

import "./reset.sass"
import "./Layout.sass"

const Layout = ({ children }) => {
  return (
    <>
      <Border />
      {children}
      <div className="bottomMargin"></div>
      <Footer />
    </>
  )
}

export default Layout
