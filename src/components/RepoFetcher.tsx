import LanguageSelector from './LanguageSelector'

function RepoFetcher() {

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
      <div className="search-result">
        Please select a language
      </div>
    </div>
  )
}

export default RepoFetcher 