export default class HomePage {
  constructor(page) {
    this.page = page
    this.searchBox = 'input[name="q"]'
  }

  async goto() {
    await this.page.goto('https://www.daraz.pk', { waitUntil: 'domcontentloaded' })
  }

  async searchFor(item) {
    await this.page.waitForSelector(this.searchBox)
    await this.page.fill(this.searchBox, item)
    await this.page.keyboard.press('Enter')
  }
}