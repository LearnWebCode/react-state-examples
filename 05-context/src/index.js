import React, { useState, createContext } from "react"
import { createRoot } from "react-dom/client"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"

import OurContext from "./OurContext"

const AnimalNamesContext = createContext()

function App() {
  const [size, setSize] = useState(25)
  const [color, setColor] = useState("skyblue")
  const [likeCount, setLikeCount] = useState(0)
  const [names, setNames] = useState({ catName: "Meowsalot", dogName: "Barksalot" })

  return (
    <AnimalNamesContext.Provider value={names}>
      <OurContext.Provider value={{ color, setColor, size, setSize, likeCount, setLikeCount }}>
        <div className="grid-parent">
          <div className="header">
            <h1>Welcome To Our App</h1>
            <p>
              The current size is {size} and the current color is {color}.
            </p>
            <p>
              This page has been liked <strong>{likeCount}</strong> times.
            </p>
          </div>
          <Sidebar />
          <MainArea />
          <Footer />
          <MemoizedExtraFooter />
        </div>
      </OurContext.Provider>
    </AnimalNamesContext.Provider>
  )
}

const MemoizedExtraFooter = React.memo(ExtraFooter)

function ExtraFooter() {
  const names = React.useContext(AnimalNamesContext)
  console.log("Imagine this function is slow or expensive to run.")

  return (
    <div>
      <p>Cat name: {names.catName}</p>
      <p>Dog name: {names.dogName}</p>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
