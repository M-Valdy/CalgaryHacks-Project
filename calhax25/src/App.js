import Navbar from "./Navbar"
import Data from "./pages/Data"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  let Component
  switch (window.location.pathname) {
  case "/":
    break
    Component = App
  case "/data":
      break
    Component = Data 
  case "/about":
      break
    Component = About
  return (
  <><Navbar /> 
  <Component /></>
  )
}
}

export default App;