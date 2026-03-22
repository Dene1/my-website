import {defineConfig} from 'vite'

import path from 'path'
import babel from 'vite-plugin-babel';
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  },
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
})