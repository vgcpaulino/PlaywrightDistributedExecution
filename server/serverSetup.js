const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const asyncHandler = require('express-async-handler');
const playwright = require('playwright');
const { getFirstIPAddress } = require('./network');

const server = express();

// Setup Server;
server.use(cors());
server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
server.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8")
    next();
});

const serverBrowser = process.env.BROWSER_SERVER || 'chromium';
var browserServer = '';
var webSocketEndpoint = '';
const ipAddress = getFirstIPAddress();

// Setup Routes:
server.get('/healthcheck', function (req, res) {
    console.log('Received Request At: healthcheck');
    res.json({});
});

server.get("/serverInfo", function (req, res) {
  res.json({ ipAddress: ipAddress, browser: serverBrowser, webSocketEndpoint: webSocketEndpoint });
});

server.get('/startServer', asyncHandler(async (req, res, next) => {
    console.log('Received Request At: startServer');
    // Launch Chrome Server;
    browserServer = await playwright[serverBrowser].launchServer({ headless: false });
    webSocketEndpoint = getWebSockterStringWithIP(browserServer.wsEndpoint());
    console.log('##################### ' + webSocketEndpoint);
    // Response;
    res.json({ ipAddress: ipAddress, browser: serverBrowser, webSocketEndpoint: webSocketEndpoint });
}));

server.post('/startServerOptions', asyncHandler(async (req, res, next) => {
    console.log('Received Request At: startServerOptions');

    browserServer = await playwright[serverBrowser].launchServer(req.body);
    webSocketEndpoint = getWebSockterStringWithIP(browserServer.wsEndpoint());
    console.log('##################### ' + webSocketEndpoint);
    // Response;
    res.status(201).json({ ipAddress: ipAddress, browser: serverBrowser, webSocketEndpoint: webSocketEndpoint });
}));

function getWebSockterStringWithIP(webSocketEndpoint) {
    var splitedWebSocket = webSocketEndpoint.split(':');
    splitedWebSocket[1] = '//' + ipAddress;
    return splitedWebSocket.join(':');
}

module.exports = {
    server
}