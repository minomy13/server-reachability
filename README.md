# ServerReachability

<p align="center">
    <a href="https://codecov.io/gh/minomy13/server-reachability">
        <img src="https://codecov.io/gh/minomy13/server-reachability/branch/master/graph/badge.svg?token=TLTyb90Kdl"/>
    </a>
    <img alt="npm" src="https://img.shields.io/npm/v/server-reachability">
    <img alt="npm" src="https://img.shields.io/npm/dt/server-reachability">
    <img alt="GitHub" src="https://img.shields.io/github/license/minomy13/server-reachability">
    <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/minomy13/server-reachability">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/minomy13/server-reachability">
    <a href="https://www.codacy.com/gh/minomy13/server-reachability/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=minomy13/server-reachability&amp;utm_campaign=Badge_Grade">
        <img src="https://app.codacy.com/project/badge/Grade/30be9c9e86fc46b2bf01a191dc17b42a"/>
    </a>
    <a href="https://discord.gg/zwEaZTn">
        <img src="https://img.shields.io/discord/706603856007790612?label=discord"/>
    </a>
    <img src="https://img.shields.io/github/languages/top/minomy13/server-reachability">
    <img src="https://img.shields.io/github/last-commit/minomy13/server-reachability">
</p>

This is a node.js module, which allows you to check, if different types of servers are online. Check the other sections for information about the installation and usage. 💾📡

## Installation

You can install it like every other npm package. Simply run `npm install server-reachability` in your termianl.

## Usage

After installing, you can begin to use it. At first you should import it, like:

```js
const sr = require('server-reachability';
```

### isReachable

The `isReachable` function is asynchronous and gives back an boolean (`true` or `false`). So you have to await it. You have to give a hostname and a port to it. Code example:

```js
async function fn() {
  console.log(await sr.isReachable('google.com', 80));
}
```

Output:

```bash
true
```

## Support

If you have questions, you can ask me everytime on my Discord. Cick the badge on the top.
