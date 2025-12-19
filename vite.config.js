import { writeFileSync } from 'fs'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ai-sdd/',
  build: {
    outDir: 'dist'
  },
  plugins: [
    {
      name: 'create-nojekyll',
      closeBundle() {
        writeFileSync('dist/.nojekyll', '')
      }
    }
  ]
})
