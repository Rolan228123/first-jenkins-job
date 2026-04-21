import { test } from "@playwright/test";

test.describe("Practice.cydeo @smoke", () => {//!Practice Cydeo

  test.beforeEach("Navigating to the page", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test.afterEach("Timer of 2 sec", async ({ page }) => {    //! Timer of 2 seconed
    await page.waitForTimeout(3000);
  });

  test("Title", async ({ page }) => {//! Test case 01
    let actualTitle = await page.title();
    console.log(`Title = ${actualTitle}`);
  });

  test("Url of the page", async ({ page }) => {//! Test case 02
    let actualUrl = page.url();
    console.log(`Url = ${actualUrl}`);
  });
});
