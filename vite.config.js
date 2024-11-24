import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    env({ prefix: "VITE",  mountedPath: "process.env" }) 
  ],
  build: {
    outDir: 'dist', // ビルド出力先をdistに指定
  },
  base: './' // 相対パスを設定
})
