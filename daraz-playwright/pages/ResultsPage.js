export default class ResultsPage {
  constructor(page) {
    this.page = page
    this.products = '[data-qa-locator="product-item"]'
  }

  async applyBrandFilter() {
    await this.page.locator('text=Samsung').first().click()
    await this.page.waitForTimeout(3000)
  }

  async applyPriceFilter() {
    await this.page.fill('input[placeholder="Min"]', '500')
    await this.page.fill('input[placeholder="Max"]', '5000')
    await this.page.keyboard.press('Enter')
    await this.page.waitForTimeout(3000)
  }

  async getProductCount() {
    return await this.page.locator(this.products).count()
  }

  async openFirstProduct() {
    await this.page.locator(this.products).first().click()
  }
}