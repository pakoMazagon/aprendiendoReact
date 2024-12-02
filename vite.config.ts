import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  plugins: [react(),
    {
      ...NodeGlobalsPolyfillPlugin({
        process: true,
        buffer: true,
      }),
      enforce: 'pre',
    },
  ],
  server: {
    host: true, // Exponer en todas las interfaces
    port: 5173,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});
