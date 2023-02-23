const puppeteer = require('puppeteer')

const startBrowser = async () => {
  let browser

  try {
    console.log('Opening the browser...')
    browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-setui-sandbox'],
      'ignoreHTTPSErrors': true
    })
  } catch (error) {
    console.log('Error creating a browser instance: ', error)
  }

  return browser
}

module.exports = {
  startBrowser
}