import React, { useReducer, useState, createContext } from "react"
import { createRoot } from "react-dom/client"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"

import OurContext from "./OurContext"
import DispatchContext from "./DispatchContext"

const AnimalNamesContext = createContext()

function ourReducerFunction(state, action) {
  switch (action.type) {
    case "incrementLikes":
      return { ...state, likeCount: state.likeCount + 1 }
    case "changeSize":
      return { ...state, size: action.value }
    case "changeColor":
      return { ...state, color: action.value }
    case "changeColorAndSize":
      return { ...state, color: action.value.color, size: action.value.size }
  }
}

const initialState = {
  size: 25,
  color: "skyblue",
  likeCount: 0
}

function App() {
  const [state, dispatch] = useReducer(ourReducerFunction, initialState)
  const [names, setNames] = useState({ catName: "Meowsalot", dogName: "Barksalot" })

  return (
    <AnimalNamesContext.Provider value={names}>
      <DispatchContext.Provider value={dispatch}>
        <OurContext.Provider value={state}>
          <div className="grid-parent">
            <div className="header">
              <h1>Welcome To Our App</h1>
              <p>
                The current size is {state.size} and the current color is {state.color}.
              </p>
              <p>
                This page has been liked <strong>{state.likeCount}</strong> times.
              </p>
            </div>
            <Sidebar />
            <MainArea />
            <Footer />
            <MemoizedExtraFooter />
          </div>
        </OurContext.Provider>
      </DispatchContext.Provider>
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
