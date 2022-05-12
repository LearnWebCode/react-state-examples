import React, { useState } from "react"
import { createRoot } from "react-dom/client"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"

function App() {
  const [size, setSize] = useState(25)
  const [color, setColor] = useState("skyblue")
  const [likeCount, setLikeCount] = useState(0)

  return (
    <div className="grid-parent">
      <div className="header">
        <h1>Welcome To Our App</h1>
        <p>The current size is x and the current color is x.</p>
        <p>
          This page has been liked <strong>0</strong> times.
        </p>
      </div>
      <Sidebar />
      <MainArea />
      <Footer />
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
