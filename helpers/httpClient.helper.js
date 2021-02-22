
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export function request(method, url, body) {
    var httpClient = new XMLHttpRequest();
    httpClient.open(method, url, false);
    httpClient.send(JSON.stringify(body));
    return { status: httpClient.status, headers: httpClient.getAllResponseHeaders(), body: httpClient.responseText };
}

function getHeadersObj(headerStr) {
    var array = headerStr.trim().split(/[\r\n]+/);
    var headers = {};
    array.forEach(function (line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        headers[header] = value;
    });
    return headers;
}