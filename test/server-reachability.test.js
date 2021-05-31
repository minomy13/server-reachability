const serverreachability = require('../lib/server-reachability');

test('Returning right modules?', () => {
  expect(serverreachability.Server).toBe(require('../lib/server').Server);
});
