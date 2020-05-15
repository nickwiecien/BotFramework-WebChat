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
var ImageContent = _botframeworkWebchatComponent.Components.ImageContent,
    VideoContent = _botframeworkWebchatComponent.Components.VideoContent;
var useStyleSet = _botframeworkWebchatComponent.hooks.useStyleSet;

var AnimationCardAttachment = function AnimationCardAttachment(_ref) {
  var attachment = _ref.attachment,
      _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var _ref$attachment$conte = _ref$attachment.content.media,
      media = _ref$attachment$conte === void 0 ? [] : _ref$attachment$conte;

  var _useStyleSet = useStyleSet(),
      _useStyleSet2 = (0, _slicedToArray2.default)(_useStyleSet, 1),
      animationCardAttachmentStyleSet = _useStyleSet2[0].animationCardAttachment;

  return _react.default.createElement("div", {
    className: animationCardAttachmentStyleSet
  }, _react.default.createElement("ul", {
    className: "media-list"
  }, media.map(function (_ref2, index) {
    var _ref2$profile = _ref2.profile,
        profile = _ref2$profile === void 0 ? '' : _ref2$profile,
        url = _ref2.url;
    return _react.default.createElement("li", {
      key: index
    }, /\.gif$/i.test(url) ? _react.default.createElement(ImageContent, {
      alt: profile,
      src: url
    }) : _react.default.createElement(VideoContent, {
      alt: profile,
      src: url
    }));
  })), _react.default.createElement(_CommonCard.default, {
    attachment: attachment
  }));
};

AnimationCardAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      media: _propTypes.default.arrayOf(_propTypes.default.shape({
        profile: _propTypes.default.string,
        url: _propTypes.default.string.isRequired
      })).isRequired
    }).isRequired
  }).isRequired
};
var _default = AnimationCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiSW1hZ2VDb250ZW50IiwiQ29tcG9uZW50cyIsIlZpZGVvQ29udGVudCIsInVzZVN0eWxlU2V0IiwiaG9va3MiLCJBbmltYXRpb25DYXJkQXR0YWNobWVudCIsImF0dGFjaG1lbnQiLCJjb250ZW50IiwibWVkaWEiLCJhbmltYXRpb25DYXJkQXR0YWNobWVudFN0eWxlU2V0IiwiYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQiLCJtYXAiLCJpbmRleCIsInByb2ZpbGUiLCJ1cmwiLCJ0ZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFOQTtJQVFRQSxZLEdBQStCQyx3QyxDQUEvQkQsWTtJQUFjRSxZLEdBQWlCRCx3QyxDQUFqQkMsWTtJQUNkQyxXLEdBQWdCQyxtQyxDQUFoQkQsVzs7QUFFUixJQUFNRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLE9BQWtFO0FBQUEsTUFBL0RDLFVBQStELFFBQS9EQSxVQUErRDtBQUFBLDZCQUFuREEsVUFBbUQ7QUFBQSxpREFBVCxFQUFTO0FBQUEsOENBQXJDQyxPQUFxQyxDQUExQkMsS0FBMEI7QUFBQSxNQUExQkEsS0FBMEIsc0NBQWxCLEVBQWtCOztBQUFBLHFCQUN6QkwsV0FBVyxFQURjO0FBQUE7QUFBQSxNQUM5RE0sK0JBRDhELG9CQUN2RkMsdUJBRHVGOztBQUdoRyxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVEO0FBQWhCLEtBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0dELEtBQUssQ0FBQ0csR0FBTixDQUFVLGlCQUF3QkMsS0FBeEI7QUFBQSw4QkFBR0MsT0FBSDtBQUFBLFFBQUdBLE9BQUgsOEJBQWEsRUFBYjtBQUFBLFFBQWlCQyxHQUFqQixTQUFpQkEsR0FBakI7QUFBQSxXQUNUO0FBQUksTUFBQSxHQUFHLEVBQUVGO0FBQVQsT0FDRyxVQUFXRyxJQUFYLENBQWdCRCxHQUFoQixJQUF1Qiw2QkFBQyxZQUFEO0FBQWMsTUFBQSxHQUFHLEVBQUVELE9BQW5CO0FBQTRCLE1BQUEsR0FBRyxFQUFFQztBQUFqQyxNQUF2QixHQUFrRSw2QkFBQyxZQUFEO0FBQWMsTUFBQSxHQUFHLEVBQUVELE9BQW5CO0FBQTRCLE1BQUEsR0FBRyxFQUFFQztBQUFqQyxNQURyRSxDQURTO0FBQUEsR0FBVixDQURILENBREYsRUFRRSw2QkFBQyxtQkFBRDtBQUFZLElBQUEsVUFBVSxFQUFFUjtBQUF4QixJQVJGLENBREY7QUFZRCxDQWZEOztBQWlCQUQsdUJBQXVCLENBQUNXLFNBQXhCLEdBQW9DO0FBQ2xDVixFQUFBQSxVQUFVLEVBQUVXLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCWCxJQUFBQSxPQUFPLEVBQUVVLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3ZCVixNQUFBQSxLQUFLLEVBQUVTLG1CQUFVRSxPQUFWLENBQ0xGLG1CQUFVQyxLQUFWLENBQWdCO0FBQ2RMLFFBQUFBLE9BQU8sRUFBRUksbUJBQVVHLE1BREw7QUFFZE4sUUFBQUEsR0FBRyxFQUFFRyxtQkFBVUcsTUFBVixDQUFpQkM7QUFGUixPQUFoQixDQURLLEVBS0xBO0FBTnFCLEtBQWhCLEVBT05BO0FBUnVCLEdBQWhCLEVBU1RBO0FBVitCLENBQXBDO2VBYWVoQix1QiIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLWFycmF5LWluZGV4LWtleTogXCJvZmZcIiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50cywgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENvbW1vbkNhcmQgZnJvbSAnLi9Db21tb25DYXJkJztcclxuXHJcbmNvbnN0IHsgSW1hZ2VDb250ZW50LCBWaWRlb0NvbnRlbnQgfSA9IENvbXBvbmVudHM7XHJcbmNvbnN0IHsgdXNlU3R5bGVTZXQgfSA9IGhvb2tzO1xyXG5cclxuY29uc3QgQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQgPSAoeyBhdHRhY2htZW50LCBhdHRhY2htZW50OiB7IGNvbnRlbnQ6IHsgbWVkaWEgPSBbXSB9IH0gPSB7fSB9KSA9PiB7XHJcbiAgY29uc3QgW3sgYW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQ6IGFuaW1hdGlvbkNhcmRBdHRhY2htZW50U3R5bGVTZXQgfV0gPSB1c2VTdHlsZVNldCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2FuaW1hdGlvbkNhcmRBdHRhY2htZW50U3R5bGVTZXR9PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdFwiPlxyXG4gICAgICAgIHttZWRpYS5tYXAoKHsgcHJvZmlsZSA9ICcnLCB1cmwgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgey9cXC5naWYkL2l1LnRlc3QodXJsKSA/IDxJbWFnZUNvbnRlbnQgYWx0PXtwcm9maWxlfSBzcmM9e3VybH0gLz4gOiA8VmlkZW9Db250ZW50IGFsdD17cHJvZmlsZX0gc3JjPXt1cmx9IC8+fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPENvbW1vbkNhcmQgYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BbmltYXRpb25DYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XHJcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lZGlhOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgcHJvZmlsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcbiAgICAgICAgfSlcclxuICAgICAgKS5pc1JlcXVpcmVkXHJcbiAgICB9KS5pc1JlcXVpcmVkXHJcbiAgfSkuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQ7XHJcbiJdfQ==