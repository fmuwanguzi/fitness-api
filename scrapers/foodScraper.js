const puppeteer = require('puppeteer')

module.exports = async (url) =>{
    // set up puppeteer browser and navigate to input page
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    const [el] = await page.$x('//*[@id="tasty-recipes-16138"]/div[5]/ul[1]')
    const src = await el.getProperty('textContent')
    const ingredients = await src.jsonValue()

    const [el2] = await page.$x('//*[@id="tasty-recipes-16138"]/div[7]/ol')
    const src2 = await el2.getProperty('textContent')
    const directions = await src2.jsonValue()

    const [el3] = await page.$x('//*[@id="tasty-recipes-16138"]/div[8]/ul')
    const src3 = await el3.getProperty('textContent')
    const nutrition = await src3.jsonValue()

    // const [el4] = await page.$x('//*[@id="post-detail"]/div[1]/div[2]/p[2]/img')
    // const src4 = await el4.getProperty('src')
    // const image = await src4.jsonValue()

    browser.close()
    return {ingredients,directions,nutrition}
}
