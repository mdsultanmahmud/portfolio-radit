import Banner from "./components/Banner/Banner"
import Certificate from "./components/Certificate/Certificate"
import Project from "./components/Project/Project"
import Work from "./components/Work/Work"

function App() {
  return (
    <div className="flex gap-2">
      <div className="min-w-[240px] min-h-screen" style={{ borderRight: "8px solid white" }}>
        <p>Portfolio part</p>
      </div>
      <div>
          <Banner/>
          <Work/>
          <Project/>
          <Certificate/>
      </div>
    </div>
  )
}

export default App
