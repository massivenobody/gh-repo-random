import { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import { Octokit } from 'octokit'

const octokit = new Octokit();

function RepoFetcher() {
  const [selectedLanguage, setSelectedLanguage] = useState<{label: string, value: string} | null>(null)
  const [isLoading, setIsLoading] = useState(false);

  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'Java', value: 'java' },
    { label: 'C#', value: 'csharp' },
  ]

  function handleLanguageChange(option: {label: string, value: string} | null) {
    setSelectedLanguage(option)
    fetchRandomRepo();
  }

  async function fetchRandomRepo() {
    if (!selectedLanguage) return;

    setIsLoading(true);
    try {
      const randomPage = Math.floor(Math.random() * 100) + 1;
      
      const { data } = await octokit.request('GET /search/repositories', {
        q: `language:${selectedLanguage.value}`,
        sort: 'stars',
        order: 'desc',
        per_page: 1,
        page: randomPage,
      });

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
        {isLoading ? 'Loading...' : 'Please select a language'}
      </div>
    </div>
  )
}

export default RepoFetcher 