const puppeteer = require('puppeteer')

void (async () => {
    const browser = await puppeteer.launch({  executablePath: '/usr/bin/chromium-browser',})
    const page = await browser.newPage()
    await page.goto('https://portal.novsu.ru/search/groups/i.2500/?page=search&grpname=0091')
    await page.screenshot({ path: 'example.png' })


    await browser.close()
})()