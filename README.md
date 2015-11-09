# css.rotate.js [![Support this project][donate-now]][paypal-donations]

A JavaScript library for rotating elements using CSS3.

## Installation

```sh
$ npm i -g css.rotate.js
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

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md