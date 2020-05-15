"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _botframeworkWebchatComponent = _interopRequireDefault(require("botframework-webchat-component"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _AdaptiveCardsComposer = _interopRequireDefault(require("./adaptiveCards/AdaptiveCardsComposer"));

var _useComposerProps = _interopRequireDefault(require("./useComposerProps"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Add additional props to <WebChat>, so it support additional features
var FullReactWebChat = function FullReactWebChat(props) {
  var adaptiveCardHostConfig = props.adaptiveCardHostConfig,
      adaptiveCardsHostConfig = props.adaptiveCardsHostConfig,
      adaptiveCardsPackage = props.adaptiveCardsPackage,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["adaptiveCardHostConfig", "adaptiveCardsHostConfig", "adaptiveCardsPackage"]);
  (0, _react.useEffect)(function () {
    adaptiveCardHostConfig && console.warn('Web Chat: "adaptiveCardHostConfig" is deprecated. Please use "adaptiveCardsHostConfig" instead. "adaptiveCardHostConfig" will be removed on or after 2022-01-01.');
  }, [adaptiveCardHostConfig]);
  var composerProps = (0, _useComposerProps.default)(props);
  return _react.default.createElement(_AdaptiveCardsComposer.default, {
    adaptiveCardsHostConfig: adaptiveCardHostConfig || adaptiveCardsHostConfig,
    adaptiveCardsPackage: adaptiveCardsPackage
  }, _react.default.createElement(_botframeworkWebchatComponent.default, (0, _extends2.default)({}, otherProps, composerProps)));
};

FullReactWebChat.defaultProps = _objectSpread({}, _botframeworkWebchatComponent.default.defaultProps, {
  adaptiveCardHostConfig: undefined,
  adaptiveCardsHostConfig: undefined,
  adaptiveCardsPackage: undefined,
  renderMarkdown: undefined
});
FullReactWebChat.propTypes = _objectSpread({}, _botframeworkWebchatComponent.default.propTypes, {
  adaptiveCardHostConfig: _propTypes.default.any,
  adaptiveCardsHostConfig: _propTypes.default.any,
  adaptiveCardsPackage: _propTypes.default.any,
  renderMarkdown: _propTypes.default.func
});
var _default = FullReactWebChat;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GdWxsUmVhY3RXZWJDaGF0LmpzIl0sIm5hbWVzIjpbIkZ1bGxSZWFjdFdlYkNoYXQiLCJwcm9wcyIsImFkYXB0aXZlQ2FyZEhvc3RDb25maWciLCJhZGFwdGl2ZUNhcmRzSG9zdENvbmZpZyIsImFkYXB0aXZlQ2FyZHNQYWNrYWdlIiwib3RoZXJQcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9zZXJQcm9wcyIsImRlZmF1bHRQcm9wcyIsIkJhc2ljV2ViQ2hhdCIsInVuZGVmaW5lZCIsInJlbmRlck1hcmtkb3duIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLEtBQUssRUFBSTtBQUFBLE1BQ3hCQyxzQkFEd0IsR0FDaUVELEtBRGpFLENBQ3hCQyxzQkFEd0I7QUFBQSxNQUNBQyx1QkFEQSxHQUNpRUYsS0FEakUsQ0FDQUUsdUJBREE7QUFBQSxNQUN5QkMsb0JBRHpCLEdBQ2lFSCxLQURqRSxDQUN5Qkcsb0JBRHpCO0FBQUEsTUFDa0RDLFVBRGxELDBDQUNpRUosS0FEakU7QUFHaEMsd0JBQVUsWUFBTTtBQUNkQyxJQUFBQSxzQkFBc0IsSUFDcEJJLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLGtLQURGLENBREY7QUFJRCxHQUxELEVBS0csQ0FBQ0wsc0JBQUQsQ0FMSDtBQU9BLE1BQU1NLGFBQWEsR0FBRywrQkFBaUJQLEtBQWpCLENBQXRCO0FBRUEsU0FDRSw2QkFBQyw4QkFBRDtBQUNFLElBQUEsdUJBQXVCLEVBQUVDLHNCQUFzQixJQUFJQyx1QkFEckQ7QUFFRSxJQUFBLG9CQUFvQixFQUFFQztBQUZ4QixLQUlFLDZCQUFDLHFDQUFELDZCQUFrQkMsVUFBbEIsRUFBa0NHLGFBQWxDLEVBSkYsQ0FERjtBQVFELENBcEJEOztBQXNCQVIsZ0JBQWdCLENBQUNTLFlBQWpCLHFCQUNLQyxzQ0FBYUQsWUFEbEI7QUFFRVAsRUFBQUEsc0JBQXNCLEVBQUVTLFNBRjFCO0FBR0VSLEVBQUFBLHVCQUF1QixFQUFFUSxTQUgzQjtBQUlFUCxFQUFBQSxvQkFBb0IsRUFBRU8sU0FKeEI7QUFLRUMsRUFBQUEsY0FBYyxFQUFFRDtBQUxsQjtBQVFBWCxnQkFBZ0IsQ0FBQ2EsU0FBakIscUJBQ0tILHNDQUFhRyxTQURsQjtBQUVFWCxFQUFBQSxzQkFBc0IsRUFBRVksbUJBQVVDLEdBRnBDO0FBR0VaLEVBQUFBLHVCQUF1QixFQUFFVyxtQkFBVUMsR0FIckM7QUFJRVgsRUFBQUEsb0JBQW9CLEVBQUVVLG1CQUFVQyxHQUpsQztBQUtFSCxFQUFBQSxjQUFjLEVBQUVFLG1CQUFVRTtBQUw1QjtlQVFlaEIsZ0IiLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNpY1dlYkNoYXQgZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBBZGFwdGl2ZUNhcmRzQ29tcG9zZXIgZnJvbSAnLi9hZGFwdGl2ZUNhcmRzL0FkYXB0aXZlQ2FyZHNDb21wb3Nlcic7XHJcbmltcG9ydCB1c2VDb21wb3NlclByb3BzIGZyb20gJy4vdXNlQ29tcG9zZXJQcm9wcyc7XHJcblxyXG4vLyBBZGQgYWRkaXRpb25hbCBwcm9wcyB0byA8V2ViQ2hhdD4sIHNvIGl0IHN1cHBvcnQgYWRkaXRpb25hbCBmZWF0dXJlc1xyXG5jb25zdCBGdWxsUmVhY3RXZWJDaGF0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgYWRhcHRpdmVDYXJkSG9zdENvbmZpZywgYWRhcHRpdmVDYXJkc0hvc3RDb25maWcsIGFkYXB0aXZlQ2FyZHNQYWNrYWdlLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFkYXB0aXZlQ2FyZEhvc3RDb25maWcgJiZcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdXZWIgQ2hhdDogXCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnXCIgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBcImFkYXB0aXZlQ2FyZHNIb3N0Q29uZmlnXCIgaW5zdGVhZC4gXCJhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnXCIgd2lsbCBiZSByZW1vdmVkIG9uIG9yIGFmdGVyIDIwMjItMDEtMDEuJ1xyXG4gICAgICApO1xyXG4gIH0sIFthZGFwdGl2ZUNhcmRIb3N0Q29uZmlnXSk7XHJcblxyXG4gIGNvbnN0IGNvbXBvc2VyUHJvcHMgPSB1c2VDb21wb3NlclByb3BzKHByb3BzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBZGFwdGl2ZUNhcmRzQ29tcG9zZXJcclxuICAgICAgYWRhcHRpdmVDYXJkc0hvc3RDb25maWc9e2FkYXB0aXZlQ2FyZEhvc3RDb25maWcgfHwgYWRhcHRpdmVDYXJkc0hvc3RDb25maWd9XHJcbiAgICAgIGFkYXB0aXZlQ2FyZHNQYWNrYWdlPXthZGFwdGl2ZUNhcmRzUGFja2FnZX1cclxuICAgID5cclxuICAgICAgPEJhc2ljV2ViQ2hhdCB7Li4ub3RoZXJQcm9wc30gey4uLmNvbXBvc2VyUHJvcHN9IC8+XHJcbiAgICA8L0FkYXB0aXZlQ2FyZHNDb21wb3Nlcj5cclxuICApO1xyXG59O1xyXG5cclxuRnVsbFJlYWN0V2ViQ2hhdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgLi4uQmFzaWNXZWJDaGF0LmRlZmF1bHRQcm9wcyxcclxuICBhZGFwdGl2ZUNhcmRIb3N0Q29uZmlnOiB1bmRlZmluZWQsXHJcbiAgYWRhcHRpdmVDYXJkc0hvc3RDb25maWc6IHVuZGVmaW5lZCxcclxuICBhZGFwdGl2ZUNhcmRzUGFja2FnZTogdW5kZWZpbmVkLFxyXG4gIHJlbmRlck1hcmtkb3duOiB1bmRlZmluZWRcclxufTtcclxuXHJcbkZ1bGxSZWFjdFdlYkNoYXQucHJvcFR5cGVzID0ge1xyXG4gIC4uLkJhc2ljV2ViQ2hhdC5wcm9wVHlwZXMsXHJcbiAgYWRhcHRpdmVDYXJkSG9zdENvbmZpZzogUHJvcFR5cGVzLmFueSxcclxuICBhZGFwdGl2ZUNhcmRzSG9zdENvbmZpZzogUHJvcFR5cGVzLmFueSxcclxuICBhZGFwdGl2ZUNhcmRzUGFja2FnZTogUHJvcFR5cGVzLmFueSxcclxuICByZW5kZXJNYXJrZG93bjogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxSZWFjdFdlYkNoYXQ7XHJcbiJdfQ==