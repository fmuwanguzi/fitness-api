const puppeteer = require('puppeteer')

module.exports = async (url) =>{
    // const scraper = async (url) =>{
    // set up puppeteer browser and navigate to input page
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    // const [el] = await page.$x('//*[@id="page-box"]/div[1]/div[1]/figure/img')
    // const src = await el.getProperty('src')
    // const image = await src.jsonValue()
    
    const [el] = await page.$x('/html/body/div[3]/div[1]/div[1]/div[2]/div/div[5]/div/div[1]/div')
    const txt = await el.getProperty('textContent')
    const article = await txt.jsonValue()
    console.log({article});
    browser.close()
    // return {}
}

