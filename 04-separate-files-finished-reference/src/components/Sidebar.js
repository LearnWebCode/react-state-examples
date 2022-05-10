import React from "react"

function Sidebar(props) {
  return (
    <div className="sidebar">
      <input type="text" onChange={e => props.setColor(e.target.value)} value={props.color} />
      <input type="text" onChange={e => props.setSize(e.target.value)} value={props.size} />
      <button
        onClick={() => {
          props.setColor("pink")
          props.setSize(20)
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  )
}

export default Sidebar
