import FavoriteSites from "./component/FavoriteSites"
import Profile from "./component/Profile"
import Gallery from "./component/Gallery"
import StateAssignmentOne from "./component/StateAssignmentOne"
import StateAssignmentTwo from "./component/StateAssignmentTwo"
import "../src/styles/style.css"

function App() {

  return (
    <div className="App">
      <FavoriteSites/>
      <Profile/>
      <Gallery/>
      <StateAssignmentOne/>
      <StateAssignmentTwo/>
    </div>
  )
}

export default App
