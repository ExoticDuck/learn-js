import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser"; // 🔥 Импортируем сам парсер!

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules/", "dist/"], // Игнорируем ненужные файлы
  },
  js.configs.recommended, // Базовые правила JavaScript
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser, // 🔥 Vue ESLint парсер
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tsParser, // Разрешает TypeScript в .vue файлах
        extraFileExtensions: [".vue"],
      },
    },
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs["vue3-essential"].rules, // Используем правила Vue без "extends"
      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: { normal: "never", void: "always", component: "always" },
        },
      ],
    },
  },
];
