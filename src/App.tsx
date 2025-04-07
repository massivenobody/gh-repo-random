import './App.css'
import githubLogo from './assets/github.svg'
import RepoFetcher from './components/RepoFetcher'

function App() {

  return (
    <>
      <div className="title">
        <img src={githubLogo} alt="GitHub Logo" />
        <h1>Get Random GitHub Repo</h1>
        <RepoFetcher />
      </div>
    </>
  )
}

export default App