import './App.css'
import githubLogo from './assets/github.svg'

function App() {

  return (
    <>
      <div className="title">
        <img src={githubLogo} alt="GitHub Logo" />
        <h1>Get Random GitHub Repo</h1>
      </div>
    </>
  )
}

export default App