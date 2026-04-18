import { test } from "@playwright/test";
import { before } from "node:test";

test.describe("My Test Suite", () => { //!Test Suite

  test.beforeAll(async () => {
    console.log("Before all test case");
  });

  test.beforeEach(async ({}) => {
    console.log("Before each test case");
  });

  test("Test case 01", async () => {
    console.log("Test case 01 is executed");
  });

  test("Test case 02", async () => {
    console.log("Test case 02 is executed");
  });

  test("Test case 03", async () => {
    console.log("Test case 03 is executed ");
  });

  test("Test case 04", async () => {
    console.log("Test case 04 is executed ");
  });

  test.afterEach(async () => {
    console.log("After each test case");
  });

  test.afterAll(async () => {
    console.log("After all test case");
  });
});
