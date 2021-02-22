
describe('GSt', () => {
    
    it(`${browserName}: Browser`, async () => {
        // await page.goto('https://www.whatismybrowser.com/');
        await page.goto('https://www.example.com/');
        await page.screenshot({ path: `screenshots/browser_${browserName}.png`, fullPage: true });
    });

    it(`${browserName}: View Port`, async () => {
        await page.goto('https://whatismyviewport.com/');
        await page.screenshot({ path: `screenshots/viewport_${browserName}.png`, fullPage: true });
    });

});
