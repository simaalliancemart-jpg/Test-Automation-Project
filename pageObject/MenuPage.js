import {expect} from "@playwright/test";
import BasePage from "./BasePage";

export default class MenuPage extends BasePage {
    constructor(page) {
        super(page);
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.resetAppStateLink = page.locator('[data-test="reset-sidebar-link"]');
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
        this.productSortDropdown = page.locator('select.product_sort_container');
        this.productSortOptions = page.locator('.product_sort_container option');
    }

    async openMenu() {
        await this.menuButton.click();
    }
    async resetAppState() {
        await this.resetAppStateLink.click();
    }
    async logout() {
        await this.logoutLink.click();
    }
    async selectProductSortOption(option) {
        await this.productSortDropdown.selectOption({ label: option });
    }
    async verifyProductSortOptions(expectedOptions) {
        const actualOptions = await this.productSortOptions.allTextContents();
        expect(actualOptions).toEqual(expectedOptions);
    }
}