const { server } = require('./serverSetup');
const { getIPAddresses, getFirstIPAddress } = require('./network');

server.listen(8081, function () {
  console.log("Client Service running on http://localhost:8081");
});
