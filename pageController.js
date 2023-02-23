const pageScraper = require('./pageScraper')

const scrapeAll = async(browserInstance) => {
  let browser

  try {
    browser = await browserInstance
    await pageScraper.scraper(browser)
  } catch (error) {
    console.log('Error resolving the browser instance: ', error)
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)