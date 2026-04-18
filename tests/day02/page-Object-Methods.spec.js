import { test } from "@playwright/test";

//goto();, page.title();
test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
  //await page.waitForTimeout(3000);

  let actualTitle = await page.title();
  let expectedTitle = "Practice";
  console.log(actualTitle);
});

//page.url();
test("Getting the curent url of the page", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
 // await page.waitForTimeout(3000);

  let actualUrl = await page.url();
  console.log(actualUrl);
});

//page.setViewportSize({ width: 1680, height: 1050 })
test("Set the window size", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
  //await page.waitForTimeout(3000);

  //await page.setViewportSize({ width: 1850, height: 1050 });
  //await page.waitForTimeout(3000);

});
