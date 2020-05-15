"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _AdaptiveCardBuilder = _interopRequireDefault(require("./AdaptiveCardBuilder"));

var _AdaptiveCardRenderer = _interopRequireDefault(require("./AdaptiveCardRenderer"));

var _useAdaptiveCardsPackage = _interopRequireDefault(require("../hooks/useAdaptiveCardsPackage"));

/* eslint no-magic-numbers: ["error", { "ignore": [0, 1, 10, 15, 25, 75] }] */
var useDirection = _botframeworkWebchatComponent.hooks.useDirection,
    useLocalizer = _botframeworkWebchatComponent.hooks.useLocalizer,
    useStyleOptions = _botframeworkWebchatComponent.hooks.useStyleOptions;

function nullOrUndefined(obj) {
  return obj === null || typeof obj === 'undefined';
}

var ReceiptCardAttachment = function ReceiptCardAttachment(_ref) {
  var content = _ref.attachment.content;

  var _useAdaptiveCardsPack = (0, _useAdaptiveCardsPackage.default)(),
      _useAdaptiveCardsPack2 = (0, _slicedToArray2.default)(_useAdaptiveCardsPack, 1),
      adaptiveCardsPackage = _useAdaptiveCardsPack2[0];

  var _useDirection = useDirection(),
      _useDirection2 = (0, _slicedToArray2.default)(_useDirection, 1),
      direction = _useDirection2[0];

  var _useStyleOptions = useStyleOptions(),
      _useStyleOptions2 = (0, _slicedToArray2.default)(_useStyleOptions, 1),
      styleOptions = _useStyleOptions2[0];

  var localize = useLocalizer();
  var taxText = localize('RECEIPT_CARD_TAX');
  var totalText = localize('RECEIPT_CARD_TOTAL');
  var vatText = localize('RECEIPT_CARD_VAT');
  var builtCard = (0, _react.useMemo)(function () {
    var builder = new _AdaptiveCardBuilder.default(adaptiveCardsPackage, styleOptions, direction);
    var HorizontalAlignment = adaptiveCardsPackage.HorizontalAlignment,
        TextSize = adaptiveCardsPackage.TextSize,
        TextWeight = adaptiveCardsPackage.TextWeight;
    var buttons = content.buttons,
        facts = content.facts,
        items = content.items,
        tax = content.tax,
        title = content.title,
        total = content.total,
        vat = content.vat;
    var richCardWrapTitle = styleOptions.richCardWrapTitle;

    if (content) {
      builder.addTextBlock(title, {
        size: TextSize.Medium,
        weight: TextWeight.Bolder,
        wrap: richCardWrapTitle
      });

      if (facts) {
        var _builder$addColumnSet = builder.addColumnSet([75, 25]),
            _builder$addColumnSet2 = (0, _slicedToArray2.default)(_builder$addColumnSet, 2),
            firstFactColumn = _builder$addColumnSet2[0],
            lastFactColumn = _builder$addColumnSet2[1];

        facts.map(function (_ref2) {
          var key = _ref2.key,
              value = _ref2.value;
          builder.addTextBlock(key, {
            size: TextSize.Medium
          }, firstFactColumn);
          builder.addTextBlock(value, {
            size: TextSize.Medium,
            horizontalAlignment: HorizontalAlignment.Right
          }, lastFactColumn);
        });
      }

      items && items.map(function (_ref3) {
        var _ref3$image = _ref3.image;
        _ref3$image = _ref3$image === void 0 ? {} : _ref3$image;
        var tap = _ref3$image.tap,
            url = _ref3$image.url,
            price = _ref3.price,
            subtitle = _ref3.subtitle,
            title = _ref3.title;
        var itemColumns;

        if (url) {
          var _builder$addColumnSet3 = builder.addColumnSet([15, 75, 10]),
              _builder$addColumnSet4 = (0, _toArray2.default)(_builder$addColumnSet3),
              itemImageColumn = _builder$addColumnSet4[0],
              columns = _builder$addColumnSet4.slice(1);

          itemColumns = columns;
          builder.addImage(url, itemImageColumn, tap);
        } else {
          itemColumns = builder.addColumnSet([75, 25]);
        }

        var _itemColumns = itemColumns,
            _itemColumns2 = (0, _slicedToArray2.default)(_itemColumns, 2),
            itemTitleColumn = _itemColumns2[0],
            itemPriceColumn = _itemColumns2[1];

        builder.addTextBlock(title, {
          size: TextSize.Medium,
          weight: TextWeight.Bolder,
          wrap: richCardWrapTitle
        }, itemTitleColumn);
        builder.addTextBlock(subtitle, {
          size: TextSize.Medium,
          wrap: richCardWrapTitle
        }, itemTitleColumn);
        builder.addTextBlock(price, {
          horizontalAlignment: HorizontalAlignment.Right
        }, itemPriceColumn);
      });

      if (!nullOrUndefined(vat)) {
        var vatCol = builder.addColumnSet([75, 25]);
        builder.addTextBlock(vatText, {
          size: TextSize.Medium,
          weight: TextWeight.Bolder
        }, vatCol[0]);
        builder.addTextBlock(vat, {
          horizontalAlignment: HorizontalAlignment.Right
        }, vatCol[1]);
      }

      if (!nullOrUndefined(tax)) {
        var taxCol = builder.addColumnSet([75, 25]);
        builder.addTextBlock(taxText, {
          size: TextSize.Medium,
          weight: TextWeight.Bolder
        }, taxCol[0]);
        builder.addTextBlock(tax, {
          horizontalAlignment: HorizontalAlignment.Right
        }, taxCol[1]);
      }

      if (!nullOrUndefined(total)) {
        var totalCol = builder.addColumnSet([75, 25]);
        builder.addTextBlock(totalText, {
          size: TextSize.Medium,
          weight: TextWeight.Bolder
        }, totalCol[0]);
        builder.addTextBlock(total, {
          horizontalAlignment: HorizontalAlignment.Right,
          size: TextSize.Medium,
          weight: TextWeight.Bolder
        }, totalCol[1]);
      }

      builder.addButtons(buttons);
      return builder.card;
    }
  }, [adaptiveCardsPackage, content, direction, styleOptions, taxText, totalText, vatText]);
  return _react.default.createElement(_AdaptiveCardRenderer.default, {
    adaptiveCard: builtCard,
    tapAction: content && content.tap
  });
};

