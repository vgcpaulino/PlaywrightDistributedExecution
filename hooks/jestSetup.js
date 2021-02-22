
const { healtCheck, getServerInfo, startServerOptions } = require('../helpers/remoteServer.helper');
const jestPlaywright = require('../jest-playwright.config');

console.log('Jest Setup');

jestPlaywright.browsers.forEach(browser => {
    console.log(`Setup Browser Server: ${browser}`);
    
    const baseUrl = `http://${browser}-server:8081`;
    const healthCheckUrl = `${baseUrl}/healthcheck`;
    const serverInfoUrl = `${baseUrl}/serverInfo`;
    const startServerUrl = `${baseUrl}/startServer`;
    const startServerOptionsUrl = `${baseUrl}/startServerOptions`;

    global.launchRemote = healtCheck(healthCheckUrl);
    if (launchRemote) {
        var serverInfo = getServerInfo(serverInfoUrl);
        if (serverInfo.webSocketEndpoint == '') {
            serverInfo = startServerOptions(startServerOptionsUrl);
        }
        global[`${browser}ServerWebSocket`] = serverInfo.webSocketEndpoint;
    }
});
