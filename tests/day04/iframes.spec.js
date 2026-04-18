import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/iframe");
  });

  test("Iframe", async ({ page }) => {
    let popup = page.locator("//div[@role='alert']/button");
    await popup.click();

    let iframe01 = page.frameLocator("//iframe[@id='mce_0_ifr']");
    let textAreaInTheFrame = iframe01.locator("//body[@id='tinymce']");
    textAreaInTheFrame.press("Control+A", "BackSpace");

    //await textAreaInTheFrame.clear(); //! Clear text area for freash start
    //await textAreaInTheFrame.fill("Hello World, Hello Cydeo!!");
  });
});
