import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import emailHandler from './api/send-mail.js'

function emailDevPlugin() {
  return {
    name: 'email-dev-plugin',
    configureServer(server) {
      server.middlewares.use('/api/send-mail', async (req, res) => {
        try {
          await emailHandler(req, res)
        } catch (err) {
          console.error('[DEV EMAIL ERROR]:', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: 'Internal Server Error' }))
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), emailDevPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3001,
    allowedHosts: true,
  }
})
