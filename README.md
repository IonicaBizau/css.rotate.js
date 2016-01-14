# css.rotate.js [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/css.rotate.js.svg)](https://www.npmjs.com/package/css.rotate.js) [![Downloads](https://img.shields.io/npm/dt/css.rotate.js.svg)](https://www.npmjs.com/package/css.rotate.js) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A JavaScript library for rotating elements using CSS3.

## Installation

```sh
$ npm i --save css.rotate.js
```

## Example

```js
// Dependencies
var CSSRotate = require("css.rotate.js");

// Rotate to 42 degrees
CSSRotate(".some-class", 42);
```

## Documentation

### `CSSRotate(elm, angle)`
Rotate an element.

#### Params
- **String|Element|NodeList** `elm`: A stringified query selector, an element or a node list.
- **Number** `angle`: A number representing the rotate value (in degrees).

#### Return
- **Element** First selected element.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md