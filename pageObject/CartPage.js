import {expect} from "@playwright/test";
import BasePage from "./BasePage";

export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartButton = page.locator(".shopping_cart_link");
        this.cartItems = page.locator(".cart_item");
        this.cartTitle = page.locator('[data-test="title"]');
        this.checkOutButton = page.locator('[data-test="checkout"]');
    }

    async openCart() {
        await this.cartButton.click();
    }

    async verifyCartPage() {
        await expect(this.cartTitle).toHaveText("Your Cart");
    }

    async verifyProductCount(expectedCount = 3) {
        await expect(this.cartItems).toHaveCount(expectedCount);
    }
    async clickCheckoutButton() {
        await this.checkOutButton.click();
    }
}