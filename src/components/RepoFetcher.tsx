import React from 'react'
import LanguageSelector from './LanguageSelector'

const RepoFetcher: React.FC = () => {

  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'Java', value: 'java' },
    { label: 'C#', value: 'csharp' },
  ]
  
  return (
    <div className="repo-fetcher">
      <LanguageSelector languages={languages} />
    </div>
  )
}

export default RepoFetcher 