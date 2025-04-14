import './App.css'
import githubLogo from './assets/github.svg'
import RepoFetcher from './components/RepoFetcher'

function App() {

  return (
    <div className="w-85/100 max-w-[500px] mx-auto text-center py-10">
      <div className="flex justify-center items-center gap-4 mb-4">
        <img className='w-[50px] h-[50px]' src={githubLogo} alt="GitHub Logo" />
        <h1 className='text-2xl font-bold'>Get Random GitHub Repo</h1>
      </div>
      <RepoFetcher />
    </div>
  )
}

export default App