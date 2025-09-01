import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/React_CMS_article_editor_project/",
  plugins: [react()],
})
