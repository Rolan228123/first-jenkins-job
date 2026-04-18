import { test, expect } from "@playwright/test";

test("Windown Popup", async ({ page }) => {
  //* Creating event listenr for monitoring windows pop-ups
  let promisedNewPageEvent = page.waitForEvent("popup");

  await page.goto("https://the-internet-5chk.onrender.com/windows");
  await page.click("text='Click Here'"); //* Trigers pop-up event

  let newPage = await promisedNewPageEvent; //* await for the promise to be resolved
  await expect(newPage).toHaveTitle("New Window");
  await expect(page).toHaveTitle("Windows");

  await page.bringToFront(); //! bring specific page to the front
  let firstWindowsElement = page.getByText("Opening a new window");
  await expect(firstWindowsElement).toBeVisible();

  await newPage.bringToFront(); //! bring specific page to the front
  let seconedWindowElement = newPage.getByText("New Window");
  await expect(seconedWindowElement).toBeVisible();
});



test("Window Popup Handling", async ({ page, context }) => {
  // Step 1: Navigate to the page
  await page.goto("https://the-internet-5chk.onrender.com/windows");

  // Step 2: Wait for popup + trigger action at the same time
  const [newPage] = await Promise.all([
    page.waitForEvent("popup"), // listen for new window
    page.click("text=Click Here"), // action that opens popup
  ]);

  // Step 3: Wait for new page to load
  await newPage.waitForLoadState();

  // Step 4: Assertions
  await expect(newPage).toHaveTitle("New Window");
  await expect(page).toHaveTitle("Windows");

  // Step 5: Validate elements in both pages
  await expect(page.getByText("Opening a new window")).toBeVisible();
  await expect(newPage.getByText("New Window")).toBeVisible();

  // Step 6 (optional): Bring original page to front
  await page.bringToFront();
});