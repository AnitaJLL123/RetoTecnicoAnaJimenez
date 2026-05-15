import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'reports/results.json' }]
  ],

  use: {
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },

  projects: [
    {
      name: 'e2e-chromium',

      testMatch: /.*\.e2e\.spec\.ts/,

      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.pichincha.com',
        viewport:{
          width: 1366,
          height: 768,
        },
        screenshot: 'on',
        video: 'on',
        trace: 'on-first-retry',
      },
    },

    {
      name: 'e2e-firefox',

      testMatch: /.*\.e2e\.spec\.ts/,

      use: {
        ...devices['Desktop Firefox'],

        baseURL: 'https://www.pichincha.com',

        viewport: {
          width: 1366,
          height: 768,
        },

        screenshot: 'on',
        video: 'on',
        trace: 'on-first-retry',
      },
    },

    {
      name: 'e2e-webkit',

      testMatch: /.*\.e2e\.spec\.ts/,

      use: {
        ...devices['Desktop Safari'],

        baseURL: 'https://www.pichincha.com',

        viewport: {
          width: 1366,
          height: 768,
        },

        screenshot: 'on',
        video: 'on',
        trace: 'on-first-retry',
      },
    },

    {
      name: 'api',
      testMatch: /.*\.api\.spec\.ts/,
      use: {
        baseURL: 'https://fakestoreapi.com',
        extraHTTPHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        trace: 'on',
      },
    },
  ],
});