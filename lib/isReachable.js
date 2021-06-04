const net = require('net');

function isReachable(hostname, port) {
  net
    .connect(port, hostname, () => {
      return true;
    })
    .on('error', () => {
      return false;
    });
}
