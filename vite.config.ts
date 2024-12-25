import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // Disable type checking
      babel: {
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            { isTSX: true, allExtensions: true },
          ],
        ],
      },
    }),
  ],
});
