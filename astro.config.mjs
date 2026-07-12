import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

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
});
