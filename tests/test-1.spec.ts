import { test, expect } from "../fixtures/bestbuy.fixture";

test("test", async ({ page }) => {
  await page.getByTestId("SearchBarExtendable-TestID").click();
  await page
    .getByTestId("SearchBarExtendable-TestID")
    .fill("samsung television");
  await page.goto(
    "https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=samsung+television"
  );
  await expect(
    page.getByRole("link", { name: 'Samsung - 65" Class U7900' })
  ).toBeVisible();

  await page.getByRole("link", { name: 'Samsung - 65" Class U7900' }).click();
});
