const playwright = require('playwright');
const jestPlaywright = require('../jest-playwright.config');

beforeAll(async () => {
    console.log('Jest Hook: Before All!');
    if (global.launchRemote) {
        var wsEndpoint = global[`${browserName}ServerWebSocket`];
        global.browser = await playwright[browserName].connect({ wsEndpoint });
    } else {
        global.browser = await playwright[browserName].launch(jestPlaywright.launchOptions);
    }
});

beforeEach(async () => {
    console.log('Jest Hook: Before Each!');
    global.context = await browser.newContext(jestPlaywright.launchOptions);
    global.page = await context.newPage();
});

afterEach(async () => {
    console.log('Hook: After Each!');
    await global.page.close();
});

afterAll(async () => {
    console.log('Hook: After All!');
    await global.browser.close();
});
