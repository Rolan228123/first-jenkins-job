import { test, expect } from "@playwright/test";

// * Verify that there are exactly 50 link elemnts with <ul> tag.

// * Verify that each off the 50 link elements within <ul> tag is visible and clicable.

// * Verify that each of the 50 link elements with <ul> tag has a href attribute.

test.describe("Test Group", () => {
let allElements;

  test.beforeEach("Url", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    await expect(page).toHaveTitle("Practice"); //!Title Verification
    expect(await page.title()).toBe("Practice");
     allElements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify that there are exactly 50 link elemnts with <ul> tag", async ({page}) => {
    //let allElements = await page.locator("//ul[@class='list-group']/li/a").all(); //!Return array of elements
    expect(allElements.length).toBe(50);

    // expect(allElements.length).toBeGreaterThanOrEqual(20);
  });

  test("Verify that each off the 50 link elements within <ul> tag is visible and clicable.", async ({
    page,
  }) => {
    //let allElements = await page.locator("//ul[@class='list-group']/li/a").all(); //!Return array of elements

    for(let eachElement of allElements){
        await expect(eachElement).toBeVisible();
        expect(await eachElement.isVisible).toBeTruthy();
        //----------------------------------------------

        await expect(eachElement).toBeEnabled();
        expect(await eachElement.isEnabled).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements with <ul> tag has a href attribute", async ({
    page,
  }) => {
    //let allElements = await page.locator("//ul[@class='list-group']/li/a").all(); //!Return array of elements

    for (let e of allElements){
        await expect(e).toHaveAttribute("href");
        console.log(await e.getAttribute("href"));
    }





  });
});
