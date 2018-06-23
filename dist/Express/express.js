'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('web'));

app.listen(1337, function () {
  return console.log('Server is running');
});
//# sourceMappingURL=express.js.map