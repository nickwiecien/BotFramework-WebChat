"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAdaptiveCardsStyleSet;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _AdaptiveCardRenderer = _interopRequireDefault(require("./StyleSet/AdaptiveCardRenderer"));

var _AnimationCardAttachment = _interopRequireDefault(require("./StyleSet/AnimationCardAttachment"));

var _AudioCardAttachment = _interopRequireDefault(require("./StyleSet/AudioCardAttachment"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TODO: [P4] We should add a notice for people who want to use "styleSet" instead of "styleOptions".
//       "styleSet" is actually CSS stylesheet and it is based on the DOM tree.
//       DOM tree may change from time to time, thus, maintaining "styleSet" becomes a constant effort.
function createAdaptiveCardsStyleSet(options) {
  options = _objectSpread({}, _botframeworkWebchatComponent.defaultStyleOptions, {}, options);
  return {
    adaptiveCardRenderer: (0, _AdaptiveCardRenderer.default)(options),
    animationCardAttachment: (0, _AnimationCardAttachment.default)(options),
    audioCardAttachment: (0, _AudioCardAttachment.default)(options)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9jcmVhdGVBZGFwdGl2ZUNhcmRzU3R5bGVTZXQuanMiXSwibmFtZXMiOlsiY3JlYXRlQWRhcHRpdmVDYXJkc1N0eWxlU2V0Iiwib3B0aW9ucyIsImRlZmF1bHRTdHlsZU9wdGlvbnMiLCJhZGFwdGl2ZUNhcmRSZW5kZXJlciIsImFuaW1hdGlvbkNhcmRBdHRhY2htZW50IiwiYXVkaW9DYXJkQXR0YWNobWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsMkJBQVQsQ0FBcUNDLE9BQXJDLEVBQThDO0FBQzNEQSxFQUFBQSxPQUFPLHFCQUFRQyxpREFBUixNQUFnQ0QsT0FBaEMsQ0FBUDtBQUVBLFNBQU87QUFDTEUsSUFBQUEsb0JBQW9CLEVBQUUsbUNBQWdDRixPQUFoQyxDQURqQjtBQUVMRyxJQUFBQSx1QkFBdUIsRUFBRSxzQ0FBbUNILE9BQW5DLENBRnBCO0FBR0xJLElBQUFBLG1CQUFtQixFQUFFLGtDQUErQkosT0FBL0I7QUFIaEIsR0FBUDtBQUtEIiwic291cmNlUm9vdCI6ImJ1bmRsZTovLy8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0U3R5bGVPcHRpb25zIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBjcmVhdGVBZGFwdGl2ZUNhcmRSZW5kZXJlclN0eWxlIGZyb20gJy4vU3R5bGVTZXQvQWRhcHRpdmVDYXJkUmVuZGVyZXInO1xyXG5pbXBvcnQgY3JlYXRlQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZSBmcm9tICcuL1N0eWxlU2V0L0FuaW1hdGlvbkNhcmRBdHRhY2htZW50JztcclxuaW1wb3J0IGNyZWF0ZUF1ZGlvQ2FyZEF0dGFjaG1lbnRTdHlsZSBmcm9tICcuL1N0eWxlU2V0L0F1ZGlvQ2FyZEF0dGFjaG1lbnQnO1xyXG5cclxuLy8gVE9ETzogW1A0XSBXZSBzaG91bGQgYWRkIGEgbm90aWNlIGZvciBwZW9wbGUgd2hvIHdhbnQgdG8gdXNlIFwic3R5bGVTZXRcIiBpbnN0ZWFkIG9mIFwic3R5bGVPcHRpb25zXCIuXHJcbi8vICAgICAgIFwic3R5bGVTZXRcIiBpcyBhY3R1YWxseSBDU1Mgc3R5bGVzaGVldCBhbmQgaXQgaXMgYmFzZWQgb24gdGhlIERPTSB0cmVlLlxyXG4vLyAgICAgICBET00gdHJlZSBtYXkgY2hhbmdlIGZyb20gdGltZSB0byB0aW1lLCB0aHVzLCBtYWludGFpbmluZyBcInN0eWxlU2V0XCIgYmVjb21lcyBhIGNvbnN0YW50IGVmZm9ydC5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFkYXB0aXZlQ2FyZHNTdHlsZVNldChvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IHsgLi4uZGVmYXVsdFN0eWxlT3B0aW9ucywgLi4ub3B0aW9ucyB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRhcHRpdmVDYXJkUmVuZGVyZXI6IGNyZWF0ZUFkYXB0aXZlQ2FyZFJlbmRlcmVyU3R5bGUob3B0aW9ucyksXHJcbiAgICBhbmltYXRpb25DYXJkQXR0YWNobWVudDogY3JlYXRlQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnRTdHlsZShvcHRpb25zKSxcclxuICAgIGF1ZGlvQ2FyZEF0dGFjaG1lbnQ6IGNyZWF0ZUF1ZGlvQ2FyZEF0dGFjaG1lbnRTdHlsZShvcHRpb25zKVxyXG4gIH07XHJcbn1cclxuIl19