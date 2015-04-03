# koa-stylish

Stylus middleware for Koa. Koa wrapper for [node-stylish](https://github.com/marcello3d/node-stylish).

## Installation

```js
$ npm install koa-stylish
```

## Examples

```js
var stylus = require('koa-stylish');
var autoprefixer = require('autoprefixer-stylus');

app.use(stylus({
  src: __dirname + '/public',
  setup: function(renderer) {
    return renderer.use(autoprefixer());
  },
}));
```
