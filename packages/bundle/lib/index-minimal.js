"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Constants", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.Constants;
  }
});
Object.defineProperty(exports, "createStore", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.createStore;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.version;
  }
});
Object.defineProperty(exports, "Components", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.Components;
  }
});
Object.defineProperty(exports, "concatMiddleware", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.concatMiddleware;
  }
});
Object.defineProperty(exports, "connectToWebChat", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.connectToWebChat;
  }
});
Object.defineProperty(exports, "createStyleSet", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.createStyleSet;
  }
});
Object.defineProperty(exports, "hooks", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.hooks;
  }
});
Object.defineProperty(exports, "createBrowserWebSpeechPonyfillFactory", {
  enumerable: true,
  get: function get() {
    return _createBrowserWebSpeechPonyfillFactory.default;
  }
});
exports.renderWebChat = exports.default = exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _botframeworkWebchatCore = require("botframework-webchat-core");

var _botframeworkWebchatComponent = _interopRequireWildcard(require("botframework-webchat-component"));

var _addVersion = _interopRequireDefault(require("./addVersion"));

var _renderWebChat = _interopRequireDefault(require("./renderWebChat"));

var _createBrowserWebSpeechPonyfillFactory = _interopRequireDefault(require("./createBrowserWebSpeechPonyfillFactory"));

