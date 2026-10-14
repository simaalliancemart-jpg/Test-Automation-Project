import {expect} from "@playwright/test";
import BasePage from "./BasePage";

export default class CheckoutPage extends BasePage{
    constructor(page) { 
        super(page);
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.checkoutTitle = page.locator('[data-test="title"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeTitle = page.locator('[data-test="complete-header"]');
        
    }
    async verifyCheckoutPage() {
        await expect(this.checkoutTitle).toHaveText("Checkout: Your Information");
    }
    async verifyCheckoutOverviewPage() {
        await expect(this.checkoutTitle).toHaveText("Checkout: Overview");
    }
    async openCheckoutPage() {
        await this.checkoutButton.click();
    }
    async enterFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }
    async enterLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }
    async enterPostalCode(postalCode) {
        await this.postalCodeInput.fill(postalCode);
    }
    async clickContinueButton() {
        await this.continueButton.click();
    }
    async clickFinishButton() {
        await this.finishButton.click();
    }
    async verifyCheckoutCompletePage() {
        await expect(this.completeTitle).toHaveText("Thank you for your order!");
    }
}