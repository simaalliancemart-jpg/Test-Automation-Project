import { time } from "node:console";
import LoginPage from "../pageObject/LoginPage";

import { test, expect } from "@playwright/test";

test.describe("Locked Out User Test", () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto("https://www.saucedemo.com/");
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

   test("should display an error message for locked out user", async () => {
        await loginPage.enterUsername("locked_out_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginButton();
        await expect(loginPage.errorMessage).toBeVisible();

        await expect(loginPage.errorMessage).toHaveText(
            "Epic sadface: Sorry, this user has been locked out."
        );
        
    });

});