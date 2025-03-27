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
  {
    ...js.configs.recommended, // Подключаем базовые правила для JS
    languageOptions: {
      ecmaVersion: "latest", // Поддержка всех современных возможностей JS
      sourceType: "module", // Разрешает использовать import/export
    },
    rules: {
      "no-console": "warn", // Предупреждение при console.log
      "no-alert": "warn", // Предупреждение при alert()
    },
  },
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
      ecmaVersion: "latest", // Поддержка современных возможностей JS
      sourceType: "module", // Поддержка ES-модулей
      globals: {
        // alert: "readonly", // Разрешаем использовать alert
        // console: "readonly", // Разрешаем использовать console
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
