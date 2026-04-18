import {test,expect} from "@playwright/test"

test("@env-test Testing envirement variable", async ({page})=>{

    console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
    console.log(`Username is ${process.env.PRACTICE_PASSWORD}`);
    

});



test("@env-test Bypass authentication by encoding the credentials based64 fromat", async ({
  page,
}) => {
  let encodedCredential = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`,
  ).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });

  await page.goto("https://@the-internet-5chk.onrender.com/basic_auth");
  let actualText = page.locator("//div[@id='content']//h3");
  await expect(actualText).toContainText("Basic Auth");
});