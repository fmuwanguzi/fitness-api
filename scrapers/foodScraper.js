const puppeteer = require('puppeteer')

module.exports = async (url) =>{
    // set up puppeteer browser and navigate to input page
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [el] = await page.$x('')
    const src = await getProperty('src')
    const image = await src.jsonValue()

    browser.close()
    return {image}
}
