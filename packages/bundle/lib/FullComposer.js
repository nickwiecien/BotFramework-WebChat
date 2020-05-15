"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AdaptiveCardsComposer = _interopRequireDefault(require("./adaptiveCards/AdaptiveCardsComposer"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _useComposerProps = _interopRequireDefault(require("./useComposerProps"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Composer = _botframeworkWebchatComponent.Components.Composer;

var FullComposer = function FullComposer(props) {
  var adaptiveCardsHostConfig = props.adaptiveCardsHostConfig,
      adaptiveCardsPackage = props.adaptiveCardsPackage,
      children = props.children,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["adaptiveCardsHostConfig", "adaptiveCardsPackage", "children"]);
  var composerProps = (0, _useComposerProps.default)(props);
  return _react.default.createElement(_AdaptiveCardsComposer.default, {
    adaptiveCardsHostConfig: adaptiveCardsHostConfig,
    adaptiveCardsPackage: adaptiveCardsPackage
  }, _react.default.createElement(Composer, (0, _extends2.default)({}, otherProps, composerProps), children));
};

FullComposer.defaultProps = _objectSpread({}, Composer.defaultProps, {
  adaptiveCardsHostConfig: undefined,
  adaptiveCardsPackage: undefined,
  children: undefined
});
FullComposer.propTypes = _objectSpread({}, Composer.propTypes, {
  adaptiveCardsHostConfig: _propTypes.default.any,
  adaptiveCardsPackage: _propTypes.default.any,
  children: _propTypes.default.any
});
var _default = FullComposer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GdWxsQ29tcG9zZXIuanMiXSwibmFtZXMiOlsiQ29tcG9zZXIiLCJDb21wb25lbnRzIiwiRnVsbENvbXBvc2VyIiwicHJvcHMiLCJhZGFwdGl2ZUNhcmRzSG9zdENvbmZpZyIsImFkYXB0aXZlQ2FyZHNQYWNrYWdlIiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwiY29tcG9zZXJQcm9wcyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7OztJQUVRQSxRLEdBQWFDLHdDLENBQWJELFE7O0FBRVIsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFDcEJDLHVCQURvQixHQUN1REQsS0FEdkQsQ0FDcEJDLHVCQURvQjtBQUFBLE1BQ0tDLG9CQURMLEdBQ3VERixLQUR2RCxDQUNLRSxvQkFETDtBQUFBLE1BQzJCQyxRQUQzQixHQUN1REgsS0FEdkQsQ0FDMkJHLFFBRDNCO0FBQUEsTUFDd0NDLFVBRHhDLDBDQUN1REosS0FEdkQ7QUFFNUIsTUFBTUssYUFBYSxHQUFHLCtCQUFpQkwsS0FBakIsQ0FBdEI7QUFFQSxTQUNFLDZCQUFDLDhCQUFEO0FBQ0UsSUFBQSx1QkFBdUIsRUFBRUMsdUJBRDNCO0FBRUUsSUFBQSxvQkFBb0IsRUFBRUM7QUFGeEIsS0FJRSw2QkFBQyxRQUFELDZCQUFjRSxVQUFkLEVBQThCQyxhQUE5QixHQUNHRixRQURILENBSkYsQ0FERjtBQVVELENBZEQ7O0FBZ0JBSixZQUFZLENBQUNPLFlBQWIscUJBQ0tULFFBQVEsQ0FBQ1MsWUFEZDtBQUVFTCxFQUFBQSx1QkFBdUIsRUFBRU0sU0FGM0I7QUFHRUwsRUFBQUEsb0JBQW9CLEVBQUVLLFNBSHhCO0FBSUVKLEVBQUFBLFFBQVEsRUFBRUk7QUFKWjtBQU9BUixZQUFZLENBQUNTLFNBQWIscUJBQ0tYLFFBQVEsQ0FBQ1csU0FEZDtBQUVFUCxFQUFBQSx1QkFBdUIsRUFBRVEsbUJBQVVDLEdBRnJDO0FBR0VSLEVBQUFBLG9CQUFvQixFQUFFTyxtQkFBVUMsR0FIbEM7QUFJRVAsRUFBQUEsUUFBUSxFQUFFTSxtQkFBVUM7QUFKdEI7ZUFPZVgsWSIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBBZGFwdGl2ZUNhcmRzQ29tcG9zZXIgZnJvbSAnLi9hZGFwdGl2ZUNhcmRzL0FkYXB0aXZlQ2FyZHNDb21wb3Nlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHVzZUNvbXBvc2VyUHJvcHMgZnJvbSAnLi91c2VDb21wb3NlclByb3BzJztcclxuXHJcbmNvbnN0IHsgQ29tcG9zZXIgfSA9IENvbXBvbmVudHM7XHJcblxyXG5jb25zdCBGdWxsQ29tcG9zZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBhZGFwdGl2ZUNhcmRzSG9zdENvbmZpZywgYWRhcHRpdmVDYXJkc1BhY2thZ2UsIGNoaWxkcmVuLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcclxuICBjb25zdCBjb21wb3NlclByb3BzID0gdXNlQ29tcG9zZXJQcm9wcyhwcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWRhcHRpdmVDYXJkc0NvbXBvc2VyXHJcbiAgICAgIGFkYXB0aXZlQ2FyZHNIb3N0Q29uZmlnPXthZGFwdGl2ZUNhcmRzSG9zdENvbmZpZ31cclxuICAgICAgYWRhcHRpdmVDYXJkc1BhY2thZ2U9e2FkYXB0aXZlQ2FyZHNQYWNrYWdlfVxyXG4gICAgPlxyXG4gICAgICA8Q29tcG9zZXIgey4uLm90aGVyUHJvcHN9IHsuLi5jb21wb3NlclByb3BzfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ29tcG9zZXI+XHJcbiAgICA8L0FkYXB0aXZlQ2FyZHNDb21wb3Nlcj5cclxuICApO1xyXG59O1xyXG5cclxuRnVsbENvbXBvc2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAuLi5Db21wb3Nlci5kZWZhdWx0UHJvcHMsXHJcbiAgYWRhcHRpdmVDYXJkc0hvc3RDb25maWc6IHVuZGVmaW5lZCxcclxuICBhZGFwdGl2ZUNhcmRzUGFja2FnZTogdW5kZWZpbmVkLFxyXG4gIGNoaWxkcmVuOiB1bmRlZmluZWRcclxufTtcclxuXHJcbkZ1bGxDb21wb3Nlci5wcm9wVHlwZXMgPSB7XHJcbiAgLi4uQ29tcG9zZXIucHJvcFR5cGVzLFxyXG4gIGFkYXB0aXZlQ2FyZHNIb3N0Q29uZmlnOiBQcm9wVHlwZXMuYW55LFxyXG4gIGFkYXB0aXZlQ2FyZHNQYWNrYWdlOiBQcm9wVHlwZXMuYW55LFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdWxsQ29tcG9zZXI7XHJcbiJdfQ==