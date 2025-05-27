// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { dark } from '@clerk/themes'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), clerk({
      appearance: {
        baseTheme: [dark],
      },
  })],

  adapter: node({ mode: "standalone" }),
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
});
