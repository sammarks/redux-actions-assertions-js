'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notDispatchedActionError = undefined;

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notDispatchedActionError(dispatchedActions, expectedActions, action) {
  return new Error('Action ' + (0, _jsonStringifySafe2.default)(action) + ' was not dispatched when it was expected.\n' + ('Actions expected to be dispatched: ' + (0, _jsonStringifySafe2.default)(expectedActions) + '\n') + ('Actual dispatched actions: ' + (0, _jsonStringifySafe2.default)(dispatchedActions)));
}

exports.notDispatchedActionError = notDispatchedActionError;