"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useComposerProps;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _createAdaptiveCardsAttachmentMiddleware = _interopRequireDefault(require("./adaptiveCards/createAdaptiveCardsAttachmentMiddleware"));

var _createAdaptiveCardsStyleSet = _interopRequireDefault(require("./adaptiveCards/Styles/createAdaptiveCardsStyleSet"));

var _renderMarkdown = _interopRequireDefault(require("./renderMarkdown"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useComposerProps(_ref) {
  var attachmentMiddleware = _ref.attachmentMiddleware,
      renderMarkdown = _ref.renderMarkdown,
      styleOptions = _ref.styleOptions,
      styleSet = _ref.styleSet;
  var patchedAttachmentMiddleware = (0, _react.useMemo)(function () {
    return (0, _botframeworkWebchatComponent.concatMiddleware)(attachmentMiddleware, (0, _createAdaptiveCardsAttachmentMiddleware.default)());
  }, [attachmentMiddleware]);
  var patchedStyleOptions = (0, _react.useMemo)(function () {
    return _objectSpread({}, _botframeworkWebchatComponent.defaultStyleOptions, {}, styleOptions);
  }, [styleOptions]); // When styleSet is not specified, the styleOptions will be used to create Adaptive Cards styleSet and merged into useStyleSet.

  var extraStyleSet = (0, _react.useMemo)(function () {
    return styleSet ? undefined : (0, _createAdaptiveCardsStyleSet.default)(patchedStyleOptions);
  }, [patchedStyleOptions, styleSet]);
  return {
    attachmentMiddleware: patchedAttachmentMiddleware,
    extraStyleSet: extraStyleSet,
    renderMarkdown: typeof renderMarkdown === 'undefined' ? function (text) {
      return (0, _renderMarkdown.default)(text, patchedStyleOptions);
    } : renderMarkdown
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VDb21wb3NlclByb3BzLmpzIl0sIm5hbWVzIjpbInVzZUNvbXBvc2VyUHJvcHMiLCJhdHRhY2htZW50TWlkZGxld2FyZSIsInJlbmRlck1hcmtkb3duIiwic3R5bGVPcHRpb25zIiwic3R5bGVTZXQiLCJwYXRjaGVkQXR0YWNobWVudE1pZGRsZXdhcmUiLCJwYXRjaGVkU3R5bGVPcHRpb25zIiwiZGVmYXVsdFN0eWxlT3B0aW9ucyIsImV4dHJhU3R5bGVTZXQiLCJ1bmRlZmluZWQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxnQkFBVCxPQUE0RjtBQUFBLE1BQWhFQyxvQkFBZ0UsUUFBaEVBLG9CQUFnRTtBQUFBLE1BQTFDQyxjQUEwQyxRQUExQ0EsY0FBMEM7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pHLE1BQU1DLDJCQUEyQixHQUFHLG9CQUNsQztBQUFBLFdBQU0sb0RBQWlCSixvQkFBakIsRUFBdUMsdURBQXZDLENBQU47QUFBQSxHQURrQyxFQUVsQyxDQUFDQSxvQkFBRCxDQUZrQyxDQUFwQztBQUtBLE1BQU1LLG1CQUFtQixHQUFHLG9CQUFRO0FBQUEsNkJBQVlDLGlEQUFaLE1BQW9DSixZQUFwQztBQUFBLEdBQVIsRUFBNkQsQ0FBQ0EsWUFBRCxDQUE3RCxDQUE1QixDQU55RyxDQVF6Rzs7QUFDQSxNQUFNSyxhQUFhLEdBQUcsb0JBQVE7QUFBQSxXQUFPSixRQUFRLEdBQUdLLFNBQUgsR0FBZSwwQ0FBNEJILG1CQUE1QixDQUE5QjtBQUFBLEdBQVIsRUFBeUYsQ0FDN0dBLG1CQUQ2RyxFQUU3R0YsUUFGNkcsQ0FBekYsQ0FBdEI7QUFLQSxTQUFPO0FBQ0xILElBQUFBLG9CQUFvQixFQUFFSSwyQkFEakI7QUFFTEcsSUFBQUEsYUFBYSxFQUFiQSxhQUZLO0FBR0xOLElBQUFBLGNBQWMsRUFDWixPQUFPQSxjQUFQLEtBQTBCLFdBQTFCLEdBQXdDLFVBQUFRLElBQUk7QUFBQSxhQUFJLDZCQUFzQkEsSUFBdEIsRUFBNEJKLG1CQUE1QixDQUFKO0FBQUEsS0FBNUMsR0FBbUdKO0FBSmhHLEdBQVA7QUFNRCIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGNvbmNhdE1pZGRsZXdhcmUsIGRlZmF1bHRTdHlsZU9wdGlvbnMgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xyXG5pbXBvcnQgY3JlYXRlQWRhcHRpdmVDYXJkc0F0dGFjaG1lbnRNaWRkbGV3YXJlIGZyb20gJy4vYWRhcHRpdmVDYXJkcy9jcmVhdGVBZGFwdGl2ZUNhcmRzQXR0YWNobWVudE1pZGRsZXdhcmUnO1xyXG5pbXBvcnQgY3JlYXRlQWRhcHRpdmVDYXJkc1N0eWxlU2V0IGZyb20gJy4vYWRhcHRpdmVDYXJkcy9TdHlsZXMvY3JlYXRlQWRhcHRpdmVDYXJkc1N0eWxlU2V0JztcclxuaW1wb3J0IGRlZmF1bHRSZW5kZXJNYXJrZG93biBmcm9tICcuL3JlbmRlck1hcmtkb3duJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvbXBvc2VyUHJvcHMoeyBhdHRhY2htZW50TWlkZGxld2FyZSwgcmVuZGVyTWFya2Rvd24sIHN0eWxlT3B0aW9ucywgc3R5bGVTZXQgfSkge1xyXG4gIGNvbnN0IHBhdGNoZWRBdHRhY2htZW50TWlkZGxld2FyZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBjb25jYXRNaWRkbGV3YXJlKGF0dGFjaG1lbnRNaWRkbGV3YXJlLCBjcmVhdGVBZGFwdGl2ZUNhcmRzQXR0YWNobWVudE1pZGRsZXdhcmUoKSksXHJcbiAgICBbYXR0YWNobWVudE1pZGRsZXdhcmVdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcGF0Y2hlZFN0eWxlT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gKHsgLi4uZGVmYXVsdFN0eWxlT3B0aW9ucywgLi4uc3R5bGVPcHRpb25zIH0pLCBbc3R5bGVPcHRpb25zXSk7XHJcblxyXG4gIC8vIFdoZW4gc3R5bGVTZXQgaXMgbm90IHNwZWNpZmllZCwgdGhlIHN0eWxlT3B0aW9ucyB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIEFkYXB0aXZlIENhcmRzIHN0eWxlU2V0IGFuZCBtZXJnZWQgaW50byB1c2VTdHlsZVNldC5cclxuICBjb25zdCBleHRyYVN0eWxlU2V0ID0gdXNlTWVtbygoKSA9PiAoc3R5bGVTZXQgPyB1bmRlZmluZWQgOiBjcmVhdGVBZGFwdGl2ZUNhcmRzU3R5bGVTZXQocGF0Y2hlZFN0eWxlT3B0aW9ucykpLCBbXHJcbiAgICBwYXRjaGVkU3R5bGVPcHRpb25zLFxyXG4gICAgc3R5bGVTZXRcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGF0dGFjaG1lbnRNaWRkbGV3YXJlOiBwYXRjaGVkQXR0YWNobWVudE1pZGRsZXdhcmUsXHJcbiAgICBleHRyYVN0eWxlU2V0LFxyXG4gICAgcmVuZGVyTWFya2Rvd246XHJcbiAgICAgIHR5cGVvZiByZW5kZXJNYXJrZG93biA9PT0gJ3VuZGVmaW5lZCcgPyB0ZXh0ID0+IGRlZmF1bHRSZW5kZXJNYXJrZG93bih0ZXh0LCBwYXRjaGVkU3R5bGVPcHRpb25zKSA6IHJlbmRlck1hcmtkb3duXHJcbiAgfTtcclxufVxyXG4iXX0=