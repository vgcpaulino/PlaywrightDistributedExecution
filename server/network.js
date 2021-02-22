const { networkInterfaces } = require('os');

function getIPAddresses() {
    const allInterfaces = networkInterfaces();
    var ipAddresses = [];
    for (const netInterface of Object.keys(allInterfaces)) {
        for (const adapter of allInterfaces[netInterface]) {
            if ((adapter.family === 'IPv4') && (!adapter.internal)) {
                ipAddresses.push({ name: netInterface, ip: adapter.address });
            }
        }
    };
    return ipAddresses;
}

function getFirstIPAddress() {
    const allIpAddress = getIPAddresses();
    return allIpAddress[0].ip;
}

module.exports = {
    getIPAddresses,
    getFirstIPAddress
}
