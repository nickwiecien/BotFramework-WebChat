"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _adaptivecards = require("adaptivecards");

function addCardAction(cardAction, includesOAuthButtons) {
  var type = cardAction.type;
  var action;

  if (type === 'imBack' || type === 'messageBack' || type === 'postBack' || type === 'signin' && includesOAuthButtons) {
    action = new _adaptivecards.SubmitAction();
    action.data = {
      __isBotFrameworkCardAction: true,
      cardAction: cardAction
    };
    action.title = cardAction.title;
  } else {
    action = new _adaptivecards.OpenUrlAction();
    action.title = cardAction.title;
    action.url = cardAction.type === 'call' ? "tel:".concat(cardAction.value) : cardAction.value;
  }

  return action;
}

var AdaptiveCardBuilder = /*#__PURE__*/function () {
  function AdaptiveCardBuilder(adaptiveCards, styleOptions) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
    (0, _classCallCheck2.default)(this, AdaptiveCardBuilder);
    (0, _defineProperty2.default)(this, "card", void 0);
    (0, _defineProperty2.default)(this, "container", void 0);
    (0, _defineProperty2.default)(this, "styleOptions", void 0);
    this.card = new adaptiveCards.AdaptiveCard();
    this.container = new _adaptivecards.Container();
    this.container.rtl = direction === 'rtl';
    this.styleOptions = styleOptions;
    this.card.addItem(this.container);
  }

  (0, _createClass2.default)(AdaptiveCardBuilder, [{
    key: "addColumnSet",
    value: function addColumnSet(sizes) {
      var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;
      var columnSet = new _adaptivecards.ColumnSet();
      container.addItem(columnSet);
      return sizes.map(function (size) {
        var column = new _adaptivecards.Column();
        column.width = _adaptivecards.SizeAndUnit.parse(size);
        columnSet.addColumn(column);
        return column;
      });
    }
  }, {
    key: "addItems",
    value: function addItems(cardElements) {
      var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;
      cardElements.forEach(function (cardElement) {
        return container.addItem(cardElement);
      });
    }
  }, {
    key: "addTextBlock",
    value: function addTextBlock(text, template) {
      var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.container;

      if (typeof text !== 'undefined') {
        var textblock = new _adaptivecards.TextBlock(); // tslint:disable-next-line:forin

        for (var prop in template) {
          textblock[prop] = template[prop];
        }

        textblock.text = text;
        container.addItem(textblock);
      }
    }
  }, {
    key: "addButtons",
    value: function addButtons(cardActions, includesOAuthButtons) {
      var _this = this;

      cardActions && cardActions.forEach(function (cardAction) {
        _this.card.addAction(addCardAction(cardAction, includesOAuthButtons));
      });
    }
  }, {
    key: "addCommonHeaders",
    value: function addCommonHeaders(content) {
      var richCardWrapTitle = this.styleOptions.richCardWrapTitle;
      this.addTextBlock(content.title, {
        color: _adaptivecards.TextColor.Dark,
        size: _adaptivecards.TextSize.Medium,
        weight: _adaptivecards.TextWeight.Bolder,
        wrap: richCardWrapTitle
      });
      this.addTextBlock(content.subtitle, {
        color: _adaptivecards.TextColor.Dark,
        isSubtle: true,
        wrap: richCardWrapTitle
      });
      this.addTextBlock(content.text, {
        color: _adaptivecards.TextColor.Dark,
        wrap: true
      });
    }
  }, {
    key: "addCommon",
    value: function addCommon(content) {
      this.addCommonHeaders(content);
      this.addButtons(content.buttons);
    }
  }, {
    key: "addImage",
    value: function addImage(url, container, selectAction) {
      container = container || this.container;
      var image = new _adaptivecards.Image();
      image.url = url;
      image.selectAction = selectAction && addCardAction(selectAction);
      image.size = _adaptivecards.Size.Stretch;
      container.addItem(image);
    }
  }]);
  return AdaptiveCardBuilder;
}();

