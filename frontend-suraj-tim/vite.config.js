import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BASENAME } from './src/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASENAME,
})
