import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach("Url", async ({ page }) => {
    await page.goto("https://admin:admin@the-internet-5chk.onrender.com/");
  });

  test("Left Click", async ({ page }) => {
    await page.click("text='A/B Testing'");
  });
  //!!
  test("Right Click", async ({ page }) => {

    let element = page.getByText("A/B Testing");

    await element.click({ button: "right" });
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

  });
  //!!
  test("Hover", async ({ page }) => {
    await page.click("text='Hovers'");
    //await page.hover("(//div[@class='figure'])[1]");

    let arrayOfelements = await page.locator("//div[@class='figure']").all();
    console.log(arrayOfelements);
    for (let eachE of arrayOfelements) {
      await eachE.hover();
    }
  });

  test("Mouse Wheel scroling", async ({ page }) => {
    await page.mouse.wheel(0, 3000);
    //!Scroling using mouse
  });

  test("scroling to specofoc element", async ({ page }) => {
    //! Auto Scroling to Element
   await page.getByText("Inputs").scrollIntoViewIfNeeded();
   await page.getByText("Inputs").click();
  });

  test("Drag and Drop", async ({ page }) => {
    await page.click("text='Drag and Drop'");
    await page.dragAndDrop("#column-a", "#column-b");
  });
});
