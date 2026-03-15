import { defineConfig } from "vite";

export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
  const isCloudflarePages = process.env.CF_PAGES === "1";

  return {
    base: isGitHubPages && !isCloudflarePages ? "/TIF/" : "/",
  };
});
