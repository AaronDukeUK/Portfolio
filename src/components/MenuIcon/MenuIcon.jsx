import "./MenuIcon.sass"

const MenuIcon = ({ open, setOpen }) => {
  return (
    <div
      className="menuIconContainer"
      open={open}
      onClick={() => setOpen(!open)}
      aria-label="Navigation Menu"
    >
      <div style={{ transform: `${open ? "rotate(45deg)" : "rotate(0)"}` }} />
      <div
        style={{
          transform: `${open ? "translateX(20px)" : "translateX(0)"}`,
          opacity: `${open ? "0" : "1"}`,
        }}
      />
      <div style={{ transform: `${open ? "rotate(-45deg)" : "rotate(0)"}` }} />
    </div>
  )
}

export default MenuIcon
