import { useState } from 'react'
import LanguageSelector from './LanguageSelector'

function RepoFetcher() {
  const [selectedLanguage, setSelectedLanguage] = useState<{label: string, value: string} | null>(null)

  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'Java', value: 'java' },
    { label: 'C#', value: 'csharp' },
  ]

  const handleLanguageChange = (option: {label: string, value: string} | null) => {
    setSelectedLanguage(option)
  }
  
  return (
    <div className="repo-fetcher">
      <LanguageSelector
        languages={languages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <div className="search-result">
        Please select a language
      </div>
    </div>
  )
}

export default RepoFetcher 