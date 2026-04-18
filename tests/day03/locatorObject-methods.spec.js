import { test } from "@playwright/test";

test.describe("Test Group", () => {
  //! Test Group

  test.beforeEach("Url", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    let expectedUrl = await page.title();
    console.log(expectedUrl);


  });

  test("Check(): checks the radio buttons and check boxed if they haven't been checked yet", async ({
    page,
  }) => {
    //let checkBoxesLink = page.locator("//a[@href='/checkboxes']");
    let checkBoxesLink = page.getByText("Checkboxes");
    await checkBoxesLink.click();

    let checkBox01 = page.locator("//input[@id='box1']");
    await checkBox01.check();
  });

  test("UnCheck(): checks the radio buttons and check boxed if they haven't been checked yet", async ({
    page,
  }) => {
    let checkBoxesLink = page.getByText("Checkboxes");
    await checkBoxesLink.click();

    let checkBox02 = page.locator("//input[@id='box2']");
    await checkBox02.uncheck();
  });

  test("SelectOption", async ({ page }) => {
    let dropDownModele = page.getByText("Dropdown");
    await dropDownModele.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    // await simpleDropdown.selectOption("1"); //! select by the value
    //await simpleDropdown.selectOption({ label: "Option 1" }); //! select by text
    await simpleDropdown.selectOption({ index: 1 }); //! select by index
  });

/*  test.afterEach("Timer", async ({ page }) => {
    await page.waitForTimeout(2000);
  });
  */
});
