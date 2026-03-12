import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'node:child_process'

function getLatestCommitDate() {
  try {
    return execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  } catch {
    return ''
  }
}

const latestCommitDate = getLatestCommitDate()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  define: {
    'import.meta.env.VITE_LAST_COMMIT_DATE': JSON.stringify(latestCommitDate),
  },
})
