import { test, expect } from '@playwright/test'
import HomePage from '../pages/HomePage.js'
import ResultsPage from '../pages/ResultsPage.js'
import ProductPage from '../pages/ProductPage.js'

test.setTimeout(60000)

test('Daraz electronics flow', async ({ page }) => {
  const home = new HomePage(page)
  const results = new ResultsPage(page)
  const product = new ProductPage(page)

  await home.goto()

  // kill popups
  await page.keyboard.press('Escape')

  await home.searchFor('electronics')

  await results.applyBrandFilter()
  await results.applyPriceFilter()

  const count = await results.getProductCount()
  expect(count).toBeGreaterThan(0)

  await results.openFirstProduct()

  const freeShipping = await product.hasFreeShipping()
  console.log('Free Shipping Available:', freeShipping)
})