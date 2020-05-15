"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createDirectLine: true
};
exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/features/array/find-index");

require("core-js/features/array/find");

require("core-js/features/array/includes");

require("core-js/features/array/iterator");

require("core-js/features/dom-collections");

require("core-js/features/math/sign");

require("core-js/features/number/is-finite");

require("core-js/features/object/assign");

require("core-js/features/object/entries");

require("core-js/features/object/from-entries");

require("core-js/features/object/is");

require("core-js/features/object/values");

require("core-js/features/promise");

require("core-js/features/promise/finally");

require("core-js/features/set");

require("core-js/features/string/ends-with");

require("core-js/features/string/starts-with");

require("core-js/features/symbol");

require("url-search-params-polyfill");

require("whatwg-fetch");

var _indexMinimal = require("./index-minimal");

var _addVersion = _interopRequireDefault(require("./addVersion"));

var _createDirectLine = _interopRequireDefault(require("./createDirectLine"));

var _index = require("./index");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createDirectLine = function createDirectLine(options) {
  options.botAgent && console.warn('Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.');
  return (0, _createDirectLine.default)(_objectSpread({}, options, {
    botAgent: "WebChat/".concat(_indexMinimal.version, " (ES5)")
  }));
};

exports.createDirectLine = createDirectLine;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  createDirectLine: createDirectLine
});
(0, _addVersion.default)('full-es5');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1lczUudHMiXSwibmFtZXMiOlsiY3JlYXRlRGlyZWN0TGluZSIsIm9wdGlvbnMiLCJib3RBZ2VudCIsImNvbnNvbGUiLCJ3YXJuIiwidmVyc2lvbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFDekNBLEVBQUFBLE9BQU8sQ0FBQ0MsUUFBUixJQUNFQyxPQUFPLENBQUNDLElBQVIsQ0FDRSxzTEFERixDQURGO0FBSUEsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxxQkFBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7O0FBUVBDLE1BQU0sQ0FBQyxTQUFELENBQU4scUJBQ0tBLE1BQU0sQ0FBQyxTQUFELENBRFg7QUFFRU4sRUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUZGO0FBS0EseUJBQVcsVUFBWCIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IGRvdC1ub3RhdGlvbjogW1wiZXJyb3JcIiwgeyBcImFsbG93UGF0dGVyblwiOiBcIl5XZWJDaGF0JFwiIH1dICovXHJcbi8vIHdpbmRvd1snV2ViQ2hhdCddIGlzIHJlcXVpcmVkIGZvciBUeXBlU2NyaXB0XHJcblxyXG4vLyBQb2x5ZmlsbHMgZm9yIElFMTEgYW5kIG90aGVyIEVTNSBicm93c2Vyc1xyXG4vLyBUbyBtYWludGFpbiBxdWFsaXR5LCB3ZSBwcmVmZXIgcG9seWZpbGxzIHdpdGhvdXQgYWRkaXRpdmVzXHJcbi8vIEZvciBleGFtcGxlLCB3ZSBwcmVmZXIgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBmcm9tIFwiY29yZS1qc1wiIHRoYW4gXCJibHVlYmlyZFwiXHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvYXJyYXkvZmluZC1pbmRleCc7XHJcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9maW5kJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2FycmF5L2luY2x1ZGVzJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2FycmF5L2l0ZXJhdG9yJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2RvbS1jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9tYXRoL3NpZ24nO1xyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvbnVtYmVyL2lzLWZpbml0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9vYmplY3QvYXNzaWduJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC9lbnRyaWVzJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC9mcm9tLWVudHJpZXMnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvb2JqZWN0L2lzJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC92YWx1ZXMnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvcHJvbWlzZSc7XHJcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9wcm9taXNlL2ZpbmFsbHknO1xyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3N0cmluZy9lbmRzLXdpdGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvc3RyaW5nL3N0YXJ0cy13aXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3N5bWJvbCc7XHJcblxyXG5pbXBvcnQgJ3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsJztcclxuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xyXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi9pbmRleC1taW5pbWFsJztcclxuaW1wb3J0IGFkZFZlcnNpb24gZnJvbSAnLi9hZGRWZXJzaW9uJztcclxuaW1wb3J0IGRlZmF1bHRDcmVhdGVEaXJlY3RMaW5lIGZyb20gJy4vY3JlYXRlRGlyZWN0TGluZSc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEaXJlY3RMaW5lID0gb3B0aW9ucyA9PiB7XHJcbiAgb3B0aW9ucy5ib3RBZ2VudCAmJlxyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICAnV2ViIENoYXQ6IERldmVsb3BlcnMgYXJlIG5vdCBjdXJyZW50bHkgYWxsb3dlZCB0byBzZXQgYm90QWdlbnQgaW4gdGhlIGNyZWF0ZURpcmVjdExpbmUgZnVuY3Rpb24uIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8yMTE5IGZvciBtb3JlIGRldGFpbHMuJ1xyXG4gICAgKTtcclxuICByZXR1cm4gZGVmYXVsdENyZWF0ZURpcmVjdExpbmUoeyAuLi5vcHRpb25zLCBib3RBZ2VudDogYFdlYkNoYXQvJHt2ZXJzaW9ufSAoRVM1KWAgfSk7XHJcbn07XHJcblxyXG53aW5kb3dbJ1dlYkNoYXQnXSA9IHtcclxuICAuLi53aW5kb3dbJ1dlYkNoYXQnXSxcclxuICBjcmVhdGVEaXJlY3RMaW5lXHJcbn07XHJcblxyXG5hZGRWZXJzaW9uKCdmdWxsLWVzNScpO1xyXG4iXX0=