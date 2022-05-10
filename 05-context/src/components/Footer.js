import React, { useContext } from "react"
import OurContext from "../OurContext"

function Footer(props) {
  const ourObject = useContext(OurContext)

  return (
    <footer className="footer">
      <p>
        This is the footer. <button onClick={() => ourObject.setSize(30)}>Make the text 30px but leave the color the same</button>
      </p>
      <p>
        <button onClick={() => ourObject.setLikes(prev => prev + 1)}>Like The Page</button>
      </p>
    </footer>
  )
}

export default Footer
