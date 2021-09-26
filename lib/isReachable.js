const net = require('net');

async function isReachable(hostname, port, timeout) {
  return new Promise((resolve, reject) => {
    var socket = new net.Socket();

    if (!hostname) {
      console.error('server-reachability: No hostname given.');
      reject('no hostname');
    }
    if (!port) {
      console.error('server-reachability: No port given.');
      reject('no port');
    }
    if (!timeout) {
      console.error('server-reachability: No timeout given.');
      reject('no timeout');
    }

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
