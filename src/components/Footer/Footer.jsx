import "./Footer.sass"

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="contact">
        <p>Want to contact?</p>
        <a href="mailto:hello@aaronduke.co.uk">
          <p className="bold largeText">EMAIL ME.</p>
        </a>
      </div>
      <div className="address">
        <p>+44(0) 7435 236295</p>
        <p>hello@aaronduke.co.uk</p>
      </div>
      <div className="logo">
        <img alt="" src="" />
      </div>
    </footer>
  )
}

export default Footer
