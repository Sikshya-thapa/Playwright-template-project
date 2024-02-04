// @ts-check
const { test, expect } = require('@playwright/test');

test('Visit Linkedin login page', async ({ page }) => {
  await page.goto('https://linkedin.com/');
  await page.locator('id=session_key').type("test@gmail.com");
  await page.locator('id=session_password').type("testPasswrd");
  await page.locator('button').filter({hasText: 'Sign in'}).click();
});

