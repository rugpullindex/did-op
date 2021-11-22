# did-op

[![npm version](https://badge.fury.io/js/did-op.svg)](https://badge.fury.io/js/did-op)
[![Node.js CI](https://github.com/rugpullindex/did-op/actions/workflows/node.js.yml/badge.svg)](https://github.com/rugpullindex/did-op/actions/workflows/node.js.yml)


#### Utility to convert identifiers from Ocean Protocol DIDs to e.g. ERC20 addresses and vice versa

#### [Get Started](#get-started) | [Changelog](./CHANGELOG.md)

## Installation

```bash
$ npm i did-op
```

## Get Started

```js
import { v3 } from "did-op";

console.log(v3.fromDID(""));
// 0x7bce67697ed2858d0683c631dde7af823b7eea38

console.log(v3.toDID("0x7bce67697ed2858d0683c631dde7af823b7eea38"));
// did:op:7Bce67697eD2858d0683c631DdE7Af823b7eea38
```

## Contributing

We love contributions from the community. Find a [good first
issue](https://github.com/rugpullindex/did-op/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

Want to suggest a feature or even better raise a PR for it? Head over to the
[issues](https://github.com/rugpullindex/did-op/issues) section or join
our [discord](https://discord.gg/zhawZxgKQz).

You can also get paid for a PR. For more information read our
[handbook](https://github.com/rugpullindex/documents/blob/master/handbook.md).

## Changelog

The changelog is avaliable at [CHANGELOG.md](./CHANGELOG.md).

## License

See [License](./LICENSE).
