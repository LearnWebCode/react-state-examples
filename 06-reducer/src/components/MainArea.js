import React from "react"
import OurContext from "../OurContext"

function MainArea(props) {
  const state = React.useContext(OurContext)

  return (
    <div className="main-area" style={{ color: state.color, fontSize: `${state.size}px` }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
    </div>
  )
}

export default MainArea
