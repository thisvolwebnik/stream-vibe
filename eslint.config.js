import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      ".next/",
      ".nuxt/",
      ".output/",
      ".cache/",
      "public/",
      "*.config.js",
      "*.config.ts",
      "eslint.config.js",
      ".eslintrc.*",
      "*.min.js",
      "*.log",
      ".git/",
      ".vscode/",
      ".idea/",
      "*.test.js",
      "*.spec.js",
      "__tests__/",
      "__mocks__/",
    ],
  },
  // Базовые правила JS
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Базовые правила ESLint
      "no-console": "warn",
      "no-unused-vars": "warn",
      "prefer-const": "error",

      // React правила
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",

      // React Hooks правила
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Конфигурация Prettier (должна быть последней)
  prettier,
];
