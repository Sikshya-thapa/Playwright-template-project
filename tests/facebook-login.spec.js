// @ts-check
const { test, expect } = require('@playwright/test');

test('Visit facebook login page-Invalid credentials', async ({ page }) => {
await page.goto('https://www.facebook.com/');
await page.getByTestId('royal_email').type("test@gmail.com");
await page.getByTestId('royal_pass').type("testPasswrd");
await page.getByTestId('royal_login_button').click();   
await page.waitForTimeout(5000);
expect(page.getByText('The password that you\'ve')).toBeVisible();
});

test('Visit facebook login page-Successful', async ({ page }) => {
await page.goto('https://www.facebook.com/');
//Login 
await page.getByTestId('royal_email').type("sRY@gmail.com");
await page.getByTestId('royal_pass').type("asdfasdfasd345j4534g4");
await page.getByTestId('royal_login_button').click();   
await page.waitForTimeout(10000);
expect(page.getByRole('link', { name: 'Sikshya Thapa', exact: true })).toHaveText('Sikshya Thapa');
//Log out
await page.getByRole('button', { name: 'Your profile', exact: true }).click({ timeout: 10000 });
await page.waitForTimeout(6000);
await page.getByRole('button', { name: 'Log Out' }).click();
await page.waitForTimeout(3000);
expect(page.getByTestId('royal_login_form')).toBeVisible();

});