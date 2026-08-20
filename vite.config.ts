import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/F.R.C-Security-Services-React/',

  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
})