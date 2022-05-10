import React, { useReducer, useContext } from "react"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function Sidebar() {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)

  function handle(e) {
    dispatch({ type: "changeColor", value: e.target.value })
  }

  function handleSize(e) {
    dispatch({ type: "changeSize", value: e.target.value })
  }

  function custom() {
    dispatch({ type: "changeColorAndSize", value: { color: "pink", size: 20 } })
  }

  return (
    <div className="sidebar">
      <input onChange={handle} type="text" value={state.color} />
      <input onChange={handleSize} type="text" value={state.size} />
      <button onClick={custom}>Make the text 20px and pink</button>
    </div>
  )
}

export default Sidebar
