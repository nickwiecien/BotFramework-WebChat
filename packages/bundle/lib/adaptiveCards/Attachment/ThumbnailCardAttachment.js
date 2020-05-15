"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _AdaptiveCardBuilder = _interopRequireDefault(require("./AdaptiveCardBuilder"));

var _AdaptiveCardRenderer = _interopRequireDefault(require("./AdaptiveCardRenderer"));

var _useAdaptiveCardsPackage = _interopRequireDefault(require("../hooks/useAdaptiveCardsPackage"));

/* eslint no-magic-numbers: ["error", { "ignore": [25, 75] }] */
var useDirection = _botframeworkWebchatComponent.hooks.useDirection,
    useStyleOptions = _botframeworkWebchatComponent.hooks.useStyleOptions;

var ThumbnailCardAttachment = function ThumbnailCardAttachment(_ref) {
  var _ref$attachment = _ref.attachment;
  _ref$attachment = _ref$attachment === void 0 ? {} : _ref$attachment;
  var content = _ref$attachment.content;

  var _useAdaptiveCardsPack = (0, _useAdaptiveCardsPackage.default)(),
      _useAdaptiveCardsPack2 = (0, _slicedToArray2.default)(_useAdaptiveCardsPack, 1),
      adaptiveCardsPackage = _useAdaptiveCardsPack2[0];

  var _useDirection = useDirection(),
      _useDirection2 = (0, _slicedToArray2.default)(_useDirection, 1),
      direction = _useDirection2[0];

  var _useStyleOptions = useStyleOptions(),
      _useStyleOptions2 = (0, _slicedToArray2.default)(_useStyleOptions, 1),
      styleOptions = _useStyleOptions2[0];

  var builtCard = (0, _react.useMemo)(function () {
    if (content) {
      var builder = new _AdaptiveCardBuilder.default(adaptiveCardsPackage, styleOptions, direction);
      var TextSize = adaptiveCardsPackage.TextSize,
          TextWeight = adaptiveCardsPackage.TextWeight;
      var buttons = content.buttons,
          images = content.images,
          subtitle = content.subtitle,
          text = content.text,
          title = content.title;
      var richCardWrapTitle = styleOptions.richCardWrapTitle;

      if (images && images.length) {
        var _builder$addColumnSet = builder.addColumnSet([75, 25]),
            _builder$addColumnSet2 = (0, _slicedToArray2.default)(_builder$addColumnSet, 2),
            firstColumn = _builder$addColumnSet2[0],
            lastColumn = _builder$addColumnSet2[1];

        var _images = (0, _slicedToArray2.default)(images, 1),
            _images$ = _images[0],
            tap = _images$.tap,
            url = _images$.url;

        builder.addTextBlock(title, {
          size: TextSize.Medium,
          weight: TextWeight.Bolder,
          wrap: richCardWrapTitle
        }, firstColumn);
        builder.addTextBlock(subtitle, {
          isSubtle: true,
          wrap: richCardWrapTitle
        }, firstColumn);
        builder.addImage(url, lastColumn, tap);
        builder.addTextBlock(text, {
          wrap: true
        });
        builder.addButtons(buttons);
      } else {
        builder.addCommon(content);
      }

      return builder.card;
    }
  }, [adaptiveCardsPackage, direction, content, styleOptions]);
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    tapAction: content && content.tap
  });
};

ThumbnailCardAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      buttons: _propTypes.default.array,
      images: _propTypes.default.arrayOf(_propTypes.default.shape({
        tap: _propTypes.default.any,
        url: _propTypes.default.string.isRequired
      })),
      subtitle: _propTypes.default.string,
      tap: _propTypes.default.any,
      text: _propTypes.default.string,
      title: _propTypes.default.string
    }).isRequired
  }).isRequired
};
var _default = ThumbnailCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvVGh1bWJuYWlsQ2FyZEF0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsidXNlRGlyZWN0aW9uIiwiaG9va3MiLCJ1c2VTdHlsZU9wdGlvbnMiLCJUaHVtYm5haWxDYXJkQXR0YWNobWVudCIsImF0dGFjaG1lbnQiLCJjb250ZW50IiwiYWRhcHRpdmVDYXJkc1BhY2thZ2UiLCJkaXJlY3Rpb24iLCJzdHlsZU9wdGlvbnMiLCJidWlsdENhcmQiLCJidWlsZGVyIiwiQWRhcHRpdmVDYXJkQnVpbGRlciIsIlRleHRTaXplIiwiVGV4dFdlaWdodCIsImJ1dHRvbnMiLCJpbWFnZXMiLCJzdWJ0aXRsZSIsInRleHQiLCJ0aXRsZSIsInJpY2hDYXJkV3JhcFRpdGxlIiwibGVuZ3RoIiwiYWRkQ29sdW1uU2V0IiwiZmlyc3RDb2x1bW4iLCJsYXN0Q29sdW1uIiwidGFwIiwidXJsIiwiYWRkVGV4dEJsb2NrIiwic2l6ZSIsIk1lZGl1bSIsIndlaWdodCIsIkJvbGRlciIsIndyYXAiLCJpc1N1YnRsZSIsImFkZEltYWdlIiwiYWRkQnV0dG9ucyIsImFkZENvbW1vbiIsImNhcmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFycmF5IiwiYXJyYXlPZiIsImFueSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFUQTtJQVdRQSxZLEdBQWtDQyxtQyxDQUFsQ0QsWTtJQUFjRSxlLEdBQW9CRCxtQyxDQUFwQkMsZTs7QUFFdEIsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixPQUFzQztBQUFBLDZCQUFuQ0MsVUFBbUM7QUFBQSxpREFBVCxFQUFTO0FBQUEsTUFBckJDLE9BQXFCLG1CQUFyQkEsT0FBcUI7O0FBQUEsOEJBQ3JDLHVDQURxQztBQUFBO0FBQUEsTUFDN0RDLG9CQUQ2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S0FBVixDQUFnQjtBQUNkZixRQUFBQSxHQUFHLEVBQUVjLG1CQUFVSSxHQUREO0FBRWRqQixRQUFBQSxHQUFHLEVBQUVhLG1CQUFVSyxNQUFWLENBQWlCQztBQUZSLE9BQWhCLENBRE0sQ0FGZTtBQVF2QjVCLE1BQUFBLFFBQVEsRUFBRXNCLG1CQUFVSyxNQVJHO0FBU3ZCbkIsTUFBQUEsR0FBRyxFQUFFYyxtQkFBVUksR0FUUTtBQVV2QnpCLE1BQUFBLElBQUksRUFBRXFCLG1CQUFVSyxNQVZPO0FBV3ZCekIsTUFBQUEsS0FBSyxFQUFFb0IsbUJBQVVLO0FBWE0sS0FBaEIsRUFZTkM7QUFidUIsR0FBaEIsRUFjVEE7QUFmK0IsQ0FBcEM7ZUFrQmV6Qyx1QiIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWzI1LCA3NV0gfV0gKi9cclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdib3RmcmFtZXdvcmstd2ViY2hhdC1jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IEFkYXB0aXZlQ2FyZEJ1aWxkZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRCdWlsZGVyJztcclxuaW1wb3J0IEFkYXB0aXZlQ2FyZFJlbmRlcmVyIGZyb20gJy4vQWRhcHRpdmVDYXJkUmVuZGVyZXInO1xyXG5pbXBvcnQgdXNlQWRhcHRpdmVDYXJkc1BhY2thZ2UgZnJvbSAnLi4vaG9va3MvdXNlQWRhcHRpdmVDYXJkc1BhY2thZ2UnO1xyXG5cclxuY29uc3QgeyB1c2VEaXJlY3Rpb24sIHVzZVN0eWxlT3B0aW9ucyB9ID0gaG9va3M7XHJcblxyXG5jb25zdCBUaHVtYm5haWxDYXJkQXR0YWNobWVudCA9ICh7IGF0dGFjaG1lbnQ6IHsgY29udGVudCB9ID0ge30gfSkgPT4ge1xyXG4gIGNvbnN0IFthZGFwdGl2ZUNhcmRzUGFja2FnZV0gPSB1c2VBZGFwdGl2ZUNhcmRzUGFja2FnZSgpO1xyXG4gIGNvbnN0IFtkaXJlY3Rpb25dID0gdXNlRGlyZWN0aW9uKCk7XHJcbiAgY29uc3QgW3N0eWxlT3B0aW9uc10gPSB1c2VTdHlsZU9wdGlvbnMoKTtcclxuICBjb25zdCBidWlsdENhcmQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQWRhcHRpdmVDYXJkQnVpbGRlcihhZGFwdGl2ZUNhcmRzUGFja2FnZSwgc3R5bGVPcHRpb25zLCBkaXJlY3Rpb24pO1xyXG4gICAgICBjb25zdCB7IFRleHRTaXplLCBUZXh0V2VpZ2h0IH0gPSBhZGFwdGl2ZUNhcmRzUGFja2FnZTtcclxuICAgICAgY29uc3QgeyBidXR0b25zLCBpbWFnZXMsIHN1YnRpdGxlLCB0ZXh0LCB0aXRsZSB9ID0gY29udGVudDtcclxuICAgICAgY29uc3QgeyByaWNoQ2FyZFdyYXBUaXRsZSB9ID0gc3R5bGVPcHRpb25zO1xyXG5cclxuICAgICAgaWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgW2ZpcnN0Q29sdW1uLCBsYXN0Q29sdW1uXSA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcclxuICAgICAgICBjb25zdCBbeyB0YXAsIHVybCB9XSA9IGltYWdlcztcclxuXHJcbiAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2soXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyLCB3cmFwOiByaWNoQ2FyZFdyYXBUaXRsZSB9LFxyXG4gICAgICAgICAgZmlyc3RDb2x1bW5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhzdWJ0aXRsZSwgeyBpc1N1YnRsZTogdHJ1ZSwgd3JhcDogcmljaENhcmRXcmFwVGl0bGUgfSwgZmlyc3RDb2x1bW4pO1xyXG4gICAgICAgIGJ1aWxkZXIuYWRkSW1hZ2UodXJsLCBsYXN0Q29sdW1uLCB0YXApO1xyXG4gICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHRleHQsIHsgd3JhcDogdHJ1ZSB9KTtcclxuICAgICAgICBidWlsZGVyLmFkZEJ1dHRvbnMoYnV0dG9ucyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnVpbGRlci5hZGRDb21tb24oY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJ1aWxkZXIuY2FyZDtcclxuICAgIH1cclxuICB9LCBbYWRhcHRpdmVDYXJkc1BhY2thZ2UsIGRpcmVjdGlvbiwgY29udGVudCwgc3R5bGVPcHRpb25zXSk7XHJcblxyXG4gIHJldHVybiA8QWRhcHRpdmVDYXJkUmVuZGVyZXIgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9IHRhcEFjdGlvbj17Y29udGVudCAmJiBjb250ZW50LnRhcH0gLz47XHJcbn07XHJcblxyXG5UaHVtYm5haWxDYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XHJcbiAgYXR0YWNobWVudDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgdGFwOiBQcm9wVHlwZXMuYW55LFxyXG4gICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdGFwOiBQcm9wVHlwZXMuYW55LFxyXG4gICAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSkuaXNSZXF1aXJlZFxyXG4gIH0pLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbENhcmRBdHRhY2htZW50O1xyXG4iXX0=