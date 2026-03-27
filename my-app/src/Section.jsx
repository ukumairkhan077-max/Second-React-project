import { useState } from "react"
import memeImages from "./memeimg"

function Section() {

  const [text, setText] = useState({
    toptext: "",
    bottomtext: ""
  })

  const [image, setImage] = useState(memeImages[0].url)

  function handlechange(e) {
    const { name, value } = e.target

    setText({
      ...text,
      [name]: value
    })
  }

  function getNewMeme() {
    const random = Math.floor(Math.random() * memeImages.length)
    setImage(memeImages[random].url)
  }

  return (
    <div className="form">

      <div className="inputs">

        <input
          type="text"
          name="toptext"
          placeholder="Top text"
          value={text.toptext}
          onChange={handlechange}
        />

        <input
          type="text"
          name="bottomtext"
          placeholder="Bottom text"
          value={text.bottomtext}
          onChange={handlechange}
        />

      </div>

      <button onClick={getNewMeme}>
        Get a new meme image 🖼
      </button>

      <div
        className="sectionimg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2 className="meme-text top">{text.toptext}</h2>
        <h2 className="meme-text bottom">{text.bottomtext}</h2>
      </div>

    </div>
  )
}

export default Section