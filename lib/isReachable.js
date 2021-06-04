const net = require('net');

async function isReachable(hostname, port) {
  return new Promise((resolve, reject) => {
    var conn = net
      .connect(port, hostname, () => {
        resolve(true);
        conn.destroy();
      })
      .on('error', () => {
        resolve(false);
        conn.destroy();
      });
  });
}

module.exports = isReachable;
