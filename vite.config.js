import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000, // Use the PORT env variable or default to 3000
    host: '0.0.0.0', // Listen on all interfaces
  },
});
