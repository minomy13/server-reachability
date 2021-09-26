const net = require('net');

async function isReachable(hostname, port, timeout) {
  return new Promise((resolve, reject) => {
    var socket = new net.Socket();

    socket
      .connect({ port: port, host: hostname })
      .setTimeout(timeout)
      .on('connect', () => {
        resolve(true);
        socket.destroy();
      })
      .on('timeout', () => {
        resolve(false);
        socket.destroy();
      })
      .on('error', () => {
        resolve(false);
        socket.destroy();
      });
  });
}

module.exports = isReachable;
