# Base64UUID

Generate url-safe short UUID like Youtube.

## Installation

```sh
npm i base64-uuid --save

# or

yarn add base64-uuid

```

## Usage

```js
// commonjs
const { Base64UUID } = require("base64-uuid");

// or ES module
import { Base64UUID } from "base64-uuid";

/**
 * You can use the static `generate` method
 */
const uid = Base64UUID.generate(); // kVwcshidzw

// or instatiate it

const uid = new Base64UUID().generate(); // kVwcshidzw
```

### Configuration

By default, the length of the generated uuid is 10, but if you prefer a longer one,  you can specify the `length`.

```js
const uid = Base64UUID.generate(25); // 7C00JcaaggLV9WTwA_08maUCd

const uid = new Base64UUID(25).generate(); // 7C00JcaaggLV9WTwA_08maUCd
```
