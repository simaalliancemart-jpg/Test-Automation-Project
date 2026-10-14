import {expect} from "@playwright/test";
import BasePage from "./BasePage";

export default class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.backpackButton  = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLightButton  = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.tshirtButton  = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.tShirtRedButton = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

    async addThreeProducts() {
        await this.backpackButton.click();
        await this.bikeLightButton.click();
        await this.tshirtButton.click();
    }
    async addOneProduct() {
        await this.tShirtRedButton.click();
    }
}
    