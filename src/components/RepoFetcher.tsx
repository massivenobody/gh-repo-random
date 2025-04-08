import { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import { Octokit } from 'octokit'

const octokit = new Octokit();

function RepoFetcher() {
  const [selectedLanguage, setSelectedLanguage] = useState<{label: string, value: string} | null>(null)
  const [isLoading, setIsLoading] = useState(false);
  const [repo, setRepo] = useState<any>(null);

  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'Java', value: 'java' },
    { label: 'C#', value: 'csharp' },
  ]

  function handleLanguageChange(option: {label: string, value: string} | null) {
    setSelectedLanguage(option)
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
      console.log(data.items[0]);
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
            ? <div className="repo-info">
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <p>Language: {repo.language}</p>
                <p>Stars: {repo.stargazers_count}</p>
                <p>Forks: {repo.forks_count}</p>
                <p>Open Issues: {repo.open_issues_count}</p>
                <p>URL: {repo.html_url}</p>
              </div>
          : 'Please select a language'}
      </div>
    </div>
  )
}

export default RepoFetcher 