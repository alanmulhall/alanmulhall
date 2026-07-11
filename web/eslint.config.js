import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import sonarjs from "eslint-plugin-sonarjs";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { "react-hooks": reactHooks, sonarjs },
    rules: {
      ...reactHooks.configs.recommended.rules,
      curly: ["error", "all"],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      // Maintainability gates (replacing the hosted qlty checks)
      complexity: ["error", 12],
      "sonarjs/cognitive-complexity": ["error", 15],
      "sonarjs/no-identical-functions": "error",
      "sonarjs/no-collapsible-if": "error",
      "sonarjs/no-duplicated-branches": "error",
    },
  },
  {
    files: ["scripts/**"],
    languageOptions: { globals: globals.node },
  },
  prettier,
  {
    ignores: ["build/", ".react-router/", "node_modules/"],
  }
);
