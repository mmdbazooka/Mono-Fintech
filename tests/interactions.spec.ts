import { test, expect } from "@playwright/test";
test("card materials, spending periods, card lock and prices update", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .locator(".card-swatches")
    .getByRole("button", { name: "Blue", exact: true })
    .click();
  await expect(page.locator(".large-card-stage .bank-card")).toHaveClass(
    /(?:^|\s)finish-blue(?:\s|$)/,
  );
  await page
    .locator(".spending-panel")
    .getByRole("button", { name: "Month", exact: true })
    .click();
  await expect(page.locator(".spending-total")).toContainText("$4,862.80");
  await page
    .locator(".spending-panel")
    .getByRole("button", { name: "Year", exact: true })
    .click();
  await expect(page.locator(".spending-total")).toContainText("$42,318.90");
  const lock = page.getByRole("button", { name: "Unfreeze demo card" });
  await lock.click();
  await expect(
    page.getByRole("button", { name: "Freeze demo card" }),
  ).toHaveAttribute("aria-pressed", "false");
  await page.getByRole("button", { name: /Annually/ }).click();
  await expect(page.locator(".plus-plan .mono-price")).toContainText("$6");
  await expect(page.locator(".plus-plan")).toContainText("$72 billed yearly");
});
test("signup validates locally and login is explicitly a demonstration", async ({
  page,
}) => {
  await page.goto("/");
  const form = page.locator(".mono-hero .signup-form");
  await form.getByRole("button").click();
  await expect(page.locator(".mono-hero .form-success")).not.toBeVisible();
  await form.getByLabel("Email address").fill("alex@example.com");
  await form.getByRole("button").click();
  await expect(page.locator(".mono-hero .form-success")).toContainText(
    "were not sent or saved",
  );
  await page.getByRole("button", { name: "Log in", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText(
    "there’s no account to sign into",
  );
});
