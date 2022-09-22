import { Link } from "react-router-dom"

import "./Menu.sass"

const Menu = ({ open, setOpen }) => {
  const handleClick = (e) => {
    e.preventDefault()
    setOpen(false)
  }
  return (
    <div
      style={{ transform: `${open ? "translateX(0)" : "translateX(-100%)"}` }}
      className="menuContainer"
    >
      <div className="menuText greyBG">
        <div className="logo">
          <img className="menuImage" alt="" src="" />
        </div>
        <div className="menuLinks">
          <Link className="customLink" to="/">
            Home
          </Link>
          <Link className="speedLink" to="/about">
            About
          </Link>
        </div>
        <div className="address">
          <p>70 The Street, Kings Lynn, PE32 2DR</p>
          <p>+44(0) 7435 236295</p>
          <p>hello@aaronduke.co.uk</p>
        </div>
        <div className="contact">
          <p>Want to work with me?</p>
          <a href="mailto:hello@aaronduke.co.uk">
            <p className="bold largeText">BRIEF ME.</p>
          </a>
        </div>
      </div>
      <div className="menuPanel"></div>
    </div>
  )
}
export default Menu
