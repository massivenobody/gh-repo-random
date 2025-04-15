import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import GitHubService from "../api/GitHubService";
import { Star, GitFork, CircleAlert, Circle } from "lucide-react";
import { GitHubRepo } from "../types/github";
import { LanguageOption } from "../types/language";
import RefreshButton from "./RefreshButton";
import useLanguageData from "../hooks/useLanguageData";

function RepoFetcher() {
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageOption | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const languages = useLanguageData();
  const circleColor = repo
    ? repo.language
      ? languages.find((language) => language.value === repo.language)?.color
      : "black"
    : "black";

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
      console.error("Error fetching repository:", error);
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="repo-fetcher">
      <LanguageSelector
        languages={languages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <div className="search-result">
        {isLoading ? (
          "Loading..."
        ) : errorMessage ? (
          errorMessage
        ) : repo ? (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-info"
          >
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="repo-info-bar">
              <div className="stat-item">
                <Circle color={circleColor} fill={circleColor} />{" "}
                {repo.language}
              </div>
              <div className="stat-item">
                <Star /> {repo.stargazers_count}
              </div>
              <div className="stat-item">
                <GitFork /> {repo.forks_count}
              </div>
              <div className="stat-item">
                <CircleAlert /> {repo.open_issues_count}
              </div>
            </div>
          </a>
        ) : (
          "Please select a language"
        )}
      </div>
      {repo && (
        <RefreshButton onClick={() => fetchRandomRepo(selectedLanguage)} />
      )}
    </div>
  );
}

export default RepoFetcher;
