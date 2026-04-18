import { test } from "@playwright/test";

test.describe("Test Group", () => {


    test.beforeEach("Url",async ({page})=>{
        await page.goto(
          "https://admin:admin@the-internet-5chk.onrender.com/javascript_alerts",
        );
    })
    
  test("Regular Allert", async ({ page }) => {
    let clickForJsAllert =  page.locator("(//button[@class='btn btn-primary'])[1]");
    await clickForJsAllert.click();

    //await page.waitForTimeout(3000);


  });

  test("Confirmation Allert", async ({ page }) => {
   page.on("dialog",async (alert)=>{
        await alert.accept();
        console.log(`Allert Message: ${await alert.message()}`);
    }); 
        let clickForJsAllert = page.locator("(//button[@class='btn btn-primary'])[1]");
        await clickForJsAllert.click();

  });



  test("Confirmation Allert02", async ({ page }) => {
   
page.on("dialog", async (alert) => {
  await alert.dismiss();
  console.log(`Allert Message: ${await alert.message()}`);
}); 

    let clickForJsConfirmButton = page.locator("(//button[@class='btn btn-primary'])[2]");
    await clickForJsConfirmButton.click();

  });


  test("Promt Allert", async ({ page }) => {

page.on("dialog", async (alert) => {
  await alert.accept("CYDEO");

  console.log(`Allert Message: ${await alert.message()}`);
});

let clickForJsPromtButton = page.locator("(//button[@class='btn btn-primary'])[3]");
await clickForJsPromtButton.click();
  });
});



