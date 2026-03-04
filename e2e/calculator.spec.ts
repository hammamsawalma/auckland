import { test, expect } from '@playwright/test';

test.describe('Facade Calculator', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to calculator page and ensure it's loaded
        await page.goto('/en/calculator');
    });

    test('should load the calculator properly', async ({ page }) => {
        // Wait for the calculator title to be visible
        const title = page.getByRole('heading', { name: /Cost Calculator/i, level: 2 }).or(page.getByRole('heading', { name: /حاسبة التكلفة/i, level: 2 }));
        await expect(title).toBeVisible();
    });

    test('should update calculation when changing inputs', async ({ page }) => {

        // 1. Find area input and enter a value (e.g. 300)
        const areaInput = page.locator('input[type="number"]');
        await areaInput.fill('300');

        // 2. Select stone type: Syrian (which is the default, but let's click Omani for test)
        // The exact text for Omani in English might be "Omani Marble" or "Omani"
        // So we use a generic locator or regex
        const omaniButton = page.getByRole('button', { name: /Omani/i }).or(page.getByRole('button', { name: /عماني/i }));
        await omaniButton.click();

        // 3. Select Installation: Wet (default is mechanical)
        const wetButton = page.getByRole('button', { name: /Wet/i }).or(page.getByRole('button', { name: /التقليدي/i }));
        await wetButton.click();

        // 4. Click Calculate Button. Use an exact class/structure locator to bypass text translation issues
        // The calculate button has: w-full h-14 bg-app-acc text-app-dark
        const calcBtn = page.locator('button.bg-app-acc.text-app-dark').first();
        await calcBtn.click();

        // 5. Verify a result is shown. Cost should be visible.
        // Omani = 280, Wet = 1.0 multiplier => 300 * 280 * 1.0 = 84000
        const resultText = page.getByText(/84,000/);
        await expect(resultText).toBeVisible();
    });

    test('should navigate to contact page from result CTA', async ({ page }) => {
        // First calculate a result so the CTA appears
        const calcBtn = page.locator('button.bg-app-acc.text-app-dark').first();
        await calcBtn.click();

        // Use text matching or an exact class structure for the result CTA
        // The link in the result block has: inline-flex ... bg-white text-app-dark ... hover:bg-app-acc
        const contactCta = page.locator('a.bg-white.text-app-dark').first();
        await expect(contactCta).toBeVisible();

        await contactCta.click();
        await expect(page).toHaveURL(/.*\/contact/);
    });
});
