import { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import { Octokit } from 'octokit'
import { FaStar, FaCodeFork, FaCircle } from 'react-icons/fa6'
import { FaExclamationCircle } from 'react-icons/fa'
import languages from '../data/languages'

const octokit = new Octokit();

function RepoFetcher() {
  const [selectedLanguage, setSelectedLanguage] = useState<{label: string, value: string} | null>(null)
  const [isLoading, setIsLoading] = useState(false);
  const [repo, setRepo] = useState<any>(null);

  function handleLanguageChange(option: {label: string, value: string} | null) {
    setSelectedLanguage(option);
    fetchRandomRepo(option);
  }

  async function fetchRandomRepo(option: {label: string, value: string} | null) {
    if (!option) return;

    setIsLoading(true);
    try {
      const randomPage = Math.floor(Math.random() * 100) + 1;
      
      const { data } = await octokit.request('GET /search/repositories', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        q: `language:${option.value}`,
        sort: 'stars',
        order: 'desc',
        per_page: 1,
        page: randomPage,
      });

      setRepo(data.items[0]);
    } catch (error) {
      console.error('Error fetching repository:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="repo-fetcher">
      <LanguageSelector
        languages={languages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <div className="search-result">
        {isLoading
          ? 'Loading...'
          : repo
            ? <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-info">
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <div className="repo-info-bar">
                  <div className="stat-item">
                    <FaCircle /> {repo.language}
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
          : 'Please select a language'}
      </div>
      <button className="refresh-button" onClick={() => fetchRandomRepo(selectedLanguage)}>Refresh</button>
    </div>
  )
}

export default RepoFetcher 