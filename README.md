# koa-stylish

Stylus middleware for Koa. It is koa wrapper for [node-stylish](https://github.com/marcello3d/node-stylish).

## Installation

```js
$ npm install koa-stylish
```

## Examples

Simple `stylus.middleware()` replacement:
```js
app.use(stylish(__dirname + '/public'))
```

Extended example with [autoprefixer](https://github.com/jenius/autoprefixer-stylus):
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
