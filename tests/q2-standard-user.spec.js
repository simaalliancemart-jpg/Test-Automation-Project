import { test, expect } from "@playwright/test";
import LoginPage from "../pageObject/LoginPage";
import InventoryPage from "../pageObject/InventoryPage";
import MenuPage from "../pageObject/MenuPage";
import CartPage from "../pageObject/CartPage";
import CheckoutPage from "../pageObject/CheckoutPage";

test.describe("Standard User Test", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        // const menu = new MenuPage(page);
        // const inventory = new InventoryPage(page);
        // const cart = new CartPage(page);
        await page.goto("https://www.saucedemo.com/");
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginButton();
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

    test("should login with standard user", async ({ page }) => {
        await expect(page).toHaveURL(/inventory\.html/);
    });

    test("should reset app state and add three products to cart", async ({ page }) => {
        const menu = new MenuPage(page);
        await menu.openMenu();
        await menu.resetAppState();
        const inventory = new InventoryPage(page);
        await inventory.addThreeProducts();
        await expect(page.locator(".shopping_cart_badge")).toHaveText("3");
        const cart = new CartPage(page);
        await cart.openCart();
        await cart.verifyCartPage();
        await cart.verifyProductCount();
        const checkout = new CheckoutPage(page);
        await checkout.openCheckoutPage();
        await checkout.verifyCheckoutPage();
        await checkout.enterFirstName("sima");
        await checkout.enterLastName("khatun");
        await checkout.enterPostalCode("6201");
        await checkout.clickContinueButton();
        await checkout.verifyCheckoutOverviewPage();
        await checkout.clickFinishButton();
        await checkout.verifyCheckoutCompletePage();
        await menu.openMenu();
        await menu.resetAppState();
        await menu.logout();
        await expect(page).toHaveURL("https://www.saucedemo.com/");
    });
});
