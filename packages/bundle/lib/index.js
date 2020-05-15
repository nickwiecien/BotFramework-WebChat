"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createDirectLine: true,
  Components: true,
  hooks: true,
  renderWebChat: true,
  createAdaptiveCardsAttachmentMiddleware: true,
  createCognitiveServicesSpeechServicesPonyfillFactory: true,
  createStyleSet: true,
  createDirectLineSpeechAdapters: true,
  renderMarkdown: true
};
Object.defineProperty(exports, "createAdaptiveCardsAttachmentMiddleware", {
  enumerable: true,
  get: function get() {
    return _createAdaptiveCardsAttachmentMiddleware.default;
  }
});
Object.defineProperty(exports, "createCognitiveServicesSpeechServicesPonyfillFactory", {
  enumerable: true,
  get: function get() {
    return _createCognitiveServicesSpeechServicesPonyfillFactory.default;
  }
});
Object.defineProperty(exports, "createStyleSet", {
  enumerable: true,
  get: function get() {
    return _createFullStyleSet.default;
  }
});
Object.defineProperty(exports, "createDirectLineSpeechAdapters", {
  enumerable: true,
  get: function get() {
    return _createDirectLineSpeechAdapters.default;
  }
});
Object.defineProperty(exports, "renderMarkdown", {
  enumerable: true,
  get: function get() {
    return _renderMarkdown.default;
  }
});
exports.renderWebChat = exports.hooks = exports.Components = exports.default = exports.createDirectLine = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _indexMinimal = require("./index-minimal");

Object.keys(_indexMinimal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexMinimal[key];
    }
  });
});

var _addVersion = _interopRequireDefault(require("./addVersion"));

var _renderWebChat = _interopRequireDefault(require("./renderWebChat"));

var _createAdaptiveCardsAttachmentMiddleware = _interopRequireDefault(require("./adaptiveCards/createAdaptiveCardsAttachmentMiddleware"));

var _createCognitiveServicesSpeechServicesPonyfillFactory = _interopRequireDefault(require("./createCognitiveServicesSpeechServicesPonyfillFactory"));

var _createFullStyleSet = _interopRequireDefault(require("./createFullStyleSet"));

var _createDirectLineSpeechAdapters = _interopRequireDefault(require("./createDirectLineSpeechAdapters"));

var _createDirectLine = _interopRequireDefault(require("./createDirectLine"));

var _FullComposer = _interopRequireDefault(require("./FullComposer"));

var _FullReactWebChat = _interopRequireDefault(require("./FullReactWebChat"));

var _renderMarkdown = _interopRequireDefault(require("./renderMarkdown"));

var _useAdaptiveCardsHostConfig = _interopRequireDefault(require("./adaptiveCards/hooks/useAdaptiveCardsHostConfig"));

