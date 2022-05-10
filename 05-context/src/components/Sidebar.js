import React, { useContext } from "react"
import OurContext from "../OurContext"

function Sidebar(props) {
  const ourObject = useContext(OurContext)

  return (
    <div className="sidebar">
      <input type="text" onChange={e => ourObject.setColor(e.target.value)} value={ourObject.color} />
      <input type="text" onChange={e => ourObject.setSize(e.target.value)} value={ourObject.size} />
      <button
        onClick={() => {
          ourObject.setColor("pink")
          ourObject.setSize(20)
        }}
      >
        Make the text 20px and pink
      </button>
    </div>
  )
}

export default Sidebar
