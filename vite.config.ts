import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Ensures that the base path for all resources is the root of the site
  plugins: [react()],
});
