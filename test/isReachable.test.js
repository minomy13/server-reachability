const isReachable = require('../lib/isReachable');

test('Google has to be reachable.', async () => {
  expect(await isReachable('google.com', 80)).toBe(true);
});

test('Random address cant be reachable.', async () => {
  expect(await isReachable('ldkjsflaakdnfjs', 6165)).toBe(false);
});
