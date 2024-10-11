const { defineConfig } = require("eslint-define-config");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");
const reactRefreshPlugin = require("eslint-plugin-react-refresh");

module.exports = defineConfig([
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin,
      "react-refresh": reactRefreshPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          tsx: true,
        },
      },
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]);