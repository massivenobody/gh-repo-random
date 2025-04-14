import { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import GitHubService from '../api/GitHubService'
import { FaStar, FaCodeFork, FaCircle } from 'react-icons/fa6'
import { FaExclamationCircle } from 'react-icons/fa'
import languages from '../data/languages'
import colors from '../data/colors'
import { GitHubRepo } from '../types/github'
import { LanguageOption } from '../types/language'

function RepoFetcher() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleLanguageChange(option: LanguageOption | null) {
    setSelectedLanguage(option);
    fetchRandomRepo(option);
  }

  async function fetchRandomRepo(option: LanguageOption | null) {
    if (!option) return;

    setIsLoading(true);
    setErrorMessage(null);
    try {
      const gitHubService = GitHubService.getInstance();
      const randomRepo = await gitHubService.getRandomRepo(option.value);
      setRepo(randomRepo);
    } catch (error: any) {
      console.error('Error fetching repository:', error);
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="repo-fetcher">
      <LanguageSelector
        languages={languages}
        onLanguageChange={handleLanguageChange}
      />
      <div className="search-result">
        {isLoading
          ? 'Loading...'
          : errorMessage ? errorMessage : repo ? (
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-info">
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <div className="repo-info-bar">
                  <div className="stat-item">
                    <FaCircle style={repo.language ? { color: colors[repo.language].color } : {}} /> {repo.language}
                  </div>
                  <div className="stat-item">
                    <FaStar /> {repo.stargazers_count}
                  </div>
                  <div className="stat-item">
                    <FaCodeFork /> {repo.forks_count}
                  </div>
                  <div className="stat-item">
                    <FaExclamationCircle /> {repo.open_issues_count}
                  </div>
                </div>
              </a>
          ) : 'Please select a language'}
      </div>
      <button className="refresh-button" onClick={() => fetchRandomRepo(selectedLanguage)}>Refresh</button>
    </div>
  )
}

export default RepoFetcher 