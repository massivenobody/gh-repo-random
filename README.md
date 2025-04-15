# Random GitHub Repo Explorer

A React + TypeScript application that helps users discover random GitHub repositories based on programming languages. Perfect for finding new projects to contribute to or learning from different codebases.

![GitHub Logo](./src/assets/github.svg)

## Features

- 🔍 Search repositories by programming language
- ⭐ View repository stats (stars, forks, issues)
- 🎨 Language-specific color coding
- 🔄 Random repository selection
- 🚦 Rate limit handling
- 💫 Modern UI with shadcn/ui components (WIP)
- 🎨 Customizable theme support with Tailwind CSS (coming soon)
- 📱 Responsive design using Tailwind's utility classes (WIP)

## Tech Stack

- React 19
- TypeScript
- Vite
- Octokit (GitHub API client)
- shadcn/ui (Radix UI + Tailwind CSS)
- React Icons

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/gh-repo-random.git
cd gh-repo-random
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Future Development

### 1. Code Architecture

- ✅ Implement GitHubService class with singleton pattern for better API management
- ✅ Add TypeScript interfaces and proper error handling
- 🔲 Create custom hooks for data fetching logic
- ✅ Reorganize project structure (`/api`, `/hooks`, `/types`, `/utils`)
- 🔲 Migrate to Tailwind CSS v4

### 2. Features & UX

- 🔲 Implement shadcn/ui components:
  - ❌ Replace React Select with shadcn/ui Select
  - 🔲 Replace Select with Responsive Combobox (due to performance reasons)
    - 🔲 Drawer for mobile
    - 🔲 Popover for desktop
  - 🔲 Add shadcn/ui Card for repo display
  - 🔲 Implement shadcn/ui Skeleton for loading states
  - 🔲 Add shadcn/ui Toast for notifications
  - ✅ Use shadcn/ui Button for actions
- 🔲 Support dark/light theme with shadcn/ui theming
- 🔲 Add authentication with GitHub OAuth for higher rate limits
- 🔲 Implement data caching to prevent unnecessary API calls
- 🔲 Add repository search history and favorites

### 3. Testing & Quality

- 🔲 Add unit tests
- 🔲 Add component testing with shadcn/ui

### 4. Accessibility

- 🔲 Built-in accessibility with shadcn/ui components
- 🔲 Add accessibility testing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- GitHub API
- [shadcn/ui](https://ui.shadcn.com/) for modular, accessible components
- [kamranahmedse/githunt](https://github.com/kamranahmedse/githunt) for languages data
- [ozh/github-colors](https://github.com/ozh/github-colors) for language colors
