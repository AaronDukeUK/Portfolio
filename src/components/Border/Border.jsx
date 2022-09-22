import { useState } from "react"
import { MenuIcon, Menu, Social } from "../index"

import "./Border.sass"

const Border = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className="border"
        open={open}
        style={{ border: `${open ? "100px solid #fff" : "40px solid #fff"}` }}
      ></div>
      <MenuIcon open={open} setOpen={setOpen} />
      <Menu open={open} />
      <Social />
    </>
  )
}

export default Border
