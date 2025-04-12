import { Octokit } from 'octokit';

class GitHubService {
  private client: Octokit;
  private static instance: GitHubService;

  private constructor() {
    this.client = new Octokit();
  }

  static getInstance() {
    if (!GitHubService.instance) {
      GitHubService.instance = new GitHubService();
    }
    return GitHubService.instance;
  }
    
  async getRandomRepo(language: string) {
    const randomPage = Math.floor(Math.random() * 100) + 1;

    // Try fetching a random repo from GitHub using the Octokit client
    try {
      const { data } = await this.client.request('GET /search/repositories', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
      },
      q: `language:${language}`,
      sort: 'stars',
      order: 'desc',
      per_page: 1,
        page: randomPage,
      });

      return data.items[0];
    } catch (error: any) {
      // Handle rate limit errors
      if (error.status === 403) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else {
        throw new Error('An error occurred. Please try again later.');
      }
    }
  }
}

export default GitHubService;