exports.default = AdaptiveCardBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnQvQWRhcHRpdmVDYXJkQnVpbGRlci50cyJdLCJuYW1lcyI6WyJhZGRDYXJkQWN0aW9uIiwiY2FyZEFjdGlvbiIsImluY2x1ZGVzT0F1dGhCdXR0b25zIiwidHlwZSIsImFjdGlvbiIsIlN1Ym1pdEFjdGlvbiIsImRhdGEiLCJfX2lzQm90RnJhbWV3b3JrQ2FyZEFjdGlvbiIsInRpdGxlIiwiT3BlblVybEFjdGlvbiIsInVybCIsInZhbHVlIiwiQWRhcHRpdmVDYXJkQnVpbGRlciIsImFkYXB0aXZlQ2FyZHMiLCJzdHlsZU9wdGlvbnMiLCJkaXJlY3Rpb24iLCJjYXJkIiwiQWRhcHRpdmVDYXJkIiwiY29udGFpbmVyIiwiQ29udGFpbmVyIiwicnRsIiwiYWRkSXRlbSIsInNpemVzIiwiY29sdW1uU2V0IiwiQ29sdW1uU2V0IiwibWFwIiwic2l6ZSIsImNvbHVtbiIsIkNvbHVtbiIsIndpZHRoIiwiU2l6ZUFuZFVuaXQiLCJwYXJzZSIsImFkZENvbHVtbiIsImNhcmRFbGVtZW50cyIsImZvckVhY2giLCJjYXJkRWxlbWVudCIsInRleHQiLCJ0ZW1wbGF0ZSIsInRleHRibG9jayIsIlRleHRCbG9jayIsInByb3AiLCJjYXJkQWN0aW9ucyIsImFkZEFjdGlvbiIsImNvbnRlbnQiLCJyaWNoQ2FyZFdyYXBUaXRsZSIsImFkZFRleHRCbG9jayIsImNvbG9yIiwiVGV4dENvbG9yIiwiRGFyayIsIlRleHRTaXplIiwiTWVkaXVtIiwid2VpZ2h0IiwiVGV4dFdlaWdodCIsIkJvbGRlciIsIndyYXAiLCJzdWJ0aXRsZSIsImlzU3VidGxlIiwiYWRkQ29tbW9uSGVhZGVycyIsImFkZEJ1dHRvbnMiLCJidXR0b25zIiwic2VsZWN0QWN0aW9uIiwiaW1hZ2UiLCJJbWFnZSIsIlNpemUiLCJTdHJldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUF3QkEsU0FBU0EsYUFBVCxDQUF1QkMs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QUEsU0FBUyxHQUFHQSxTQUFTLElBQUksS0FBS0EsU0FBOUI7QUFFQSxVQUFNMkMsS0FBSyxHQUFHLElBQUlDLG9CQUFKLEVBQWQ7QUFFQUQsTUFBQUEsS0FBSyxDQUFDbkQsR0FBTixHQUFZQSxHQUFaO0FBQ0FtRCxNQUFBQSxLQUFLLENBQUNELFlBQU4sR0FBcUJBLFlBQVksSUFBSTVELGFBQWEsQ0FBQzRELFlBQUQsQ0FBbEQ7QUFDQUMsTUFBQUEsS0FBSyxDQUFDbkMsSUFBTixHQUFhcUMsb0JBQUtDLE9BQWxCO0FBRUE5QyxNQUFBQSxTQUFTLENBQUNHLE9BQVYsQ0FBa0J3QyxLQUFsQjtBQUNEIiwic291cmNlUm9vdCI6ImJ1bmRsZTovLy8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFkYXB0aXZlQ2FyZCxcclxuICBDYXJkRWxlbWVudCxcclxuICBDb2x1bW4sXHJcbiAgQ29sdW1uU2V0LFxyXG4gIENvbnRhaW5lcixcclxuICBJbWFnZSxcclxuICBPcGVuVXJsQWN0aW9uLFxyXG4gIFNpemUsXHJcbiAgU2l6ZUFuZFVuaXQsXHJcbiAgU3VibWl0QWN0aW9uLFxyXG4gIFRleHRCbG9jayxcclxuICBUZXh0Q29sb3IsXHJcbiAgVGV4dFNpemUsXHJcbiAgVGV4dFdlaWdodFxyXG59IGZyb20gJ2FkYXB0aXZlY2FyZHMnO1xyXG5cclxuaW1wb3J0IHsgQ2FyZEFjdGlvbiB9IGZyb20gJ2JvdGZyYW1ld29yay1kaXJlY3RsaW5lanMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCb3RGcmFtZXdvcmtDYXJkQWN0aW9uIHtcclxuICBfX2lzQm90RnJhbWV3b3JrQ2FyZEFjdGlvbjogYm9vbGVhbjtcclxuICBjYXJkQWN0aW9uOiBDYXJkQWN0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDYXJkQWN0aW9uKGNhcmRBY3Rpb246IENhcmRBY3Rpb24sIGluY2x1ZGVzT0F1dGhCdXR0b25zPzogYm9vbGVhbikge1xyXG4gIGNvbnN0IHsgdHlwZSB9ID0gY2FyZEFjdGlvbjtcclxuICBsZXQgYWN0aW9uO1xyXG5cclxuICBpZiAoXHJcbiAgICB0eXBlID09PSAnaW1CYWNrJyB8fFxyXG4gICAgdHlwZSA9PT0gJ21lc3NhZ2VCYWNrJyB8fFxyXG4gICAgdHlwZSA9PT0gJ3Bvc3RCYWNrJyB8fFxyXG4gICAgKHR5cGUgPT09ICdzaWduaW4nICYmIGluY2x1ZGVzT0F1dGhCdXR0b25zKVxyXG4gICkge1xyXG4gICAgYWN0aW9uID0gbmV3IFN1Ym1pdEFjdGlvbigpO1xyXG5cclxuICAgIGFjdGlvbi5kYXRhID0ge1xyXG4gICAgICBfX2lzQm90RnJhbWV3b3JrQ2FyZEFjdGlvbjogdHJ1ZSxcclxuICAgICAgY2FyZEFjdGlvblxyXG4gICAgfTtcclxuXHJcbiAgICBhY3Rpb24udGl0bGUgPSBjYXJkQWN0aW9uLnRpdGxlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhY3Rpb24gPSBuZXcgT3BlblVybEFjdGlvbigpO1xyXG5cclxuICAgIGFjdGlvbi50aXRsZSA9IGNhcmRBY3Rpb24udGl0bGU7XHJcbiAgICBhY3Rpb24udXJsID0gY2FyZEFjdGlvbi50eXBlID09PSAnY2FsbCcgPyBgdGVsOiR7Y2FyZEFjdGlvbi52YWx1ZX1gIDogY2FyZEFjdGlvbi52YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlQ2FyZEJ1aWxkZXIge1xyXG4gIGNhcmQ6IEFkYXB0aXZlQ2FyZDtcclxuICBjb250YWluZXI6IENvbnRhaW5lcjtcclxuICBzdHlsZU9wdGlvbnM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoYWRhcHRpdmVDYXJkcywgc3R5bGVPcHRpb25zLCBkaXJlY3Rpb24gPSAnbHRyJykge1xyXG4gICAgdGhpcy5jYXJkID0gbmV3IGFkYXB0aXZlQ2FyZHMuQWRhcHRpdmVDYXJkKCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnJ0bCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCc7XHJcbiAgICB0aGlzLnN0eWxlT3B0aW9ucyA9IHN0eWxlT3B0aW9ucztcclxuXHJcbiAgICB0aGlzLmNhcmQuYWRkSXRlbSh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBhZGRDb2x1bW5TZXQoc2l6ZXM6IG51bWJlcltdLCBjb250YWluZXI6IENvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBjb2x1bW5TZXQgPSBuZXcgQ29sdW1uU2V0KCk7XHJcblxyXG4gICAgY29udGFpbmVyLmFkZEl0ZW0oY29sdW1uU2V0KTtcclxuXHJcbiAgICByZXR1cm4gc2l6ZXMubWFwKHNpemUgPT4ge1xyXG4gICAgICBjb25zdCBjb2x1bW4gPSBuZXcgQ29sdW1uKCk7XHJcblxyXG4gICAgICBjb2x1bW4ud2lkdGggPSBTaXplQW5kVW5pdC5wYXJzZShzaXplKTtcclxuXHJcbiAgICAgIGNvbHVtblNldC5hZGRDb2x1bW4oY29sdW1uKTtcclxuXHJcbiAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW1zKGNhcmRFbGVtZW50czogQ2FyZEVsZW1lbnRbXSwgY29udGFpbmVyOiBDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgY2FyZEVsZW1lbnRzLmZvckVhY2goY2FyZEVsZW1lbnQgPT4gY29udGFpbmVyLmFkZEl0ZW0oY2FyZEVsZW1lbnQpKTtcclxuICB9XHJcblxyXG4gIGFkZFRleHRCbG9jayh0ZXh0OiBzdHJpbmcsIHRlbXBsYXRlOiBQYXJ0aWFsPFRleHRCbG9jaz4sIGNvbnRhaW5lcjogQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIpIHtcclxuICAgIGlmICh0eXBlb2YgdGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgdGV4dGJsb2NrID0gbmV3IFRleHRCbG9jaygpO1xyXG5cclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0ZW1wbGF0ZSkge1xyXG4gICAgICAgIHRleHRibG9ja1twcm9wXSA9IHRlbXBsYXRlW3Byb3BdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YmxvY2sudGV4dCA9IHRleHQ7XHJcblxyXG4gICAgICBjb250YWluZXIuYWRkSXRlbSh0ZXh0YmxvY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQnV0dG9ucyhjYXJkQWN0aW9uczogQ2FyZEFjdGlvbltdLCBpbmNsdWRlc09BdXRoQnV0dG9ucz86IGJvb2xlYW4pIHtcclxuICAgIGNhcmRBY3Rpb25zICYmXHJcbiAgICAgIGNhcmRBY3Rpb25zLmZvckVhY2goY2FyZEFjdGlvbiA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJkLmFkZEFjdGlvbihhZGRDYXJkQWN0aW9uKGNhcmRBY3Rpb24sIGluY2x1ZGVzT0F1dGhCdXR0b25zKSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29tbW9uSGVhZGVycyhjb250ZW50OiBJQ29tbW9uQ29udGVudCkge1xyXG4gICAgY29uc3QgeyByaWNoQ2FyZFdyYXBUaXRsZSB9ID0gdGhpcy5zdHlsZU9wdGlvbnM7XHJcbiAgICB0aGlzLmFkZFRleHRCbG9jayhjb250ZW50LnRpdGxlLCB7XHJcbiAgICAgIGNvbG9yOiBUZXh0Q29sb3IuRGFyayxcclxuICAgICAgc2l6ZTogVGV4dFNpemUuTWVkaXVtLFxyXG4gICAgICB3ZWlnaHQ6IFRleHRXZWlnaHQuQm9sZGVyLFxyXG4gICAgICB3cmFwOiByaWNoQ2FyZFdyYXBUaXRsZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZFRleHRCbG9jayhjb250ZW50LnN1YnRpdGxlLCB7IGNvbG9yOiBUZXh0Q29sb3IuRGFyaywgaXNTdWJ0bGU6IHRydWUsIHdyYXA6IHJpY2hDYXJkV3JhcFRpdGxlIH0pO1xyXG4gICAgdGhpcy5hZGRUZXh0QmxvY2soY29udGVudC50ZXh0LCB7IGNvbG9yOiBUZXh0Q29sb3IuRGFyaywgd3JhcDogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIGFkZENvbW1vbihjb250ZW50OiBJQ29tbW9uQ29udGVudCkge1xyXG4gICAgdGhpcy5hZGRDb21tb25IZWFkZXJzKGNvbnRlbnQpO1xyXG4gICAgdGhpcy5hZGRCdXR0b25zKGNvbnRlbnQuYnV0dG9ucyk7XHJcbiAgfVxyXG5cclxuICBhZGRJbWFnZSh1cmw6IHN0cmluZywgY29udGFpbmVyPzogQ29udGFpbmVyLCBzZWxlY3RBY3Rpb24/OiBDYXJkQWN0aW9uKSB7XHJcbiAgICBjb250YWluZXIgPSBjb250YWluZXIgfHwgdGhpcy5jb250YWluZXI7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBpbWFnZS51cmwgPSB1cmw7XHJcbiAgICBpbWFnZS5zZWxlY3RBY3Rpb24gPSBzZWxlY3RBY3Rpb24gJiYgYWRkQ2FyZEFjdGlvbihzZWxlY3RBY3Rpb24pO1xyXG4gICAgaW1hZ2Uuc2l6ZSA9IFNpemUuU3RyZXRjaDtcclxuXHJcbiAgICBjb250YWluZXIuYWRkSXRlbShpbWFnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tb25Db250ZW50IHtcclxuICBidXR0b25zPzogQ2FyZEFjdGlvbltdO1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuIl19