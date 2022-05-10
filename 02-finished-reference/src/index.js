import React, { useState } from "react"
import { createRoot } from "react-dom/client"

function App() {
  const [size, setSize] = useState(14)
  const [color, setColor] = useState("skyblue")
  const [likes, setLikes] = useState(3)

  function ourCustomHandler() {
    setSize(20)
    setColor("pink")
  }

  return (
    <div className="grid-parent">
      <div className="header">
        <h1>Welcome To Our App</h1>
        <p>
          The current size is {size} and the current color is {color}.
        </p>
        <p>
          This page has been liked <strong>{likes}</strong> times.
        </p>
      </div>
      <div className="sidebar">
        <input type="text" onChange={e => setColor(e.target.value)} value={color} />
        <input type="text" onChange={e => setSize(e.target.value)} value={size} />
        <button onClick={ourCustomHandler}>Make the text 20px and pink</button>
      </div>
      <div className="main-area" style={{ color: color, fontSize: `${size}px` }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
      </div>
      <footer className="footer">
        <p>
          This is the footer. <button onClick={() => setSize(30)}>Make the text 30px but leave the color the same</button>
        </p>
        <p>
          <button onClick={() => setLikes(prev => prev + 1)}>Like The Page</button>
        </p>
      </footer>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
