import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  return (
    <div className="max-w-[1536px] m-auto relative dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App