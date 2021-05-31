const serverreachability = require('./server-reachability');

test('Returning right modules?', () => {
  expect(serverreachability.Server).toBe(require('./server').Server);
});
