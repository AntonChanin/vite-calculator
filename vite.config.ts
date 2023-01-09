import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lessLoader from 'vite-less-resource-loader';

// https://vitejs.dev/config/

export default defineConfig({
  cssPreprocessOptions: {
    less: {
      plugins: [new lessLoader(['./resources.less'])],
    }
  },
  plugins: [react()],
});
