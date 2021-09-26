const net = require('net');

async function isReachable(hostname, port, timeout) {
  return new Promise((resolve, reject) => {
    var socket = new net.Socket();

    if (!hostname) {
      console.error('server-reachability: Variable missing.');
      resolve(false);
      return;
    }
    if (!port) {
      console.error('server-reachability: Variable missing.');
      resolve(false);
      return;
    }
    if (!timeout) {
      console.error('server-reachability: Variable missing.');
      resolve(false);
      return;
    }

    socket
      .connect({ port: port, host: hostname })
      .setTimeout(timeout)
      .on('connect', () => {
        socket.destroy();
        resolve(true);
        return;
      })
      .on('timeout', () => {
        socket.destroy();
        resolve(false);
        return;
      })
      .on('error', () => {
        socket.destroy();
        resolve(false);
        return;
      });
  });
}

module.exports = isReachable;
