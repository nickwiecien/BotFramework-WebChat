"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _CommonCard = _interopRequireDefault(require("./CommonCard"));

/* eslint react/no-array-index-key: "off" */
var useStyleSet = _botframeworkWebchatComponent.hooks.useStyleSet;
var VideoContent = _botframeworkWebchatComponent.Components.VideoContent;

var VideoCardAttachment = function VideoCardAttachment(_ref) {
  var attachment = _ref.attachment,
      _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content;
  _ref$attachment$conte = _ref$attachment$conte === void 0 ? {} : _ref$attachment$conte;
  var media = _ref$attachment$conte.media,
      autostart = _ref$attachment$conte.autostart,
      autoloop = _ref$attachment$conte.autoloop,
      _ref$attachment$conte2 = _ref$attachment$conte.image;
  _ref$attachment$conte2 = _ref$attachment$conte2 === void 0 ? {} : _ref$attachment$conte2;
  var imageURL = _ref$attachment$conte2.url;

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
    }, _react.default.createElement(VideoContent, {
      autoPlay: autostart,
      loop: autoloop,
      poster: imageURL,
      src: url
    }));
  })), _react.default.createElement(_CommonCard.default, {
    attachment: attachment
  }));
};

VideoCardAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      autoloop: _propTypes.default.bool,
      autostart: _propTypes.default.bool,
      image: _propTypes.default.shape({
        url: _propTypes.default.string
      }),
      media: _propTypes.default.arrayOf(_propTypes.default.shape({
        url: _propTypes.default.string
      }))
    })
  }).isRequired
};
var _default = VideoCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVmlkZW9DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZVNldCIsImhvb2tzIiwiVmlkZW9Db250ZW50IiwiQ29tcG9uZW50cyIsIlZpZGVvQ2FyZEF0dGFjaG1lbnQiLCJhdHRhY2htZW50IiwiY29udGVudCIsIm1lZGlhIiwiYXV0b3N0YXJ0IiwiYXV0b2xvb3AiLCJpbWFnZSIsImltYWdlVVJMIiwidXJsIiwiYXVkaW9DYXJkQXR0YWNobWVudFN0eWxlU2V0IiwiYXVkaW9DYXJkQXR0YWNobWVudCIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJib29sIiwic3RyaW5nIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBUEE7SUFTUUEsVyxHQUFnQkMsbUMsQ0FBaEJELFc7SUFDQUUsWSxHQUFpQkMsd0MsQ0FBakJELFk7O0FBRVIsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUd0QjtBQUFBLE1BRkpDLFVBRUksUUFGSkEsVUFFSTtBQUFBLDZCQURKQSxVQUNJO0FBQUEsaURBRDBGLEVBQzFGO0FBQUEsOENBRFVDLE9BQ1Y7QUFBQSw2REFEbUYsRUFDbkY7QUFBQSxNQURxQkMsS0FDckIseUJBRHFCQSxLQUNyQjtBQUFBLE1BRDRCQyxTQUM1Qix5QkFENEJBLFNBQzVCO0FBQUEsTUFEdUNDLFFBQ3ZDLHlCQUR1Q0EsUUFDdkM7QUFBQSxxREFEaURDLEtBQ2pEO0FBQUEsK0RBRDRFLEVBQzVFO0FBQUEsTUFEK0RDLFFBQy9ELDBCQUQwREMsR0FDMUQ7O0FBQUEscUJBQzJEWixXQUFXLEVBRHRFO0FBQUE7QUFBQSxNQUMwQmEsMkJBRDFCLG9CQUNLQyxtQkFETDs7QUFHSixTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLEtBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0dOLEtBQUssQ0FBQ1EsR0FBTixDQUFVLGlCQUFVQyxLQUFWO0FBQUEsUUFBR0osR0FBSCxTQUFHQSxHQUFIO0FBQUEsV0FDVDtBQUFJLE1BQUEsR0FBRyxFQUFFSTtBQUFULE9BQ0UsNkJBQUMsWUFBRDtBQUFjLE1BQUEsUUFBUSxFQUFFUixTQUF4QjtBQUFtQyxNQUFBLElBQUksRUFBRUMsUUFBekM7QUFBbUQsTUFBQSxNQUFNLEVBQUVFLFFBQTNEO0FBQXFFLE1BQUEsR0FBRyxFQUFFQztBQUExRSxNQURGLENBRFM7QUFBQSxHQUFWLENBREgsQ0FERixFQVFFLDZCQUFDLG1CQUFEO0FBQVksSUFBQSxVQUFVLEVBQUVQO0FBQXhCLElBUkYsQ0FERjtBQVlELENBbEJEOztBQW9CQUQsbUJBQW1CLENBQUNhLFNBQXBCLEdBQWdDO0FBQzlCWixFQUFBQSxVQUFVLEVBQUVhLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCYixJQUFBQSxPQUFPLEVBQUVZLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3ZCVixNQUFBQSxRQUFRLEVBQUVTLG1CQUFVRSxJQURHO0FBRXZCWixNQUFBQSxTQUFTLEVBQUVVLG1CQUFVRSxJQUZFO0FBR3ZCVixNQUFBQSxLQUFLLEVBQUVRLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3JCUCxRQUFBQSxHQUFHLEVBQUVNLG1CQUFVRztBQURNLE9BQWhCLENBSGdCO0FBTXZCZCxNQUFBQSxLQUFLLEVBQUVXLG1CQUFVSSxPQUFWLENBQ0xKLG1CQUFVQyxLQUFWLENBQWdCO0FBQ2RQLFFBQUFBLEdBQUcsRUFBRU0sbUJBQVVHO0FBREQsT0FBaEIsQ0FESztBQU5nQixLQUFoQjtBQURpQixHQUFoQixFQWFURTtBQWQyQixDQUFoQztlQWlCZW5CLG1CIiwic291cmNlUm9vdCI6ImJ1bmRsZTovLy8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiBcIm9mZlwiICovXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50cywgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcclxuXHJcbmNvbnN0IHsgdXNlU3R5bGVTZXQgfSA9IGhvb2tzO1xyXG5jb25zdCB7IFZpZGVvQ29udGVudCB9ID0gQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IFZpZGVvQ2FyZEF0dGFjaG1lbnQgPSAoe1xyXG4gIGF0dGFjaG1lbnQsXHJcbiAgYXR0YWNobWVudDogeyBjb250ZW50OiB7IG1lZGlhLCBhdXRvc3RhcnQsIGF1dG9sb29wLCBpbWFnZTogeyB1cmw6IGltYWdlVVJMIH0gPSB7fSB9ID0ge30gfSA9IHt9XHJcbn0pID0+IHtcclxuICBjb25zdCBbeyBhdWRpb0NhcmRBdHRhY2htZW50OiBhdWRpb0NhcmRBdHRhY2htZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2F1ZGlvQ2FyZEF0dGFjaG1lbnRTdHlsZVNldH0+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWRpYS1saXN0XCI+XHJcbiAgICAgICAge21lZGlhLm1hcCgoeyB1cmwgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPFZpZGVvQ29udGVudCBhdXRvUGxheT17YXV0b3N0YXJ0fSBsb29wPXthdXRvbG9vcH0gcG9zdGVyPXtpbWFnZVVSTH0gc3JjPXt1cmx9IC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8Q29tbW9uQ2FyZCBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblZpZGVvQ2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xyXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBhdXRvbG9vcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIGF1dG9zdGFydDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgICB9KSxcclxuICAgICAgbWVkaWE6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH0pLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ2FyZEF0dGFjaG1lbnQ7XHJcbiJdfQ==