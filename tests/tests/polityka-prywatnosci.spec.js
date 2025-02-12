import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('polityka-prywatnosci', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('http://psycholog.imago.lublin.pl/polityka-prywatnosci/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).disableRules(['color-contrast']).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});