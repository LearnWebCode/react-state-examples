import React from "react"
import OurContext from "../OurContext"

function Footer(props) {
  const state = React.useContext(OurContext)

  return (
    <footer className="footer">
      <p>
        This is the footer. <button onClick={() => state.setSize(30)}>Make the text 30px but leave the color the same</button>
      </p>
      <p>
        <button onClick={() => state.setLikeCount(prev => prev + 1)}>Like The Page</button>
      </p>
    </footer>
  )
}

export default Footer
