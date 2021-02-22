
const { request } = require('../helpers/httpClient.helper');
const jestPlaywright = require('../jest-playwright.config');

export function healtCheck(url) {
    var response = request('GET', url);
    return (response.status == 200) ? true : false;
}

export function getServerInfo(url) {
    var response = request('GET', url);
    console.log(`Server Info: ${response.body.toString()}`);
    return (response.body) ? JSON.parse(response.body) : '';
}

export function startServer(url) {
    var response = request('GET', url);
    return (response.body) ? JSON.parse(response.body) : '';
}

export function startServerOptions(url) {
    var opts = { headless: jestPlaywright.launchOptions.headless };
    var response = request('POST', url, opts);
    console.log(`Server Info: ${response.body.toString()}`);
    return (response.body) ? JSON.parse(response.body) : '';
}