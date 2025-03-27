import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import VueRouter from "unplugin-vue-router/vite";
import typescript from "@rollup/plugin-typescript";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/learn-js/" : "/",
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueDevTools(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".vue", ".js", ".json"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
