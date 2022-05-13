import React from "react"
import OurContext from "../OurContext"

function Sidebar(props) {
  const state = React.useContext(OurContext)

  return (
    <div className="sidebar">
      <input type="text" value={state.size} onChange={e => state.setSize(e.target.value)} />
      <input type="text" value={state.color} onChange={e => state.setColor(e.target.value)} />
      <button
        onClick={() => {
          state.setSize(20)
          state.setColor("pink")
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  )
}

export default Sidebar
