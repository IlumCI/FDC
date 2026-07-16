import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// FDC is a fully client-side, offline-capable PWA. The Workbox config below
// precaches the app shell and all authored curriculum so lessons work with no
// network. No backend is involved anywhere in this build.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'FDC — Five Degrees Celsius',
        short_name: 'FDC',
        description:
          'University-level business & economics for engineers. Compile a company, one lesson at a time.',
        theme_color: '#0b1020',
        background_color: '#0b1020',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff,woff2}'],
        // The Anthropic API is never precached — AI is a live, opt-in call.
        navigateFallbackDenylist: [/^\/api/],
      },
    }),
  ],
})
