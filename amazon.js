const puppeteer = require('puppeteer');

let browser = null;
let page = null;

const BASE_URL = 'https://amazon.com';

const amazon = {

    initialize: async () => {
        browser = await puppeteer.launch({



            headless: false
        })

        page = await browser.newPage();

        await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

        console.log('Starting the scraper...');

    },


    getProductDetails: async (link) => {

        console.log(`Going to the product page... (${link})`);

        await page.goto(link, { waitUntil: 'networkidle2' });

        let details = await page.evaluate(() => {

            let title = document.querySelector('#productTitle').innerText;
            let manufacturer = document.querySelector('#bylineInfo').innerText; 
            let availability = document.querySelector('#availability').innerText;
            let price = document.querySelector('#priceblock_ourprice').innerText;
            
            return {
                title,
                manufacturer,
                availability,
                price,
                

            }
        });

        return details;

    },

    end: async () => {


        await browser.close();
    }

}

module.exports = amazon;