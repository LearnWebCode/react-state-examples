import React from "react"
import OurContext from "../OurContext"
import DispatchContext from "../DispatchContext"

function Sidebar(props) {
  const state = React.useContext(OurContext)
  const dispatch = React.useContext(DispatchContext)

  return (
    <div className="sidebar">
      <input type="text" value={state.size} onChange={e => dispatch({ type: "changeSize", value: e.target.value })} />
      <input type="text" value={state.color} onChange={e => dispatch({ type: "changeColor", value: e.target.value })} />
      <button
        onClick={() => {
          dispatch({ type: "changeColorAndSize", value: { color: "pink", size: 20 } })
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  )
}

export default Sidebar
