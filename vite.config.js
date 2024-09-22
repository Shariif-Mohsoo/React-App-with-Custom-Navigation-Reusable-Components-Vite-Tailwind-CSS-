import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [react()],
  cacheDir: "./node_modules/.vite_cache", // Custom cache directory for faster rebuilds
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true, // Show error overlay in the browser
    },
  },
});
