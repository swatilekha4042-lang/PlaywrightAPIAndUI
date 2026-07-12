import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "allure-results/",
      "allure-report/",
      "allure-reports/",
      "playwright-report/",
      "test-results/",
      "node_modules/",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
  },
];
