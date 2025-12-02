import { test, expect } from '../fixtures/bestbuy.fixture'; 

test('test', async ({ page }) => {
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByTestId('SearchBarExtendable-TestID').click();
  await page.getByTestId('SearchBarExtendable-TestID').fill('mac');
  await page.goto('https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=mac');
  await expect(page.locator('div').filter({ hasText: 'Results for "mac" (7239)' }).nth(3)).toBeVisible();
});