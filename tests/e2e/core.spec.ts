import { expect, test } from '@playwright/test';

test('홈에서 계산기 목록으로 이동한다', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /복잡한 계산/ })).toBeVisible();
  await page.getByRole('link', { name: '12개 계산기 모두 보기' }).click();
  await expect(page).toHaveURL(/\/calculators\/$/);
  await expect(page.locator('[data-calculator-card]')).toHaveCount(12);
});

test('나이를 입력해 결과를 확인한다', async ({ page }) => {
  await page.goto('/calculators/age/');
  await page.getByLabel('생년').fill('2000');
  await page.getByLabel('생월').fill('8');
  await page.getByLabel('생일').fill('21');
  await page.getByLabel('기준일').fill('2026-08-20');
  await page.getByRole('button', { name: '계산하기' }).click();
  await expect(page.getByTestId('age-result')).toHaveText('만 25세');
});

test('낮과 밤 테마 선택을 기억한다', async ({ page }) => {
  await page.goto('/');
  const button = page.locator('[data-theme-toggle]');
  const before = await page.locator('html').getAttribute('data-theme');
  await button.click();
  const after = await page.locator('html').getAttribute('data-theme');
  expect(after).not.toBe(before);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', after ?? 'night');
});

test('검색어로 계산기 목록을 줄인다', async ({ page }) => {
  await page.goto('/calculators/');
  await page.getByLabel('계산기 검색').fill('배당');
  await expect(page.locator('[data-calculator-card]:visible')).toHaveCount(1);
  await expect(page.getByRole('link', { name: /배당금 계산기/ })).toBeVisible();
});

test('공개 계산기 12개 주소가 모두 열린다', async ({ page }) => {
  const routes = ['age','dividend','lotto-prize','loan-interest','bmi','date-difference','percentage','discount','compound-interest','savings','d-day','unit-converter'];
  for (const route of routes) {
    const response = await page.goto(`/calculators/${route}/`);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  }
});

