import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/diverseEnv.test.ts"],
  timeout: 5000,
  reporter: "html",
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  globalSetup: "utils/globalSetup.ts"
};

export default config;