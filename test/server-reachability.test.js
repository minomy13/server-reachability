const serverreachability = require('../lib/server-reachability');

test('Returning right modules?', () => {
  expect(serverreachability.isReachable).toBe(require('../lib/isReachable'));
});
