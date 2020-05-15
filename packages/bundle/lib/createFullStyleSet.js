"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFullStyleSet;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _createAdaptiveCardsStyleSet = _interopRequireDefault(require("./adaptiveCards/Styles/createAdaptiveCardsStyleSet"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TODO: [P4] We should add a notice for people who want to use "styleSet" instead of "styleOptions".
//       "styleSet" is actually CSS stylesheet and it is based on the DOM tree.
//       DOM tree may change from time to time, thus, maintaining "styleSet" becomes a constant effort.
function createFullStyleSet(options) {
  return _objectSpread({}, (0, _botframeworkWebchatComponent.createStyleSet)(options), {}, (0, _createAdaptiveCardsStyleSet.default)(options));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVGdWxsU3R5bGVTZXQuanMiXSwibmFtZXMiOlsiY3JlYXRlRnVsbFN0eWxlU2V0Iiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0Esa0JBQVQsQ0FBNEJDLE9BQTVCLEVBQXFDO0FBQ2xELDJCQUNLLGtEQUFlQSxPQUFmLENBREwsTUFFSywwQ0FBNEJBLE9BQTVCLENBRkw7QUFJRCIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVTZXQgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xyXG5pbXBvcnQgY3JlYXRlQWRhcHRpdmVDYXJkc1N0eWxlU2V0IGZyb20gJy4vYWRhcHRpdmVDYXJkcy9TdHlsZXMvY3JlYXRlQWRhcHRpdmVDYXJkc1N0eWxlU2V0JztcclxuXHJcbi8vIFRPRE86IFtQNF0gV2Ugc2hvdWxkIGFkZCBhIG5vdGljZSBmb3IgcGVvcGxlIHdobyB3YW50IHRvIHVzZSBcInN0eWxlU2V0XCIgaW5zdGVhZCBvZiBcInN0eWxlT3B0aW9uc1wiLlxyXG4vLyAgICAgICBcInN0eWxlU2V0XCIgaXMgYWN0dWFsbHkgQ1NTIHN0eWxlc2hlZXQgYW5kIGl0IGlzIGJhc2VkIG9uIHRoZSBET00gdHJlZS5cclxuLy8gICAgICAgRE9NIHRyZWUgbWF5IGNoYW5nZSBmcm9tIHRpbWUgdG8gdGltZSwgdGh1cywgbWFpbnRhaW5pbmcgXCJzdHlsZVNldFwiIGJlY29tZXMgYSBjb25zdGFudCBlZmZvcnQuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGdWxsU3R5bGVTZXQob3B0aW9ucykge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5jcmVhdGVTdHlsZVNldChvcHRpb25zKSxcclxuICAgIC4uLmNyZWF0ZUFkYXB0aXZlQ2FyZHNTdHlsZVNldChvcHRpb25zKVxyXG4gIH07XHJcbn1cclxuIl19