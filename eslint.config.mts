// eslint.config.mts
import js from "@eslint/js";

import { defineConfig } from "eslint/config";

export default defineConfig([
  // Accessibility recommended config

  // Ignore files and folders
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "*.md",
      "next-env.d.ts",
      "*.yml",
    ],
  },

  // -----------------------------
  // JavaScript files
  // -----------------------------
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
    },
    ...js.configs.recommended,
  },

  // -----------------------------
  // TypeScript + React
  // -----------------------------
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {

      "react/prop-types": "off",

      // JSX runtime: no React import needed
      "react/react-in-jsx-scope": "off",


      // Enforce self-closing tags where possible
      "react/self-closing-comp": "error",
    },
  },
]);
