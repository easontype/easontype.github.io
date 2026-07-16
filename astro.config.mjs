import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://aibazhaocat.com",

  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes("/callback"),
    }),
  ],

  adapter: cloudflare()
});