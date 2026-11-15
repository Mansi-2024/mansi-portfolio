import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "portfolio-next/**",
      "_legacy_vite_backup/**",
      ".next/**",
      "node_modules/**",
      "dist/**",
      "public/**",
      ".agents/**"
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off",
    },
  }
);
