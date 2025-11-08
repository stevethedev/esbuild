import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    ...js.configs.recommended,
    plugins: { js },
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: { ...globals.browser, ...globals.node }
    },
  },
  tseslint.configs.recommended,
  {
        files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
    ignores: ["**/package-lock.json", "**/tsconfig.*.json", "**/tsconfig.json"],
  },
  {
    files: ["**/*.jsonc", "**/*.tsconfig.*.json", "**/tsconfig.json"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.moon/**"],
  },
  eslintPluginPrettier,
]);
