import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // test codes
  await page.goto("https://www.google.com");
 // await page.waitForTimeout(3000);
});