var _useAdaptiveCardsPackage = _interopRequireDefault(require("./adaptiveCards/hooks/useAdaptiveCardsPackage"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var renderWebChat = _renderWebChat.default.bind(null, _FullReactWebChat.default);

exports.renderWebChat = renderWebChat;

var createDirectLine = function createDirectLine(options) {
  options.botAgent && console.warn('Web Chat: Developers are not currently allowed to set botAgent. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.');
  return (0, _createDirectLine.default)(_objectSpread({}, options, {
    botAgent: "WebChat/".concat(_indexMinimal.version, " (Full)")
  }));
};

exports.createDirectLine = createDirectLine;

var patchedHooks = _objectSpread({}, _indexMinimal.hooks, {
  useAdaptiveCardsHostConfig: _useAdaptiveCardsHostConfig.default,
  useAdaptiveCardsPackage: _useAdaptiveCardsPackage.default
});

exports.hooks = patchedHooks;

var Components = _objectSpread({}, _indexMinimal.Components, {
  Composer: _FullComposer.default
});

exports.Components = Components;
var _default = _FullReactWebChat.default;
exports.default = _default;
window['WebChat'] = _objectSpread({}, window['WebChat'], {
  createAdaptiveCardsAttachmentMiddleware: _createAdaptiveCardsAttachmentMiddleware.default,
  createCognitiveServicesSpeechServicesPonyfillFactory: _createCognitiveServicesSpeechServicesPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createDirectLineSpeechAdapters: _createDirectLineSpeechAdapters.default,
  createStyleSet: _createFullStyleSet.default,
  hooks: patchedHooks,
  ReactWebChat: _FullReactWebChat.default,
  renderMarkdown: _renderMarkdown.default,
  renderWebChat: renderWebChat
});
(0, _addVersion.default)('full');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJyZW5kZXJXZWJDaGF0IiwiY29yZVJlbmRlcldlYkNoYXQiLCJiaW5kIiwiUmVhY3RXZWJDaGF0IiwiY3JlYXRlRGlyZWN0TGluZSIsIm9wdGlvbnMiLCJib3RBZ2VudCIsImNvbnNvbGUiLCJ3YXJuIiwidmVyc2lvbiIsInBhdGNoZWRIb29rcyIsImhvb2tzIiwidXNlQWRhcHRpdmVDYXJkc0hvc3RDb25maWciLCJ1c2VBZGFwdGl2ZUNhcmRzUGFja2FnZSIsIkNvbXBvbmVudHMiLCJNaW5pbWFsQ29tcG9uZW50cyIsIkNvbXBvc2VyIiwiRnVsbENvbXBvc2VyIiwid2luZG93IiwiY3JlYXRlQWRhcHRpdmVDYXJkc0F0dGFjaG1lbnRNaWRkbGV3YXJlIiwiY3JlYXRlQ29nbml0aXZlU2VydmljZXNTcGVlY2hTZXJ2aWNlc1BvbnlmaWxsRmFjdG9yeSIsImNyZWF0ZURpcmVjdExpbmVTcGVlY2hBZGFwdGVycyIsImNyZWF0ZVN0eWxlU2V0IiwicmVuZGVyTWFya2Rvd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx1QkFBa0JDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCQyx5QkFBN0IsQ0FBdEI7Ozs7QUFFTyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLE9BQU8sRUFBSTtBQUN6Q0EsRUFBQUEsT0FBTyxDQUFDQyxRQUFSLElBQ0VDLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLHFKQURGLENBREY7QUFJQSxTQUFPLGlEQUE2QkgsT0FBN0I7QUFBc0NDLElBQUFBLFFBQVEsb0JBQWFHLHFCQUFiO0FBQTlDLEtBQVA7QUFDRCxDQU5NOzs7O0FBUVAsSUFBTUMsWUFBWSxxQkFDYkMsbUJBRGE7QUFFaEJDLEVBQUFBLDBCQUEwQixFQUExQkEsbUNBRmdCO0FBR2hCQyxFQUFBQSx1QkFBdUIsRUFBdkJBO0FBSGdCLEVBQWxCOzs7O0FBTUEsSUFBTUMsVUFBVSxxQkFDWEMsd0JBRFc7QUFFZEMsRUFBQUEsUUFBUSxFQUFFQztBQUZJLEVBQWhCOzs7ZUFLZWQseUI7O0FBYWZlLE1BQU0sQ0FBQyxTQUFELENBQU4scUJBQ0tBLE1BQU0sQ0FBQyxTQUFELENBRFg7QUFFRUMsRUFBQUEsdUNBQXVDLEVBQXZDQSxnREFGRjtBQUdFQyxFQUFBQSxvREFBb0QsRUFBcERBLDZEQUhGO0FBSUVoQixFQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUpGO0FBS0VpQixFQUFBQSw4QkFBOEIsRUFBOUJBLHVDQUxGO0FBTUVDLEVBQUFBLGNBQWMsRUFBZEEsMkJBTkY7QUFPRVgsRUFBQUEsS0FBSyxFQUFFRCxZQVBUO0FBUUVQLEVBQUFBLFlBQVksRUFBWkEseUJBUkY7QUFTRW9CLEVBQUFBLGNBQWMsRUFBZEEsdUJBVEY7QUFVRXZCLEVBQUFBLGFBQWEsRUFBYkE7QUFWRjtBQWFBLHlCQUFXLE1BQVgiLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBkb3Qtbm90YXRpb246IFtcImVycm9yXCIsIHsgXCJhbGxvd1BhdHRlcm5cIjogXCJeV2ViQ2hhdCRcIiB9XSAqL1xyXG4vLyB3aW5kb3dbJ1dlYkNoYXQnXSBpcyByZXF1aXJlZCBmb3IgVHlwZVNjcmlwdFxyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9pbmRleC1taW5pbWFsJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHMgYXMgTWluaW1hbENvbXBvbmVudHMsIGhvb2tzLCB2ZXJzaW9uIH0gZnJvbSAnLi9pbmRleC1taW5pbWFsJztcclxuaW1wb3J0IGFkZFZlcnNpb24gZnJvbSAnLi9hZGRWZXJzaW9uJztcclxuaW1wb3J0IGNvcmVSZW5kZXJXZWJDaGF0IGZyb20gJy4vcmVuZGVyV2ViQ2hhdCc7XHJcbmltcG9ydCBjcmVhdGVBZGFwdGl2ZUNhcmRzQXR0YWNobWVudE1pZGRsZXdhcmUgZnJvbSAnLi9hZGFwdGl2ZUNhcmRzL2NyZWF0ZUFkYXB0aXZlQ2FyZHNBdHRhY2htZW50TWlkZGxld2FyZSc7XHJcbmltcG9ydCBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5IGZyb20gJy4vY3JlYXRlQ29nbml0aXZlU2VydmljZXNTcGVlY2hTZXJ2aWNlc1BvbnlmaWxsRmFjdG9yeSc7XHJcbmltcG9ydCBjcmVhdGVTdHlsZVNldCBmcm9tICcuL2NyZWF0ZUZ1bGxTdHlsZVNldCc7XHJcbmltcG9ydCBjcmVhdGVEaXJlY3RMaW5lU3BlZWNoQWRhcHRlcnMgZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lU3BlZWNoQWRhcHRlcnMnO1xyXG5pbXBvcnQgZGVmYXVsdENyZWF0ZURpcmVjdExpbmUgZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lJztcclxuaW1wb3J0IEZ1bGxDb21wb3NlciBmcm9tICcuL0Z1bGxDb21wb3Nlcic7XHJcbmltcG9ydCBSZWFjdFdlYkNoYXQgZnJvbSAnLi9GdWxsUmVhY3RXZWJDaGF0JztcclxuaW1wb3J0IHJlbmRlck1hcmtkb3duIGZyb20gJy4vcmVuZGVyTWFya2Rvd24nO1xyXG5pbXBvcnQgdXNlQWRhcHRpdmVDYXJkc0hvc3RDb25maWcgZnJvbSAnLi9hZGFwdGl2ZUNhcmRzL2hvb2tzL3VzZUFkYXB0aXZlQ2FyZHNIb3N0Q29uZmlnJztcclxuaW1wb3J0IHVzZUFkYXB0aXZlQ2FyZHNQYWNrYWdlIGZyb20gJy4vYWRhcHRpdmVDYXJkcy9ob29rcy91c2VBZGFwdGl2ZUNhcmRzUGFja2FnZSc7XHJcblxyXG5jb25zdCByZW5kZXJXZWJDaGF0ID0gY29yZVJlbmRlcldlYkNoYXQuYmluZChudWxsLCBSZWFjdFdlYkNoYXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpcmVjdExpbmUgPSBvcHRpb25zID0+IHtcclxuICBvcHRpb25zLmJvdEFnZW50ICYmXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICdXZWIgQ2hhdDogRGV2ZWxvcGVycyBhcmUgbm90IGN1cnJlbnRseSBhbGxvd2VkIHRvIHNldCBib3RBZ2VudC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvQm90RnJhbWV3b3JrLVdlYkNoYXQvaXNzdWVzLzIxMTkgZm9yIG1vcmUgZGV0YWlscy4nXHJcbiAgICApO1xyXG4gIHJldHVybiBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZSh7IC4uLm9wdGlvbnMsIGJvdEFnZW50OiBgV2ViQ2hhdC8ke3ZlcnNpb259IChGdWxsKWAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwYXRjaGVkSG9va3MgPSB7XHJcbiAgLi4uaG9va3MsXHJcbiAgdXNlQWRhcHRpdmVDYXJkc0hvc3RDb25maWcsXHJcbiAgdXNlQWRhcHRpdmVDYXJkc1BhY2thZ2VcclxufTtcclxuXHJcbmNvbnN0IENvbXBvbmVudHMgPSB7XHJcbiAgLi4uTWluaW1hbENvbXBvbmVudHMsXHJcbiAgQ29tcG9zZXI6IEZ1bGxDb21wb3NlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RXZWJDaGF0O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb21wb25lbnRzLFxyXG4gIGNyZWF0ZUFkYXB0aXZlQ2FyZHNBdHRhY2htZW50TWlkZGxld2FyZSxcclxuICBjcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5LFxyXG4gIGNyZWF0ZURpcmVjdExpbmVTcGVlY2hBZGFwdGVycyxcclxuICBjcmVhdGVTdHlsZVNldCxcclxuICBwYXRjaGVkSG9va3MgYXMgaG9va3MsXHJcbiAgcmVuZGVyTWFya2Rvd24sXHJcbiAgcmVuZGVyV2ViQ2hhdFxyXG59O1xyXG5cclxud2luZG93WydXZWJDaGF0J10gPSB7XHJcbiAgLi4ud2luZG93WydXZWJDaGF0J10sXHJcbiAgY3JlYXRlQWRhcHRpdmVDYXJkc0F0dGFjaG1lbnRNaWRkbGV3YXJlLFxyXG4gIGNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnksXHJcbiAgY3JlYXRlRGlyZWN0TGluZSxcclxuICBjcmVhdGVEaXJlY3RMaW5lU3BlZWNoQWRhcHRlcnMsXHJcbiAgY3JlYXRlU3R5bGVTZXQsXHJcbiAgaG9va3M6IHBhdGNoZWRIb29rcyxcclxuICBSZWFjdFdlYkNoYXQsXHJcbiAgcmVuZGVyTWFya2Rvd24sXHJcbiAgcmVuZGVyV2ViQ2hhdFxyXG59O1xyXG5cclxuYWRkVmVyc2lvbignZnVsbCcpO1xyXG4iXX0=