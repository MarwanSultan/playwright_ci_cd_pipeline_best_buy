// fixtures/bestbuy.fixture.ts
import { test as base } from "@playwright/test";

export const test = base.extend<{}>({
  page: async ({ page }, use) => {
    // Navigate to Best Buy homepage before each test
    await page.goto("https://www.bestbuy.com/");
    
    await use(page);
    await page.close();
  },
});

export { expect } from "@playwright/test";