ReceiptCardAttachment.propTypes = {
  attachment: _propTypes.default.shape({
    content: _propTypes.default.shape({
      buttons: _propTypes.default.array,
      facts: _propTypes.default.arrayOf(_propTypes.default.shape({
        key: _propTypes.default.string,
        value: _propTypes.default.string
      })),
      items: _propTypes.default.arrayOf(_propTypes.default.shape({
        image: _propTypes.default.shape({
          tap: _propTypes.default.any,
          url: _propTypes.default.string.isRequired
        }),
        price: _propTypes.default.string.isRequired,
        subtitle: _propTypes.default.string,
        title: _propTypes.default.string.isRequired
      })),
      tap: _propTypes.default.any,
      tax: _propTypes.default.string,
      title: _propTypes.default.string,
      total: _propTypes.default.string,
      vat: _propTypes.default.string
    }).isRequired
  }).isRequired
};
var _default = ReceiptCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvUmVjZWlwdENhcmRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbInVzZURpcmVjdGlvbiIsImhvb2tzIiwidXNlTG9jYWxpemVyIiwidXNlU3R5bGVPcHRpb25zIiwibnVsbE9yVW5kZWZpbmVkIiwib2JqIiwiUmVjZWlwdENhcmRBdHRhY2htZW50IiwiY29udGVudCIsImF0dGFjaG1lbnQiLCJhZGFwdGl2ZUNhcmRzUGFja2FnZSIsImRpcmVjdGlvbiIsInN0eWxlT3B0aW9ucyIsImxvY2FsaXplIiwidGF4VGV4dCIsInRvdGFsVGV4dCIsInZhdFRleHQiLCJidWlsdENhcmQiLCJidWlsZGVyIiwiQWRhcHRpdmVDYXJkQnVpbGRlciIsIkhvcml6b250YWxBbGlnbm1lbnQiLCJUZXh0U2l6ZSIsIlRleHRXZWlnaHQiLCJidXR0b25zIiwiZmFjdHMiLCJpdGVtcyIsInRheCIsInRpdGxlIiwidG90YWwiLCJ2YXQiLCJyaWNoQ2FyZFdyYXBUaXRsZSIsImFkZFRleHRCbG9jayIsInNpemUiLCJNZWRpdW0iLCJ3ZWlnaHQiLCJCb2xkZXIiLCJ3cmFwIiwiYWRkQ29sdW1uU2V0IiwiZmlyc3RGYWN0Q29sdW1uIiwibGFzdEZhY3RDb2x1bW4iLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImhvcml6b250YWxBbGlnbm1lbnQiLCJSaWdodCIsImltYWdlIiwidGFwIiwidXJsIiwicHJpY2UiLCJzdWJ0aXRsZSIsIml0ZW1Db2x1bW5zIiwiaXRlbUltYWdlQ29sdW1uIiwiY29sdW1ucyIsImFkZEltYWdlIiwiaXRlbVRpdGxlQ29sdW1uIiwiaXRlbVByaWNlQ29sdW1uIiwidmF0Q29sIiwidGF4Q29sIiwidG90YWxDb2wiLCJhZGRCdXR0b25zIiwiY2FyZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiYXJyYXkiLCJhcnJheU9mIiwic3RyaW5nIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBw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QUFBQSxHQUFHLEVBQUVvQyxtQkFBVUksTUFwQlE7QUFxQnZCdkMsTUFBQUEsS0FBSyxFQUFFbUMsbUJBQVVJLE1BckJNO0FBc0J2QnRDLE1BQUFBLEtBQUssRUFBRWtDLG1CQUFVSSxNQXRCTTtBQXVCdkJyQyxNQUFBQSxHQUFHLEVBQUVpQyxtQkFBVUk7QUF2QlEsS0FBaEIsRUF3Qk5FO0FBekJ1QixHQUFoQixFQTBCVEE7QUEzQjZCLENBQWxDO2VBOEJlN0QscUIiLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlXCI6IFswLCAxLCAxMCwgMTUsIDI1LCA3NV0gfV0gKi9cclxuXHJcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQWRhcHRpdmVDYXJkQnVpbGRlciBmcm9tICcuL0FkYXB0aXZlQ2FyZEJ1aWxkZXInO1xyXG5pbXBvcnQgQWRhcHRpdmVDYXJkUmVuZGVyZXIgZnJvbSAnLi9BZGFwdGl2ZUNhcmRSZW5kZXJlcic7XHJcbmltcG9ydCB1c2VBZGFwdGl2ZUNhcmRzUGFja2FnZSBmcm9tICcuLi9ob29rcy91c2VBZGFwdGl2ZUNhcmRzUGFja2FnZSc7XHJcblxyXG5jb25zdCB7IHVzZURpcmVjdGlvbiwgdXNlTG9jYWxpemVyLCB1c2VTdHlsZU9wdGlvbnMgfSA9IGhvb2tzO1xyXG5cclxuZnVuY3Rpb24gbnVsbE9yVW5kZWZpbmVkKG9iaikge1xyXG4gIHJldHVybiBvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmNvbnN0IFJlY2VpcHRDYXJkQXR0YWNobWVudCA9ICh7IGF0dGFjaG1lbnQ6IHsgY29udGVudCB9IH0pID0+IHtcclxuICBjb25zdCBbYWRhcHRpdmVDYXJkc1BhY2thZ2VdID0gdXNlQWRhcHRpdmVDYXJkc1BhY2thZ2UoKTtcclxuICBjb25zdCBbZGlyZWN0aW9uXSA9IHVzZURpcmVjdGlvbigpO1xyXG4gIGNvbnN0IFtzdHlsZU9wdGlvbnNdID0gdXNlU3R5bGVPcHRpb25zKCk7XHJcbiAgY29uc3QgbG9jYWxpemUgPSB1c2VMb2NhbGl6ZXIoKTtcclxuXHJcbiAgY29uc3QgdGF4VGV4dCA9IGxvY2FsaXplKCdSRUNFSVBUX0NBUkRfVEFYJyk7XHJcbiAgY29uc3QgdG90YWxUZXh0ID0gbG9jYWxpemUoJ1JFQ0VJUFRfQ0FSRF9UT1RBTCcpO1xyXG4gIGNvbnN0IHZhdFRleHQgPSBsb2NhbGl6ZSgnUkVDRUlQVF9DQVJEX1ZBVCcpO1xyXG5cclxuICBjb25zdCBidWlsdENhcmQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQWRhcHRpdmVDYXJkQnVpbGRlcihhZGFwdGl2ZUNhcmRzUGFja2FnZSwgc3R5bGVPcHRpb25zLCBkaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgeyBIb3Jpem9udGFsQWxpZ25tZW50LCBUZXh0U2l6ZSwgVGV4dFdlaWdodCB9ID0gYWRhcHRpdmVDYXJkc1BhY2thZ2U7XHJcbiAgICBjb25zdCB7IGJ1dHRvbnMsIGZhY3RzLCBpdGVtcywgdGF4LCB0aXRsZSwgdG90YWwsIHZhdCB9ID0gY29udGVudDtcclxuICAgIGNvbnN0IHsgcmljaENhcmRXcmFwVGl0bGUgfSA9IHN0eWxlT3B0aW9ucztcclxuXHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICBidWlsZGVyLmFkZFRleHRCbG9jayh0aXRsZSwgeyBzaXplOiBUZXh0U2l6ZS5NZWRpdW0sIHdlaWdodDogVGV4dFdlaWdodC5Cb2xkZXIsIHdyYXA6IHJpY2hDYXJkV3JhcFRpdGxlIH0pO1xyXG5cclxuICAgICAgaWYgKGZhY3RzKSB7XHJcbiAgICAgICAgY29uc3QgW2ZpcnN0RmFjdENvbHVtbiwgbGFzdEZhY3RDb2x1bW5dID0gYnVpbGRlci5hZGRDb2x1bW5TZXQoWzc1LCAyNV0pO1xyXG5cclxuICAgICAgICBmYWN0cy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhrZXksIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtIH0sIGZpcnN0RmFjdENvbHVtbik7XHJcbiAgICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayhcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0IH0sXHJcbiAgICAgICAgICAgIGxhc3RGYWN0Q29sdW1uXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtcyAmJlxyXG4gICAgICAgIGl0ZW1zLm1hcCgoeyBpbWFnZTogeyB0YXAsIHVybCB9ID0ge30sIHByaWNlLCBzdWJ0aXRsZSwgdGl0bGUgfSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGl0ZW1Db2x1bW5zO1xyXG5cclxuICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgY29uc3QgW2l0ZW1JbWFnZUNvbHVtbiwgLi4uY29sdW1uc10gPSBidWlsZGVyLmFkZENvbHVtblNldChbMTUsIDc1LCAxMF0pO1xyXG5cclxuICAgICAgICAgICAgaXRlbUNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgICAgICAgICBidWlsZGVyLmFkZEltYWdlKHVybCwgaXRlbUltYWdlQ29sdW1uLCB0YXApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbUNvbHVtbnMgPSBidWlsZGVyLmFkZENvbHVtblNldChbNzUsIDI1XSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgW2l0ZW1UaXRsZUNvbHVtbiwgaXRlbVByaWNlQ29sdW1uXSA9IGl0ZW1Db2x1bW5zO1xyXG5cclxuICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgeyBzaXplOiBUZXh0U2l6ZS5NZWRpdW0sIHdlaWdodDogVGV4dFdlaWdodC5Cb2xkZXIsIHdyYXA6IHJpY2hDYXJkV3JhcFRpdGxlIH0sXHJcbiAgICAgICAgICAgIGl0ZW1UaXRsZUNvbHVtblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHN1YnRpdGxlLCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd3JhcDogcmljaENhcmRXcmFwVGl0bGUgfSwgaXRlbVRpdGxlQ29sdW1uKTtcclxuICAgICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHByaWNlLCB7IGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQgfSwgaXRlbVByaWNlQ29sdW1uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghbnVsbE9yVW5kZWZpbmVkKHZhdCkpIHtcclxuICAgICAgICBjb25zdCB2YXRDb2wgPSBidWlsZGVyLmFkZENvbHVtblNldChbNzUsIDI1XSk7XHJcblxyXG4gICAgICAgIGJ1aWxkZXIuYWRkVGV4dEJsb2NrKHZhdFRleHQsIHsgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyIH0sIHZhdENvbFswXSk7XHJcbiAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2sodmF0LCB7IGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQgfSwgdmF0Q29sWzFdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFudWxsT3JVbmRlZmluZWQodGF4KSkge1xyXG4gICAgICAgIGNvbnN0IHRheENvbCA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcclxuXHJcbiAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2sodGF4VGV4dCwgeyBzaXplOiBUZXh0U2l6ZS5NZWRpdW0sIHdlaWdodDogVGV4dFdlaWdodC5Cb2xkZXIgfSwgdGF4Q29sWzBdKTtcclxuICAgICAgICBidWlsZGVyLmFkZFRleHRCbG9jayh0YXgsIHsgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCB9LCB0YXhDb2xbMV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIW51bGxPclVuZGVmaW5lZCh0b3RhbCkpIHtcclxuICAgICAgICBjb25zdCB0b3RhbENvbCA9IGJ1aWxkZXIuYWRkQ29sdW1uU2V0KFs3NSwgMjVdKTtcclxuXHJcbiAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2sodG90YWxUZXh0LCB7IHNpemU6IFRleHRTaXplLk1lZGl1bSwgd2VpZ2h0OiBUZXh0V2VpZ2h0LkJvbGRlciB9LCB0b3RhbENvbFswXSk7XHJcbiAgICAgICAgYnVpbGRlci5hZGRUZXh0QmxvY2soXHJcbiAgICAgICAgICB0b3RhbCxcclxuICAgICAgICAgIHsgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCwgc2l6ZTogVGV4dFNpemUuTWVkaXVtLCB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyIH0sXHJcbiAgICAgICAgICB0b3RhbENvbFsxXVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1aWxkZXIuYWRkQnV0dG9ucyhidXR0b25zKTtcclxuXHJcbiAgICAgIHJldHVybiBidWlsZGVyLmNhcmQ7XHJcbiAgICB9XHJcbiAgfSwgW2FkYXB0aXZlQ2FyZHNQYWNrYWdlLCBjb250ZW50LCBkaXJlY3Rpb24sIHN0eWxlT3B0aW9ucywgdGF4VGV4dCwgdG90YWxUZXh0LCB2YXRUZXh0XSk7XHJcblxyXG4gIHJldHVybiA8QWRhcHRpdmVDYXJkUmVuZGVyZXIgYWRhcHRpdmVDYXJkPXtidWlsdENhcmR9IHRhcEFjdGlvbj17Y29udGVudCAmJiBjb250ZW50LnRhcH0gLz47XHJcbn07XHJcblxyXG5SZWNlaXB0Q2FyZEF0dGFjaG1lbnQucHJvcFR5cGVzID0ge1xyXG4gIGF0dGFjaG1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgIGZhY3RzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAga2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgIGltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgICB0YXA6IFByb3BUeXBlcy5hbnksXHJcbiAgICAgICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICB0YXA6IFByb3BUeXBlcy5hbnksXHJcbiAgICAgIHRheDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHRvdGFsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2YXQ6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0pLmlzUmVxdWlyZWRcclxuICB9KS5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0Q2FyZEF0dGFjaG1lbnQ7XHJcbiJdfQ==