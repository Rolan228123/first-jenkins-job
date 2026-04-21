import { test, expect } from "@playwright/test";

test("Bypass authentication by embeding credentials in Url", async ({
  page,
}) => {

  await page.goto("https://admin:admin@the-internet-5chk.onrender.com/basic_auth",);
  await page.waitForTimeout(3000);
  let actualText = page.locator("//div[@id='content']//h3");
  await expect(actualText).toContainText("Basic Auth");
                    //! One way to handle authentication
});


test("Bypass authentication by encoding the credentials based64 fromat", async({page}) => {

let encodedCredential = Buffer.from(
  `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`,
).toString("base64");
await page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredential}`});


  await page.goto("https://@the-internet-5chk.onrender.com/basic_auth");
let actualText = page.locator("//div[@id='content']//h3");
await expect(actualText).toContainText("Basic Auth");
});
