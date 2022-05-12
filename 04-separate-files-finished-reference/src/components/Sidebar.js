import React from "react"

function Sidebar(props) {
  return (
    <div className="sidebar">
      <input type="text" value={props.size} onChange={e => props.setSize(e.target.value)} />
      <input type="text" value={props.color} onChange={e => props.setColor(e.target.value)} />
      <button
        onClick={() => {
          props.setSize(20)
          props.setColor("pink")
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  )
}

export default Sidebar
