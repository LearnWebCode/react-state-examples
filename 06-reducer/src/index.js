import React, { useReducer } from "react"
import { createRoot } from "react-dom/client"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"

function App() {
  const initialState = {
    likes: 3,
    color: "skyblue",
    size: 16
  }

  function ourReducerFunction(state, action) {
    switch (action.type) {
      case "incrementLikes":
        return { ...state, likes: state.likes + 1 }
      case "changeColorAndSize":
        return { ...state, color: action.value.color, size: action.value.size }
      case "changeColor":
        return { ...state, color: action.value }
      case "changeSize":
        return { ...state, size: action.value }
    }
  }

  const [state, dispatch] = useReducer(ourReducerFunction, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="grid-parent">
          <div className="header">
            <h1>Welcome To Our App</h1>
            <p>
              The current size is {state.size} and the current color is {state.color}.
            </p>
            <p>
              This page has been liked <strong>{state.likes}</strong> times.
            </p>
          </div>
          <Sidebar />
          <MainArea />
          <Footer />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
