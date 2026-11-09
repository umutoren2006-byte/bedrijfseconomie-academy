import parser from "@typescript-eslint/parser";
import plugin from "@typescript-eslint/eslint-plugin";
export default [{ ignores: ["dist/**","node_modules/**"] }, { files: ["**/*.{ts,tsx}"], languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true }, sourceType: "module" } }, plugins: { "@typescript-eslint": plugin }, rules: { ...plugin.configs.recommended.rules } }];
