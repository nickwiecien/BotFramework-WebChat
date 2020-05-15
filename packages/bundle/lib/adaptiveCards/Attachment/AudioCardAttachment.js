"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _CommonCard = _interopRequireDefault(require("./CommonCard"));

/* eslint react/no-array-index-key: "off" */
var AudioContent = _botframeworkWebchatComponent.Components.AudioContent;
var useStyleSet = _botframeworkWebchatComponent.hooks.useStyleSet;

var AudioCardAttachment = function AudioCardAttachment(_ref) {
  var attachment = _ref.attachment,
      _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content;
  _ref$attachment$conte = _ref$attachment$conte === void 0 ? {} : _ref$attachment$conte;
  var _ref$attachment$conte2 = _ref$attachment$conte.autostart,
      autostart = _ref$attachment$conte2 === void 0 ? false : _ref$attachment$conte2,
      _ref$attachment$conte3 = _ref$attachment$conte.autoloop,
      autoloop = _ref$attachment$conte3 === void 0 ? false : _ref$attachment$conte3,
      _ref$attachment$conte4 = _ref$attachment$conte.image;
  _ref$attachment$conte4 = _ref$attachment$conte4 === void 0 ? {} : _ref$attachment$conte4;
  var _ref$attachment$conte5 = _ref$attachment$conte4.url,
      imageURL = _ref$attachment$conte5 === void 0 ? '' : _ref$attachment$conte5,
      _ref$attachment$conte6 = _ref$attachment$conte.media,
      media = _ref$attachment$conte6 === void 0 ? [] : _ref$attachment$conte6;

  var _useStyleSet = useStyleSet(),
      _useStyleSet2 = (0, _slicedToArray2.default)(_useStyleSet, 1),
      audioCardAttachmentStyleSet = _useStyleSet2[0].audioCardAttachment;

  return _react.default.createElement("div", {
    className: audioCardAttachmentStyleSet
  }, _react.default.createElement("ul", {
    className: "media-list"
  }, media.map(function (_ref2, index) {
    var url = _ref2.url;
    return _react.default.createElement("li", {
      key: index
    }, _react.default.createElement(AudioContent, {
      autoPlay: autostart,
      loop: autoloop,
      poster: imageURL,
      src: url
    }));
  })), _react.default.createElement(_CommonCard.default, {
    attachment: attachment
  }));
};

AudioCardAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      autostart: _propTypes.default.bool,
      autoloop: _propTypes.default.bool,
      image: _propTypes.default.shape({
        url: _propTypes.default.string.isRequired
      }),
      media: _propTypes.default.arrayOf(_propTypes.default.shape({
        url: _propTypes.default.string.isRequired
      }).isRequired).isRequired
    })
  }).isRequired
};
var _default = AudioCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQXVkaW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBdWRpb0NvbnRlbnQiLCJDb21wb25lbnRzIiwidXNlU3R5bGVTZXQiLCJob29rcyIsIkF1ZGlvQ2FyZEF0dGFjaG1lbnQiLCJhdHRhY2htZW50IiwiY29udGVudCIsImF1dG9zdGFydCIsImF1dG9sb29wIiwiaW1hZ2UiLCJ1cmwiLCJpbWFnZVVSTCIsIm1lZGlhIiwiYXVkaW9DYXJkQXR0YWNobWVudFN0eWxlU2V0IiwiYXVkaW9DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTkE7SUFRUUEsWSxHQUFpQkMsd0MsQ0FBakJELFk7SUFDQUUsVyxHQUFnQkMsbUMsQ0FBaEJELFc7O0FBRVIsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUt0QjtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLDZCQUhKQSxVQUdJO0FBQUEsaURBREEsRUFDQTtBQUFBLDhDQUZGQyxPQUVFO0FBQUEsNkRBRmlHLEVBRWpHO0FBQUEscURBRlNDLFNBRVQ7QUFBQSxNQUZTQSxTQUVULHVDQUZxQixLQUVyQjtBQUFBLHFEQUY0QkMsUUFFNUI7QUFBQSxNQUY0QkEsUUFFNUIsdUNBRnVDLEtBRXZDO0FBQUEscURBRjhDQyxLQUU5QztBQUFBLCtEQUY4RSxFQUU5RTtBQUFBLHNEQUZ1REMsR0FFdkQ7QUFBQSxNQUY0REMsUUFFNUQsdUNBRnVFLEVBRXZFO0FBQUEscURBRmtGQyxLQUVsRjtBQUFBLE1BRmtGQSxLQUVsRix1Q0FGMEYsRUFFMUY7O0FBQUEscUJBQzJEVixXQUFXLEVBRHRFO0FBQUE7QUFBQSxNQUMwQlcsMkJBRDFCLG9CQUNLQyxtQkFETDs7QUFHSixTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLEtBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0dELEtBQUssQ0FBQ0csR0FBTixDQUFVLGlCQUFVQyxLQUFWO0FBQUEsUUFBR04sR0FBSCxTQUFHQSxHQUFIO0FBQUEsV0FDVDtBQUFJLE1BQUEsR0FBRyxFQUFFTTtBQUFULE9BQ0UsNkJBQUMsWUFBRDtBQUFjLE1BQUEsUUFBUSxFQUFFVCxTQUF4QjtBQUFtQyxNQUFBLElBQUksRUFBRUMsUUFBekM7QUFBbUQsTUFBQSxNQUFNLEVBQUVHLFFBQTNEO0FBQXFFLE1BQUEsR0FBRyxFQUFFRDtBQUExRSxNQURGLENBRFM7QUFBQSxHQUFWLENBREgsQ0FERixFQVFFLDZCQUFDLG1CQUFEO0FBQVksSUFBQSxVQUFVLEVBQUVMO0FBQXhCLElBUkYsQ0FERjtBQVlELENBcEJEOztBQXNCQUQsbUJBQW1CLENBQUNhLFNBQXBCLEdBQWdDO0FBQzlCWixFQUFBQSxVQUFVLEVBQUVhLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCYixJQUFBQSxPQUFPLEVBQUVZLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3ZCWixNQUFBQSxTQUFTLEVBQUVXLG1CQUFVRSxJQURFO0FBRXZCWixNQUFBQSxRQUFRLEVBQUVVLG1CQUFVRSxJQUZHO0FBR3ZCWCxNQUFBQSxLQUFLLEVBQUVTLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3JCVCxRQUFBQSxHQUFHLEVBQUVRLG1CQUFVRyxNQUFWLENBQWlCQztBQURELE9BQWhCLENBSGdCO0FBTXZCVixNQUFBQSxLQUFLLEVBQUVNLG1CQUFVSyxPQUFWLENBQ0xMLG1CQUFVQyxLQUFWLENBQWdCO0FBQ2RULFFBQUFBLEdBQUcsRUFBRVEsbUJBQVVHLE1BQVYsQ0FBaUJDO0FBRFIsT0FBaEIsRUFFR0EsVUFIRSxFQUlMQTtBQVZxQixLQUFoQjtBQURpQixHQUFoQixFQWFUQTtBQWQyQixDQUFoQztlQWlCZWxCLG1CIiwic291cmNlUm9vdCI6ImJ1bmRsZTovLy8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiBcIm9mZlwiICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRzLCBob29rcyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ29tbW9uQ2FyZCBmcm9tICcuL0NvbW1vbkNhcmQnO1xyXG5cclxuY29uc3QgeyBBdWRpb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XHJcbmNvbnN0IHsgdXNlU3R5bGVTZXQgfSA9IGhvb2tzO1xyXG5cclxuY29uc3QgQXVkaW9DYXJkQXR0YWNobWVudCA9ICh7XHJcbiAgYXR0YWNobWVudCxcclxuICBhdHRhY2htZW50OiB7XHJcbiAgICBjb250ZW50OiB7IGF1dG9zdGFydCA9IGZhbHNlLCBhdXRvbG9vcCA9IGZhbHNlLCBpbWFnZTogeyB1cmw6IGltYWdlVVJMID0gJycgfSA9IHt9LCBtZWRpYSA9IFtdIH0gPSB7fVxyXG4gIH0gPSB7fVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3sgYXVkaW9DYXJkQXR0YWNobWVudDogYXVkaW9DYXJkQXR0YWNobWVudFN0eWxlU2V0IH1dID0gdXNlU3R5bGVTZXQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXthdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXR9PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxyXG4gICAgICAgIHttZWRpYS5tYXAoKHsgdXJsIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxBdWRpb0NvbnRlbnQgYXV0b1BsYXk9e2F1dG9zdGFydH0gbG9vcD17YXV0b2xvb3B9IHBvc3Rlcj17aW1hZ2VVUkx9IHNyYz17dXJsfSAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPENvbW1vbkNhcmQgYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BdWRpb0NhcmRBdHRhY2htZW50LnByb3BUeXBlcyA9IHtcclxuICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgYXV0b3N0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgYXV0b2xvb3A6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICBpbWFnZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gICAgICB9KSxcclxuICAgICAgbWVkaWE6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gICAgICAgIH0pLmlzUmVxdWlyZWRcclxuICAgICAgKS5pc1JlcXVpcmVkXHJcbiAgICB9KVxyXG4gIH0pLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ2FyZEF0dGFjaG1lbnQ7XHJcbiJdfQ==