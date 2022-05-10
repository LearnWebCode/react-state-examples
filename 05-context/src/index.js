import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import OurContext from "./OurContext"
import NamesContext from "./NamesContext"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"
import ExtraFooter from "./components/ExtraFooter"

function App() {
  const [size, setSize] = useState(15)
  const [color, setColor] = useState("skyblue")
  const [likes, setLikes] = useState(3)
  const [names, setNames] = useState({ catName: "Meowsalot", dogName: "Barksalot" })

  return (
    <NamesContext.Provider value={names}>
      <OurContext.Provider value={{ size, setSize, color, setColor, likes, setLikes }}>
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
          <Sidebar />
          <MainArea />
          <Footer />
          <ExtraFooter />
        </div>
      </OurContext.Provider>
    </NamesContext.Provider>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
