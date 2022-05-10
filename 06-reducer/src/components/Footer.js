import React, { useContext } from "react"
import DispatchContext from "../DispatchContext"

function Footer() {
  console.log("Imagine our footer is expensive to run")
  const dispatch = useContext(DispatchContext)

  return (
    <footer className="footer">
      <p>
        This is the footer. <button onClick={() => dispatch({ type: "changeSize", value: 30 })}>Make the text 30px but leave the color the same</button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "incrementLikes" })}>Like The Page</button>
      </p>
    </footer>
  )
}

export default React.memo(Footer)
