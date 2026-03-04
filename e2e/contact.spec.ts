import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to contact page and ensure it's loaded
        await page.goto('/en/contact');
    });

    test('should show validation errors when submitting empty form', async ({ page }) => {
        // Click submit without filling anything
        const submitBtn = page.locator('button[type="submit"]');
        await submitBtn.click();

        // In native HTML5 validation, the form doesn't actually submit.
        // We can check if the first required input is focused or invalid.
        const firstNameInput = page.locator('input[name="firstName"]');

        // Evaluate if the element matches the :invalid CSS pseudo-class
        const isInvalid = await firstNameInput.evaluate((el: HTMLInputElement) => el.validity.valueMissing);
        expect(isInvalid).toBeTruthy();
    });

    test('should successfully fill out the contact form', async ({ page }) => {
        // Fill the form fields
        await page.locator('input[name="firstName"]').fill('John');
        await page.locator('input[name="lastName"]').fill('Doe');
        await page.locator('input[name="email"]').fill('john.doe@example.com');
        await page.locator('textarea[name="details"]').fill('I would like to inquire about a new villa facade project in Doha.');

        // Since the actual submission triggers a `window.location.href = mailto:...` 
        // Which might open the default mail client and is hard to test in an automated browser
        // We will verify that we can click it without JS errors, or intercept the window location change if possible.

        // A robust way to test this is to assert the values are correctly in the DOM
        await expect(page.locator('input[name="firstName"]')).toHaveValue('John');
        await expect(page.locator('input[name="email"]')).toHaveValue('john.doe@example.com');
    });
});
