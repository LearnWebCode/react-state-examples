import React, { useState } from "react"
import { createRoot } from "react-dom/client"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"

function App() {
  const [size, setSize] = useState(15)
  const [color, setColor] = useState("skyblue")
  const [likes, setLikes] = useState(3)

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
      <Sidebar color={color} size={size} setColor={setColor} setSize={setSize} />
      <MainArea size={size} color={color} />
      <Footer setSize={setSize} setLikes={setLikes} />
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
