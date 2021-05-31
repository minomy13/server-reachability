const net = require('net');

class Server {
  constructor(type, hostname, port, timeout) {
    this.type = type;
    this.hostname = hostname;
    this.port = port;
    this.timeout = timeout | 4;
  }

  connect() {
    var online = false;

    var connection = net.connect(this.port, this.hostname, () => {
      online = true;
    });

    return {
      hostname: this.hostname,
      online: online,
    };
  }
}
