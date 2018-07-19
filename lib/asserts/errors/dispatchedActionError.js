'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchedActionError = undefined;

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dispatchedActionError(dispatchedActions, expectedActions, action) {
  return new Error('Action ' + (0, _jsonStringifySafe2.default)(action) + ' was dispatched when it was unexpected.\n' + ('Actions expected to be not dispatched: ' + (0, _jsonStringifySafe2.default)(expectedActions) + '\n') + ('Actual dispatched actions: ' + (0, _jsonStringifySafe2.default)(dispatchedActions)));
}

exports.dispatchedActionError = dispatchedActionError;