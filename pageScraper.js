const scraperObject = {
  url: 'https://www.carrefour.com.ar/4489?map=productClusterIds',
  async scraper(browser) {
    let page = await browser.newPage()
    console.log(`Navigating to ${this.url}...`)
    await page.goto(this.url)
    await page.waitForTimeout(15000);
    let products = await page.$$eval('.lyracons-search-result-1-x-gallery > .lyracons-search-result-1-x-galleryItem', products =>{
      productInfo = products.map(el => `URL: ${el.querySelector('section > a').href} - Precio: $${el.querySelector('.lyracons-carrefourarg-product-price-1-x-currencyInteger').textContent},${el.querySelector('.lyracons-carrefourarg-product-price-1-x-currencyFraction').textContent}`)

      return productInfo
    })
    console.log(products)
  }
}

module.exports = scraperObject