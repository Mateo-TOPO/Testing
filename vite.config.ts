import devServer from '@hono/vite-dev-server'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      devServer({
        entry: 'src/index.tsx'
      })
    ],
    define: {
      'process.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL || 'http://localhost:3002'),
      'process.env.VITE_APP_BASE_URL': JSON.stringify(env.VITE_APP_BASE_URL || 'http://localhost:3001'),
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@shared': resolve(__dirname, 'src/shared'),
        '@modules': resolve(__dirname, 'src/modules')
      }
    }
  }
})
