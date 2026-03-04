import { test, expect } from '@playwright/test';

test.describe('Navigation and Localization (i18n)', () => {

    test('should toggle language between English and Arabic', async ({ page }) => {
        // Start on English homepage
        await page.goto('/en');
        await expect(page).toHaveURL(/.*\/en/);

        // Find the language switcher button using its accessible name / text
        // The text contains "عربي" when on the English page
        const langSwitcher = page.locator('header').getByRole('link', { name: /عربي/i }).first();
        await expect(langSwitcher).toBeVisible();

        // Click to switch language
        await langSwitcher.click();

        // Verify URL changed to /ar
        await expect(page).toHaveURL(/.*\/ar/);

        // Verify the switcher now shows 'EN' 
        const langSwitcherEN = page.locator('header').getByRole('link', { name: /EN/i }).first();
        await expect(langSwitcherEN).toBeVisible();
    });

    test('should update HTML lang and dir attributes based on locale', async ({ page }) => {
        // Test English
        await page.goto('/en');
        const htmlEn = page.locator('html');
        await expect(htmlEn).toHaveAttribute('lang', 'en');
        await expect(htmlEn).toHaveAttribute('dir', 'ltr');

        // Test Arabic
        await page.goto('/ar');
        const htmlAr = page.locator('html');
        await expect(htmlAr).toHaveAttribute('lang', 'ar');
        await expect(htmlAr).toHaveAttribute('dir', 'rtl');
    });

    test('should navigate to Contact page successfully in Arabic', async ({ page }) => {
        await page.goto('/ar');

        // Find the 'Contact Us' link in navbar (Desktop)
        // The translation for contact navbar is "اتصل بنا"
        const contactLink = page.locator('header').getByRole('link', { name: /اتصل بنا/i }).last();

        // Check if it's visible
        await expect(contactLink).toBeVisible();
        await contactLink.click();

        // Wait for navigation
        await expect(page).toHaveURL(/.*\/ar\/contact/);

        // Verify a static heading on the contact page is visible to avoid framer-motion race conditions
        // "نبني صروحاً خالدة، معاً." is the heading text from ar.json
        const contactHeading = page.getByRole('heading', { name: /نبني صروحاً/i });
        await expect(contactHeading).toBeVisible();
    });
});
