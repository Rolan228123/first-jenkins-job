import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach("Url", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/web-tables");
  });

  test("web-Table01", async ({ page }) => {
    let webTable = page.locator("//table[@class='SampleTable']"); //! Located webTable;
    let allRowsInTheTable_Actuall = await webTable.locator("//tr").all(); //! all rows
    let allColumns = await webTable.locator("//th").all(); //! all coluwns
    let allCells = await webTable.locator("//td").all();

    expect(allRowsInTheTable_Actuall.length).toBe(9);
    expect(allColumns.length).toBe(13);
    expect(allCells.length).toBe(104);
    //expect(await allCells.count()).toBe(104);

    for (let eachText of allCells) {
      console.log(await eachText.textContent());
    }
  });

  test("web-Table02", async ({ page }) => {
    let webTable = page.locator("//table[@class='SampleTable']"); //! Located webTable;
    let allRowsInTheTable_Actuall = await webTable.locator("//tr").all(); //! all rows

    for (let row of allRowsInTheTable_Actuall) {
      let cells = await row.locator("//td").all();
      if (cells.length > 2) {
        for (let i = 1; i < cells.length - 1; i++) {
          console.log(await cells[i].innerText());
        }
      }
      console.log("-------------------------");
    }
  });

  test("web-Table03", async ({ page }) => {
    let webTable = page.locator("//table[@class='SampleTable']"); //! Located webTable;
    let allCheckBoxes = await webTable.getByRole("checkbox").all();

    for (let eachBox of allCheckBoxes){
        await eachBox.check();
        await expect(eachBox).toBeChecked();
    }
  });
});
