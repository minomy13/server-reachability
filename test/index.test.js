const index = require('../index');

test('Index has to export lib/server-reachability', () => {
  expect(index).toBe(require('../lib/server-reachability'));
});