var _createDirectLine = _interopRequireDefault(require("./createDirectLine"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var renderWebChat = _renderWebChat.default.bind(null, _botframeworkWebchatComponent.default);

exports.renderWebChat = renderWebChat;

var createDirectLine = function createDirectLine(options) {
  options.botAgent && console.warn('Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.');
  return (0, _createDirectLine.default)(_objectSpread({}, options, {
    botAgent: "WebChat/".concat(_botframeworkWebchatCore.version, " (Minimal)")
  }));
};

exports.createDirectLine = createDirectLine;
var _default = _botframeworkWebchatComponent.default;
exports.default = _default;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  concatMiddleware: _botframeworkWebchatComponent.concatMiddleware,
  connectToWebChat: _botframeworkWebchatComponent.connectToWebChat,
  Constants: _botframeworkWebchatCore.Constants,
  createBrowserWebSpeechPonyfillFactory: _createBrowserWebSpeechPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createStore: _botframeworkWebchatCore.createStore,
  createStyleSet: _botframeworkWebchatComponent.createStyleSet,
  hooks: _botframeworkWebchatComponent.hooks,
  ReactWebChat: _botframeworkWebchatComponent.default,
  renderWebChat: renderWebChat
});
(0, _addVersion.default)('minimal');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1taW5pbWFsLnRzIl0sIm5hbWVzIjpbInJlbmRlcldlYkNoYXQiLCJjb3JlUmVuZGVyV2ViQ2hhdCIsImJpbmQiLCJSZWFjdFdlYkNoYXQiLCJjcmVhdGVEaXJlY3RMaW5lIiwib3B0aW9ucyIsImJvdEFnZW50IiwiY29uc29sZSIsIndhcm4iLCJ2ZXJzaW9uIiwid2luZG93IiwiY29uY2F0TWlkZGxld2FyZSIsImNvbm5lY3RUb1dlYkNoYXQiLCJDb25zdGFudHMiLCJjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVTdHlsZVNldCIsImhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsdUJBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QkMscUNBQTdCLENBQXRCOzs7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7QUFDekNBLEVBQUFBLE9BQU8sQ0FBQ0MsUUFBUixJQUNFQyxPQUFPLENBQUNDLElBQVIsQ0FDRSxzTEFERixDQURGO0FBSUEsU0FBTyxpREFBNkJILE9BQTdCO0FBQXNDQyxJQUFBQSxRQUFRLG9CQUFhRyxnQ0FBYjtBQUE5QyxLQUFQO0FBQ0QsQ0FOTTs7O2VBUVFOLHFDOztBQWVmTyxNQUFNLENBQUMsU0FBRCxDQUFOLHFCQUNLQSxNQUFNLENBQUMsU0FBRCxDQURYO0FBRUVDLEVBQUFBLGdCQUFnQixFQUFoQkEsOENBRkY7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQWhCQSw4Q0FIRjtBQUlFQyxFQUFBQSxTQUFTLEVBQVRBLGtDQUpGO0FBS0VDLEVBQUFBLHFDQUFxQyxFQUFyQ0EsOENBTEY7QUFNRVYsRUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFORjtBQU9FVyxFQUFBQSxXQUFXLEVBQVhBLG9DQVBGO0FBUUVDLEVBQUFBLGNBQWMsRUFBZEEsNENBUkY7QUFTRUMsRUFBQUEsS0FBSyxFQUFMQSxtQ0FURjtBQVVFZCxFQUFBQSxZQUFZLEVBQVpBLHFDQVZGO0FBV0VILEVBQUFBLGFBQWEsRUFBYkE7QUFYRjtBQWNBLHlCQUFXLFNBQVgiLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBkb3Qtbm90YXRpb246IFtcImVycm9yXCIsIHsgXCJhbGxvd1BhdHRlcm5cIjogXCJeV2ViQ2hhdCRcIiB9XSAqL1xyXG4vLyB3aW5kb3dbJ1dlYkNoYXQnXSBpcyByZXF1aXJlZCBmb3IgVHlwZVNjcmlwdFxyXG5cclxuaW1wb3J0IHsgQ29uc3RhbnRzLCBjcmVhdGVTdG9yZSwgdmVyc2lvbiB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvcmUnO1xyXG5cclxuaW1wb3J0IFJlYWN0V2ViQ2hhdCwge1xyXG4gIENvbXBvbmVudHMsXHJcbiAgY29uY2F0TWlkZGxld2FyZSxcclxuICBjb25uZWN0VG9XZWJDaGF0LFxyXG4gIGNyZWF0ZVN0eWxlU2V0LFxyXG4gIGhvb2tzXHJcbn0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBhZGRWZXJzaW9uIGZyb20gJy4vYWRkVmVyc2lvbic7XHJcbmltcG9ydCBjb3JlUmVuZGVyV2ViQ2hhdCBmcm9tICcuL3JlbmRlcldlYkNoYXQnO1xyXG5pbXBvcnQgY3JlYXRlQnJvd3NlcldlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeSBmcm9tICcuL2NyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnknO1xyXG5pbXBvcnQgZGVmYXVsdENyZWF0ZURpcmVjdExpbmUgZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lJztcclxuXHJcbmNvbnN0IHJlbmRlcldlYkNoYXQgPSBjb3JlUmVuZGVyV2ViQ2hhdC5iaW5kKG51bGwsIFJlYWN0V2ViQ2hhdCk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0TGluZSA9IG9wdGlvbnMgPT4ge1xyXG4gIG9wdGlvbnMuYm90QWdlbnQgJiZcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgJ1dlYiBDaGF0OiBEZXZlbG9wZXJzIGFyZSBub3QgY3VycmVudGx5IGFsbG93ZWQgdG8gc2V0IGJvdEFnZW50IGluIHRoZSBjcmVhdGVEaXJlY3RMaW5lIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9Cb3RGcmFtZXdvcmstV2ViQ2hhdC9pc3N1ZXMvMjExOSBmb3IgbW9yZSBkZXRhaWxzLidcclxuICAgICk7XHJcbiAgcmV0dXJuIGRlZmF1bHRDcmVhdGVEaXJlY3RMaW5lKHsgLi4ub3B0aW9ucywgYm90QWdlbnQ6IGBXZWJDaGF0LyR7dmVyc2lvbn0gKE1pbmltYWwpYCB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0V2ViQ2hhdDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29tcG9uZW50cyxcclxuICBjb25jYXRNaWRkbGV3YXJlLFxyXG4gIGNvbm5lY3RUb1dlYkNoYXQsXHJcbiAgQ29uc3RhbnRzLFxyXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXHJcbiAgY3JlYXRlU3RvcmUsXHJcbiAgY3JlYXRlU3R5bGVTZXQsXHJcbiAgaG9va3MsXHJcbiAgcmVuZGVyV2ViQ2hhdCxcclxuICB2ZXJzaW9uXHJcbn07XHJcblxyXG53aW5kb3dbJ1dlYkNoYXQnXSA9IHtcclxuICAuLi53aW5kb3dbJ1dlYkNoYXQnXSxcclxuICBjb25jYXRNaWRkbGV3YXJlLFxyXG4gIGNvbm5lY3RUb1dlYkNoYXQsXHJcbiAgQ29uc3RhbnRzLFxyXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXHJcbiAgY3JlYXRlRGlyZWN0TGluZSxcclxuICBjcmVhdGVTdG9yZSxcclxuICBjcmVhdGVTdHlsZVNldCxcclxuICBob29rcyxcclxuICBSZWFjdFdlYkNoYXQsXHJcbiAgcmVuZGVyV2ViQ2hhdFxyXG59O1xyXG5cclxuYWRkVmVyc2lvbignbWluaW1hbCcpO1xyXG4iXX0=