const puppeteer = require('puppeteer');

(async () => {
    try{
        const browser = await puppeteer.launch({headless:false})
        const page = await browser.newPage()
        const defaultValue = 5.000
        await page.goto("https://123milhas.com/v2/busca?de=GRU&para=REC&ida=12-01-2022&volta=19-01-2022&adultos=3&criancas=1&bebes=0&search_id=677961102")
        await page.waitForSelector('.theme-text--value-2')

        let element = await page.$('.theme-text--value-2')
        let value = await page.evaluate(el => el.textContent, element)
        var newValue = value.replace('R$', '')
        parseFloat(newValue)

        if (newValue < defaultValue) {
            console.log(`Está barato! ${newValue}`)
        }else{
            console.log(`Está Caro! ${newValue}`)
        }
        
    }catch(e){
        console.log(e)
    }
    
})();