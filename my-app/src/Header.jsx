import headerimg from "./assets/headerimg.png"
import Section from "./Section"

function Header() {
  return (
    <div className="container">

      <div className="mainheader">

        <div className="header">
          <img src={headerimg} alt="logo" />
          <h3>Meme Generator</h3>
        </div>

        <div className="header2">
          <h3>React Course - Project 3</h3>
        </div>

      </div>

      <Section />

    </div>
  )
}

export default Header