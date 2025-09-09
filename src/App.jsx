import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustedBy from "./components/TrustedBy"

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  return (
    <div className="max-w-[1536px] m-auto relative dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
    </div>
  )
}

export default App