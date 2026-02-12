export default class ProductPage {
  constructor(page) {
    this.page = page
  }

  async hasFreeShipping() {
    return await this.page.locator('text=Free Shipping').isVisible()
  }
}