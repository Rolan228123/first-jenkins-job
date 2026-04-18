import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach("Url", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("innerText(); - retrives visible text of element", async ({ page }) => {
    let headerElement = page.locator("//span[@class='h1y']");
    let actualText = await headerElement.innerText(); //! Print the vibile text
    console.log(actualText);
  });

  test("inputValue(); - only works with <input> tag, <textarea>, <select>,retrives the input value", async ({
    page,
  }) => {
    let inputButton = page.getByText("Inputs");
    await inputButton.click();

    let inputBox = page.locator("//input[@type='number']");
    await inputBox.fill("123");
    let actualInput =  await inputBox.inputValue(); //! retern value as sring
    console.log(actualInput);

  });

  test("getAttribute(); - retrives the atribute value", async ({ page }) => {
    let elemtAB = page.locator("text='A/B Testing'");
    let elemntAtrubite =  await elemtAB.getAttribute("href");
    console.log(elemntAtrubite);


  });
});
