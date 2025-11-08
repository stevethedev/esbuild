import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-config-prettier";

export default tseslint.config([
  js.configs.recommended,
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.moon/**"],
  },
  eslintPluginPrettier,
]);
