import React from "react"
import { createRoot } from "react-dom/client"

function App() {
  return (
    <div className="grid-parent">
      <div className="header">
        <h1>Welcome To Our App</h1>
        <p>The current size is x and the current color is x.</p>
        <p>
          This page has been liked <strong>0</strong> times.
        </p>
      </div>
      <div className="sidebar">
        <input type="text" />
        <input type="text" />
        <button>Make the text 20px and pink</button>
      </div>
      <div className="main-area">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
      </div>
      <footer className="footer">
        <p>
          This is the footer. <button>Make the text 30px but leave the color the same</button>
        </p>
        <p>
          <button>Like The Page</button>
        </p>
      </footer>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
