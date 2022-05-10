import React, { useContext } from "react"
import NamesContext from "../NamesContext"

function ExtraFooter() {
  console.log("Imagine this function is expensive to run.")
  const names = React.useContext(NamesContext)

  return (
    <div>
      <p>Cat Name: {names.catName}</p>
      <p>Dog Name: {names.dogName}</p>
    </div>
  )
}

export default React.memo(ExtraFooter)
