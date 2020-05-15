"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _AdaptiveCardRenderer = _interopRequireDefault(require("./AdaptiveCardRenderer"));

var _useAdaptiveCardsPackage = _interopRequireDefault(require("../hooks/useAdaptiveCardsPackage"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useDirection = _botframeworkWebchatComponent.hooks.useDirection;

function stripSubmitAction(card) {
  if (!card.actions) {
    return card;
  } // Filter out HTTP action buttons


  var nextActions = card.actions.filter(function (action) {
    return action.type !== 'Action.Submit';
  }).map(function (action) {
    return action.type === 'Action.ShowCard' ? _objectSpread({}, action, {
      card: stripSubmitAction(action.card)
    }) : action;
  });
  return _objectSpread({}, card, {
    nextActions: nextActions
  });
}

function updateRTLInline(element, rtl, adaptiveCardsPackage) {
  if (element instanceof adaptiveCardsPackage.Container) {
    element.rtl = rtl;
  } // Tree traversal to add rtl boolean to child elements


  if (element.getItemAt && element.getItemCount) {
    var count = element.getItemCount();

    for (var index = 0; index < count; index++) {
      var child = element.getItemAt(index);
      updateRTLInline(child, rtl, adaptiveCardsPackage);
    }
  }
}

var AdaptiveCardAttachment = function AdaptiveCardAttachment(_ref) {
  var content = _ref.attachment.content;

  var _useAdaptiveCardsPack = (0, _useAdaptiveCardsPackage.default)(),
      _useAdaptiveCardsPack2 = (0, _slicedToArray2.default)(_useAdaptiveCardsPack, 1),
      adaptiveCardsPackage = _useAdaptiveCardsPack2[0];

  var AdaptiveCard = adaptiveCardsPackage.AdaptiveCard;

  var _useDirection = useDirection(),
      _useDirection2 = (0, _slicedToArray2.default)(_useDirection, 1),
      direction = _useDirection2[0];

  var _useMemo = (0, _react.useMemo)(function () {
    if (content) {
      var _card = new AdaptiveCard();

      var errors = []; // TODO: [P3] Move from "onParseError" to "card.parse(json, errors)"

      AdaptiveCard.onParseError = function (error) {
        return errors.push(error);
      };

      _card.parse(stripSubmitAction(_objectSpread({
        version: '1.0'
      }, (0, _typeof2.default)(content) === 'object' ? content : {}))); // Add rtl to Adaptive Card and child elements if Web Chat direction is 'rtl'


      updateRTLInline(_card, direction === 'rtl', adaptiveCardsPackage);
      AdaptiveCard.onParseError = null;
      return {
        card: _card,
        errors: errors
      };
    }

    return {};
  }, [AdaptiveCard, adaptiveCardsPackage, content, direction]),
      card = _useMemo.card;

  return !!card && _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: card
  });
};

