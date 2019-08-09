const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.tracing.start({path: 'trace.json'});
  await page.goto('https://joel.tools/merch');
  const price = await page.$eval('.price', div => div.textContent);
  //connsole.log(price);
  await page.screenshot({path: 'example.png'});
  await page.tracing.stop();

  await browser.close();
})();