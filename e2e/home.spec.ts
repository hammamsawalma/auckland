import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
    test('should load English homepage successfully', async ({ page }) => {
        await page.goto('/en');

        // Expect a title "to contain" a substring. This assumes the title has something like Auckland.
        await expect(page).toHaveTitle(/Auckland/i);

        // Verify some generic elements are loaded, like contact links or main navigation
        const contactUsBtn = page.getByRole('link', { name: /Contact Us/i }).first();
        await expect(contactUsBtn).toBeVisible();
    });

    test('should load Arabic homepage successfully', async ({ page }) => {
        await page.goto('/ar');

        // Expect a title "to contain" a substring in Arabic if applicable.
        await expect(page).toHaveTitle(/أوكلاند/i);

        // Verify contact us in Arabic
        const contactUsBtn = page.getByRole('link', { name: /اتصل بنا/i }).first();
        await expect(contactUsBtn).toBeVisible();
    });
});
