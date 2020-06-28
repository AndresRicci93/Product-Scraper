const amazon = require('./amazon');

(async () => {




    await amazon.initialize();

    let details = await amazon.getProductDetails('https://www.amazon.com/Last-Us-Part-II-PlayStation-4/dp/B07DJRFSDF');
    
    let deals = await amazon.bestDeal('https://www.amazon.com/gp/offer-listing/B07DJRFSDF/ref=dp_olp_new?ie=UTF8&condition=new');

    debugger;




})();