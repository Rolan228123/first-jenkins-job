import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // test codes
  await page.goto("https://www.google.com");
  //await page.waitForTimeout(3000);

  //let searchBox = page.locator("//textarea[@class='gLFyf']");
  //let searchBox = await page.$$("//textarea[@class='gLFyf']");
  //let searchBox = page.locator("//textarea[@name='q']");
  let searchBox = page.locator("textarea[jsname='yZiJbe'][id='APjFqb']");

  //await searchBox.type("CYDEO");
  await searchBox.fill("CYDEO");
 // await page.waitForTimeout(3000);

  await searchBox.press("Enter");
  //await page.waitForTimeout(3000);
});


/*
 //textarea[@class='gLFyf']
*/
