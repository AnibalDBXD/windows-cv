import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    target: ['esnext'],
    ssr: true,
    outDir: 'dist/server',
    rollupOptions: {
      input: 'src/simple-server.tsx',
      output: {
        format: 'cjs',
      },
    },
  },
});
