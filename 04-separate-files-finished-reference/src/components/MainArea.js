import React from "react"

function MainArea(props) {
  return (
    <div className="main-area" style={{ color: props.color, fontSize: `${props.size}px` }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
    </div>
  )
}

export default MainArea
