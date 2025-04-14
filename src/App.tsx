import Header from "./components/Header"
import RepoFetcher from "./components/RepoFetcher"
import './App.css'

function App() {
  return (
    <div className="w-85/100 max-w-[500px] mx-auto text-center py-10">
      <Header />
      <RepoFetcher />
    </div>
  )
}

export default App