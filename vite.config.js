import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const repositoryName = env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  const isGithubActions = env.GITHUB_ACTIONS === 'true';

  return {
    base: isGithubActions && repositoryName ? `/${repositoryName}/` : '/',
    plugins: [react()],
  };
});
