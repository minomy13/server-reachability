const net = require('net');

async function isReachable(hostname, port) {
  return new Promise((resolve, reject) => {
    net
      .connect(port, hostname, () => {
        resolve(true);
      })
      .on('error', () => {
        resolve(false);
      });
  });
}

module.exports = isReachable;
