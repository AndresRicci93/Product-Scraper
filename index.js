const amazon = require('./amazon');

(async () => {




    await amazon.initialize();

    let details = await amazon.getProductDetails('https://www.amazon.com/Last-Us-Part-II-PlayStation-4/dp/B07DJRFSDF');
    

    debugger;




})();