"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAdaptiveCardsAttachmentMiddleware;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AdaptiveCardAttachment = _interopRequireDefault(require("./Attachment/AdaptiveCardAttachment"));

var _AnimationCardAttachment = _interopRequireDefault(require("./Attachment/AnimationCardAttachment"));

var _AudioCardAttachment = _interopRequireDefault(require("./Attachment/AudioCardAttachment"));

var _HeroCardAttachment = _interopRequireDefault(require("./Attachment/HeroCardAttachment"));

var _OAuthCardAttachment = _interopRequireDefault(require("./Attachment/OAuthCardAttachment"));

var _ReceiptCardAttachment = _interopRequireDefault(require("./Attachment/ReceiptCardAttachment"));

var _SignInCardAttachment = _interopRequireDefault(require("./Attachment/SignInCardAttachment"));

var _ThumbnailCardAttachment = _interopRequireDefault(require("./Attachment/ThumbnailCardAttachment"));

var _VideoCardAttachment = _interopRequireDefault(require("./Attachment/VideoCardAttachment"));

function createAdaptiveCardsAttachmentMiddleware() {
  return function () {
    return function (next) {
      function AdaptiveCardMiddleware(_ref) {
        var activity = _ref.activity,
            attachment = _ref.attachment;
        return attachment.contentType === 'application/vnd.microsoft.card.hero' ? _react.default.createElement(_HeroCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.adaptive' ? _react.default.createElement(_AdaptiveCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.animation' ? _react.default.createElement(_AnimationCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.audio' ? _react.default.createElement(_AudioCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.oauth' ? _react.default.createElement(_OAuthCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.receipt' ? _react.default.createElement(_ReceiptCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.signin' ? _react.default.createElement(_SignInCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.thumbnail' ? _react.default.createElement(_ThumbnailCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : attachment.contentType === 'application/vnd.microsoft.card.video' ? _react.default.createElement(_VideoCardAttachment.default, {
          activity: activity,
          attachment: attachment
        }) : next({
          activity: activity,
          attachment: attachment
        });
      }

      AdaptiveCardMiddleware.propTypes = {
        activity: _propTypes.default.any.isRequired,
        attachment: _propTypes.default.shape({
          contentType: _propTypes.default.string.isRequired
        }).isRequired
      };
      return AdaptiveCardMiddleware;
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL2NyZWF0ZUFkYXB0aXZlQ2FyZHNBdHRhY2htZW50TWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBZGFwdGl2ZUNhcmRzQXR0YWNobWVudE1pZGRsZXdhcmUiLCJuZXh0IiwiQWRhcHRpdmVDYXJkTWlkZGxld2FyZSIsImFjdGl2aXR5IiwiYXR0YWNobWVudCIsImNvbnRlbnRUeXBlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFZSxTQUFTQSx1Q0FBVCxHQUFtRDtBQUNoRSxTQUFPO0FBQUEsV0FBTSxVQUFBQyxJQUFJLEVBQUk7QUFDbkIsZUFBU0Msc0JBQVQsT0FBMEQ7QUFBQSxZQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsWUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3hELGVBQU9BLFVBQVUsQ0FBQ0MsV0FBWCxLQUEyQixxQ0FBM0IsR0FDTCw2QkFBQywyQkFBRDtBQUFvQixVQUFBLFFBQVEsRUFBRUYsUUFBOUI7QUFBd0MsVUFBQSxVQUFVLEVBQUVDO0FBQXBELFVBREssR0FFSEEsVUFBVSxDQUFDQyxXQUFYLEtBQTJCLHlDQUEzQixHQUNGLDZCQUFDLCtCQUFEO0FBQXdCLFVBQUEsUUFBUSxFQUFFRixRQUFsQztBQUE0QyxVQUFBLFVBQVUsRUFBRUM7QUFBeEQsVUFERSxHQUVBQSxVQUFVLENBQUNDLFdBQVgsS0FBMkIsMENBQTNCLEdBQ0YsNkJBQUMsZ0NBQUQ7QUFBeUIsVUFBQSxRQUFRLEVBQUVGLFFBQW5DO0FBQTZDLFVBQUEsVUFBVSxFQUFFQztBQUF6RCxVQURFLEdBRUFBLFVBQVUsQ0FBQ0MsV0FBWCxLQUEyQixzQ0FBM0IsR0FDRiw2QkFBQyw0QkFBRDtBQUFxQixVQUFBLFFBQVEsRUFBRUYsUUFBL0I7QUFBeUMsVUFBQSxVQUFVLEVBQUVDO0FBQXJELFVBREUsR0FFQUEsVUFBVSxDQUFDQyxXQUFYLEtBQTJCLHNDQUEzQixHQUNGLDZCQUFDLDRCQUFEO0FBQXFCLFVBQUEsUUFBUSxFQUFFRixRQUEvQjtBQUF5QyxVQUFBLFVBQVUsRUFBRUM7QUFBckQsVUFERSxHQUVBQSxVQUFVLENBQUNDLFdBQVgsS0FBMkIsd0NBQTNCLEdBQ0YsNkJBQUMsOEJBQUQ7QUFBdUIsVUFBQSxRQUFRLEVBQUVGLFFBQWpDO0FBQTJDLFVBQUEsVUFBVSxFQUFFQztBQUF2RCxVQURFLEdBRUFBLFVBQVUsQ0FBQ0MsV0FBWCxLQUEyQix1Q0FBM0IsR0FDRiw2QkFBQyw2QkFBRDtBQUFzQixVQUFBLFFBQVEsRUFBRUYsUUFBaEM7QUFBMEMsVUFBQSxVQUFVLEVBQUVDO0FBQXRELFVBREUsR0FFQUEsVUFBVSxDQUFDQyxXQUFYLEtBQTJCLDBDQUEzQixHQUNGLDZCQUFDLGdDQUFEO0FBQXlCLFVBQUEsUUFBUSxFQUFFRixRQUFuQztBQUE2QyxVQUFBLFVBQVUsRUFBRUM7QUFBekQsVUFERSxHQUVBQSxVQUFVLENBQUNDLFdBQVgsS0FBMkIsc0NBQTNCLEdBQ0YsNkJBQUMsNEJBQUQ7QUFBcUIsVUFBQSxRQUFRLEVBQUVGLFFBQS9CO0FBQXlDLFVBQUEsVUFBVSxFQUFFQztBQUFyRCxVQURFLEdBR0ZILElBQUksQ0FBQztBQUFFRSxVQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsVUFBQUEsVUFBVSxFQUFWQTtBQUFaLFNBQUQsQ0FuQk47QUFxQkQ7O0FBRURGLE1BQUFBLHNCQUFzQixDQUFDSSxTQUF2QixHQUFtQztBQUNqQ0gsUUFBQUEsUUFBUSxFQUFFSSxtQkFBVUMsR0FBVixDQUFjQyxVQURTO0FBRWpDTCxRQUFBQSxVQUFVLEVBQUVHLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCTCxVQUFBQSxXQUFXLEVBQUVFLG1CQUFVSSxNQUFWLENBQWlCRjtBQURKLFNBQWhCLEVBRVRBO0FBSjhCLE9BQW5DO0FBT0EsYUFBT1Asc0JBQVA7QUFDRCxLQWpDTTtBQUFBLEdBQVA7QUFrQ0QiLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQWRhcHRpdmVDYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvQWRhcHRpdmVDYXJkQXR0YWNobWVudCc7XHJcbmltcG9ydCBBbmltYXRpb25DYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQnO1xyXG5pbXBvcnQgQXVkaW9DYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvQXVkaW9DYXJkQXR0YWNobWVudCc7XHJcbmltcG9ydCBIZXJvQ2FyZEF0dGFjaG1lbnQgZnJvbSAnLi9BdHRhY2htZW50L0hlcm9DYXJkQXR0YWNobWVudCc7XHJcbmltcG9ydCBPQXV0aENhcmRBdHRhY2htZW50IGZyb20gJy4vQXR0YWNobWVudC9PQXV0aENhcmRBdHRhY2htZW50JztcclxuaW1wb3J0IFJlY2VpcHRDYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvUmVjZWlwdENhcmRBdHRhY2htZW50JztcclxuaW1wb3J0IFNpZ25JbkNhcmRBdHRhY2htZW50IGZyb20gJy4vQXR0YWNobWVudC9TaWduSW5DYXJkQXR0YWNobWVudCc7XHJcbmltcG9ydCBUaHVtYm5haWxDYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQnO1xyXG5pbXBvcnQgVmlkZW9DYXJkQXR0YWNobWVudCBmcm9tICcuL0F0dGFjaG1lbnQvVmlkZW9DYXJkQXR0YWNobWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBZGFwdGl2ZUNhcmRzQXR0YWNobWVudE1pZGRsZXdhcmUoKSB7XHJcbiAgcmV0dXJuICgpID0+IG5leHQgPT4ge1xyXG4gICAgZnVuY3Rpb24gQWRhcHRpdmVDYXJkTWlkZGxld2FyZSh7IGFjdGl2aXR5LCBhdHRhY2htZW50IH0pIHtcclxuICAgICAgcmV0dXJuIGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuaGVybycgPyAoXHJcbiAgICAgICAgPEhlcm9DYXJkQXR0YWNobWVudCBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XHJcbiAgICAgICkgOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmFkYXB0aXZlJyA/IChcclxuICAgICAgICA8QWRhcHRpdmVDYXJkQXR0YWNobWVudCBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XHJcbiAgICAgICkgOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmFuaW1hdGlvbicgPyAoXHJcbiAgICAgICAgPEFuaW1hdGlvbkNhcmRBdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cclxuICAgICAgKSA6IGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuYXVkaW8nID8gKFxyXG4gICAgICAgIDxBdWRpb0NhcmRBdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cclxuICAgICAgKSA6IGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQub2F1dGgnID8gKFxyXG4gICAgICAgIDxPQXV0aENhcmRBdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cclxuICAgICAgKSA6IGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQucmVjZWlwdCcgPyAoXHJcbiAgICAgICAgPFJlY2VpcHRDYXJkQXR0YWNobWVudCBhY3Rpdml0eT17YWN0aXZpdHl9IGF0dGFjaG1lbnQ9e2F0dGFjaG1lbnR9IC8+XHJcbiAgICAgICkgOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnNpZ25pbicgPyAoXHJcbiAgICAgICAgPFNpZ25JbkNhcmRBdHRhY2htZW50IGFjdGl2aXR5PXthY3Rpdml0eX0gYXR0YWNobWVudD17YXR0YWNobWVudH0gLz5cclxuICAgICAgKSA6IGF0dGFjaG1lbnQuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQudGh1bWJuYWlsJyA/IChcclxuICAgICAgICA8VGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQgYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxyXG4gICAgICApIDogYXR0YWNobWVudC5jb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC52aWRlbycgPyAoXHJcbiAgICAgICAgPFZpZGVvQ2FyZEF0dGFjaG1lbnQgYWN0aXZpdHk9e2FjdGl2aXR5fSBhdHRhY2htZW50PXthdHRhY2htZW50fSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIG5leHQoeyBhY3Rpdml0eSwgYXR0YWNobWVudCB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIEFkYXB0aXZlQ2FyZE1pZGRsZXdhcmUucHJvcFR5cGVzID0ge1xyXG4gICAgICBhY3Rpdml0eTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gICAgICBhdHRhY2htZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgICAgfSkuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQWRhcHRpdmVDYXJkTWlkZGxld2FyZTtcclxuICB9O1xyXG59XHJcbiJdfQ==