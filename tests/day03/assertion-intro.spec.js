import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach("Url", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    await expect(page).toHaveTitle("Practice"); //!Title Verification

    expect(await page.title()).toBe("Practice");
  });

  test("Verify checkBoxes are cheked", async ({ page }) => {
    await page.getByText("Checkboxes").click();

    let checkBox1 = page.locator("#box1");
    let checkBox2 = page.locator("#box2");

    await checkBox1.check();
    await checkBox2.check();

    await expect(checkBox1).toBeChecked(); //!Check Box is Cheked Verification
    await expect(checkBox2).toBeChecked();

    //--------------------------------

    expect(await checkBox1.isChecked()).toBeTruthy();
    expect(await checkBox2.isChecked()).toBeTruthy();
  });

  test("Verify UncheckBoxes are cheked", async ({ page }) => {
    await page.getByText("Checkboxes").click();

    let checkBox1 = page.locator("#box1");
    let checkBox2 = page.locator("#box2");

    await checkBox1.uncheck();
    await checkBox2.uncheck();

    await expect(checkBox1).not.toBeChecked(); //!UnCheck Box is Cheked Verification
    await expect(checkBox2).not.toBeChecked(); //! we is not for negative verifications
    //--------------------------------
    expect(await checkBox1.isChecked()).toBeFalsy();
    expect(await checkBox2.isChecked()).toBeFalsy();
  });
  test("Verify visible text of the element", async ({ page }) => {
    let headerElement = page.locator("//span[.='Test Automation Practice']");
    await expect(headerElement).toHaveText("Test Automation Practice"); //!Verification of the Text

    let actualtext = await headerElement.innerText();
    expect(actualtext).toEqual("Test Automation Practice");
  });
});