var _default = AdaptiveCardAttachment;
exports.default = _default;
AdaptiveCardAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.any.isRequired
  }).isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQWRhcHRpdmVDYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJ1c2VEaXJlY3Rpb24iLCJob29rcyIsInN0cmlwU3VibWl0QWN0aW9uIiwiY2FyZCIsImFjdGlvbnMiLCJuZXh0QWN0aW9ucyIsImZpbHRlciIsImFjdGlvbiIsInR5cGUiLCJtYXAiLCJ1cGRhdGVSVExJbmxpbmUiLCJlbGVtZW50IiwicnRsIiwiYWRhcHRpdmVDYXJkc1BhY2thZ2UiLCJDb250YWluZXIiLCJnZXRJdGVtQXQiLCJnZXRJdGVtQ291bnQiLCJjb3VudCIsImluZGV4IiwiY2hpbGQiLCJBZGFwdGl2ZUNhcmRBdHRhY2htZW50IiwiY29udGVudCIsImF0dGFjaG1lbnQiLCJBZGFwdGl2ZUNhcmQiLCJkaXJlY3Rpb24iLCJlcnJvcnMiLCJvblBhcnNlRXJyb3IiLCJlcnJvciIsInB1c2giLCJwYXJzZSIsInZlcnNpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7OztJQUVRQSxZLEdBQWlCQyxtQyxDQUFqQkQsWTs7QUFFUixTQUFTRSxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDL0IsTUFBSSxDQUFDQSxJQUFJLENBQUNDLE9BQVYsRUFBbUI7QUFDakIsV0FBT0QsSUFBUDtBQUNELEdBSDhCLENBSy9COzs7QUFDQSxNQUFNRSxXQUFXLEdBQUdGLElBQUksQ0FBQ0MsT0FBTCxDQUNqQkUsTUFEaUIsQ0FDVixVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGVBQXBCO0FBQUEsR0FESSxFQUVqQkMsR0FGaUIsQ0FFYixVQUFBRixNQUFNO0FBQUEsV0FBS0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGlCQUFoQixxQkFB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IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFkYXB0aXZlQ2FyZFJlbmRlcmVyIGZyb20gJy4vQWRhcHRpdmVDYXJkUmVuZGVyZXInO1xyXG5pbXBvcnQgdXNlQWRhcHRpdmVDYXJkc1BhY2thZ2UgZnJvbSAnLi4vaG9va3MvdXNlQWRhcHRpdmVDYXJkc1BhY2thZ2UnO1xyXG5cclxuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xyXG5cclxuY29uc3QgeyB1c2VEaXJlY3Rpb24gfSA9IGhvb2tzO1xyXG5cclxuZnVuY3Rpb24gc3RyaXBTdWJtaXRBY3Rpb24oY2FyZCkge1xyXG4gIGlmICghY2FyZC5hY3Rpb25zKSB7XHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIC8vIEZpbHRlciBvdXQgSFRUUCBhY3Rpb24gYnV0dG9uc1xyXG4gIGNvbnN0IG5leHRBY3Rpb25zID0gY2FyZC5hY3Rpb25zXHJcbiAgICAuZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24udHlwZSAhPT0gJ0FjdGlvbi5TdWJtaXQnKVxyXG4gICAgLm1hcChhY3Rpb24gPT4gKGFjdGlvbi50eXBlID09PSAnQWN0aW9uLlNob3dDYXJkJyA/IHsgLi4uYWN0aW9uLCBjYXJkOiBzdHJpcFN1Ym1pdEFjdGlvbihhY3Rpb24uY2FyZCkgfSA6IGFjdGlvbikpO1xyXG5cclxuICByZXR1cm4geyAuLi5jYXJkLCBuZXh0QWN0aW9ucyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVSVExJbmxpbmUoZWxlbWVudCwgcnRsLCBhZGFwdGl2ZUNhcmRzUGFja2FnZSkge1xyXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgYWRhcHRpdmVDYXJkc1BhY2thZ2UuQ29udGFpbmVyKSB7XHJcbiAgICBlbGVtZW50LnJ0bCA9IHJ0bDtcclxuICB9XHJcblxyXG4gIC8vIFRyZWUgdHJhdmVyc2FsIHRvIGFkZCBydGwgYm9vbGVhbiB0byBjaGlsZCBlbGVtZW50c1xyXG4gIGlmIChlbGVtZW50LmdldEl0ZW1BdCAmJiBlbGVtZW50LmdldEl0ZW1Db3VudCkge1xyXG4gICAgY29uc3QgY291bnQgPSBlbGVtZW50LmdldEl0ZW1Db3VudCgpO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQuZ2V0SXRlbUF0KGluZGV4KTtcclxuXHJcbiAgICAgIHVwZGF0ZVJUTElubGluZShjaGlsZCwgcnRsLCBhZGFwdGl2ZUNhcmRzUGFja2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBBZGFwdGl2ZUNhcmRBdHRhY2htZW50ID0gKHsgYXR0YWNobWVudDogeyBjb250ZW50IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFthZGFwdGl2ZUNhcmRzUGFja2FnZV0gPSB1c2VBZGFwdGl2ZUNhcmRzUGFja2FnZSgpO1xyXG4gIGNvbnN0IHsgQWRhcHRpdmVDYXJkIH0gPSBhZGFwdGl2ZUNhcmRzUGFja2FnZTtcclxuICBjb25zdCBbZGlyZWN0aW9uXSA9IHVzZURpcmVjdGlvbigpO1xyXG4gIGNvbnN0IHsgY2FyZCB9ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICBjb25zdCBjYXJkID0gbmV3IEFkYXB0aXZlQ2FyZCgpO1xyXG4gICAgICBjb25zdCBlcnJvcnMgPSBbXTtcclxuXHJcbiAgICAgIC8vIFRPRE86IFtQM10gTW92ZSBmcm9tIFwib25QYXJzZUVycm9yXCIgdG8gXCJjYXJkLnBhcnNlKGpzb24sIGVycm9ycylcIlxyXG4gICAgICBBZGFwdGl2ZUNhcmQub25QYXJzZUVycm9yID0gZXJyb3IgPT4gZXJyb3JzLnB1c2goZXJyb3IpO1xyXG5cclxuICAgICAgY2FyZC5wYXJzZShcclxuICAgICAgICBzdHJpcFN1Ym1pdEFjdGlvbih7XHJcbiAgICAgICAgICB2ZXJzaW9uOiAnMS4wJyxcclxuICAgICAgICAgIC4uLih0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgPyBjb250ZW50IDoge30pXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEFkZCBydGwgdG8gQWRhcHRpdmUgQ2FyZCBhbmQgY2hpbGQgZWxlbWVudHMgaWYgV2ViIENoYXQgZGlyZWN0aW9uIGlzICdydGwnXHJcbiAgICAgIHVwZGF0ZVJUTElubGluZShjYXJkLCBkaXJlY3Rpb24gPT09ICdydGwnLCBhZGFwdGl2ZUNhcmRzUGFja2FnZSk7XHJcblxyXG4gICAgICBBZGFwdGl2ZUNhcmQub25QYXJzZUVycm9yID0gbnVsbDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2FyZCxcclxuICAgICAgICBlcnJvcnNcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge307XHJcbiAgfSwgW0FkYXB0aXZlQ2FyZCwgYWRhcHRpdmVDYXJkc1BhY2thZ2UsIGNvbnRlbnQsIGRpcmVjdGlvbl0pO1xyXG5cclxuICByZXR1cm4gISFjYXJkICYmIDxBZGFwdGl2ZUNhcmRSZW5kZXJlciBhZGFwdGl2ZUNhcmQ9e2NhcmR9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRhcHRpdmVDYXJkQXR0YWNobWVudDtcclxuXHJcbkFkYXB0aXZlQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xyXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcclxuICB9KS5pc1JlcXVpcmVkXHJcbn07XHJcbiJdfQ==