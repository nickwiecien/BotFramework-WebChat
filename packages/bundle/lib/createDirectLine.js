"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDirectLine;

var _botframeworkDirectlinejs = require("botframework-directlinejs");

function createDirectLine(_ref) {
  var botAgent = _ref.botAgent,
      conversationId = _ref.conversationId,
      domain = _ref.domain,
      fetch = _ref.fetch,
      pollingInterval = _ref.pollingInterval,
      secret = _ref.secret,
      streamUrl = _ref.streamUrl,
      token = _ref.token,
      watermark = _ref.watermark,
      webSocket = _ref.webSocket;
  return new _botframeworkDirectlinejs.DirectLine({
    botAgent: botAgent,
    conversationId: conversationId,
    domain: domain,
    fetch: fetch,
    pollingInterval: pollingInterval,
    secret: secret,
    streamUrl: streamUrl,
    token: token,
    watermark: watermark,
    webSocket: webSocket,
    createFormData: function createFormData(attachments) {
      var formData = new FormData();
      attachments.forEach(function (_ref2) {
        var contentType = _ref2.contentType,
            data = _ref2.data,
            filename = _ref2.filename,
            name = _ref2.name;
        formData.append(name, new Blob(data, {
          contentType: contentType
        }), filename);
      });
      return formData;
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXJlY3RMaW5lLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURpcmVjdExpbmUiLCJib3RBZ2VudCIsImNvbnZlcnNhdGlvbklkIiwiZG9tYWluIiwiZmV0Y2giLCJwb2xsaW5nSW50ZXJ2YWwiLCJzZWNyZXQiLCJzdHJlYW1VcmwiLCJ0b2tlbiIsIndhdGVybWFyayIsIndlYlNvY2tldCIsIkRpcmVjdExpbmUiLCJjcmVhdGVGb3JtRGF0YSIsImF0dGFjaG1lbnRzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjb250ZW50VHlwZSIsImRhdGEiLCJmaWxlbmFtZSIsIm5hbWUiLCJhcHBlbmQiLCJCbG9iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRWUsU0FBU0EsZ0JBQVQsT0FXWjtBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLGNBU0MsUUFUREEsY0FTQztBQUFBLE1BUkRDLE1BUUMsUUFSREEsTUFRQztBQUFBLE1BUERDLEtBT0MsUUFQREEsS0FPQztBQUFBLE1BTkRDLGVBTUMsUUFOREEsZUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLFNBSUMsUUFKREEsU0FJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLFNBRUMsUUFGREEsU0FFQztBQUFBLE1BRERDLFNBQ0MsUUFEREEsU0FDQztBQUNELFNBQU8sSUFBSUMsb0NBQUosQ0FBZTtBQUNwQlYsSUFBQUEsUUFBUSxFQUFSQSxRQURvQjtBQUVwQkMsSUFBQUEsY0FBYyxFQUFkQSxjQUZvQjtBQUdwQkMsSUFBQUEsTUFBTSxFQUFOQSxNQUhvQjtBQUlwQkMsSUFBQUEsS0FBSyxFQUFMQSxLQUpvQjtBQUtwQkMsSUFBQUEsZUFBZSxFQUFmQSxlQUxvQjtBQU1wQkMsSUFBQUEsTUFBTSxFQUFOQSxNQU5vQjtBQU9wQkMsSUFBQUEsU0FBUyxFQUFUQSxTQVBvQjtBQVFwQkMsSUFBQUEsS0FBSyxFQUFMQSxLQVJvQjtBQVNwQkMsSUFBQUEsU0FBUyxFQUFUQSxTQVRvQjtBQVVwQkMsSUFBQUEsU0FBUyxFQUFUQSxTQVZvQjtBQVdwQkUsSUFBQUEsY0FBYyxFQUFFLHdCQUFBQyxXQUFXLEVBQUk7QUFDN0IsVUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFFQUYsTUFBQUEsV0FBVyxDQUFDRyxPQUFaLENBQW9CLGlCQUEyQztBQUFBLFlBQXhDQyxXQUF3QyxTQUF4Q0EsV0FBd0M7QUFBQSxZQUEzQkMsSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsWUFBckJDLFFBQXFCLFNBQXJCQSxRQUFxQjtBQUFBLFlBQVhDLElBQVcsU0FBWEEsSUFBVztBQUM3RE4sUUFBQUEsUUFBUSxDQUFDTyxNQUFULENBQWdCRCxJQUFoQixFQUFzQixJQUFJRSxJQUFKLENBQVNKLElBQVQsRUFBZTtBQUFFRCxVQUFBQSxXQUFXLEVBQVhBO0FBQUYsU0FBZixDQUF0QixFQUF1REUsUUFBdkQ7QUFDRCxPQUZEO0FBSUEsYUFBT0wsUUFBUDtBQUNEO0FBbkJtQixHQUFmLENBQVA7QUFxQkQiLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdExpbmUgfSBmcm9tICdib3RmcmFtZXdvcmstZGlyZWN0bGluZWpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdExpbmUoe1xyXG4gIGJvdEFnZW50LFxyXG4gIGNvbnZlcnNhdGlvbklkLFxyXG4gIGRvbWFpbixcclxuICBmZXRjaCxcclxuICBwb2xsaW5nSW50ZXJ2YWwsXHJcbiAgc2VjcmV0LFxyXG4gIHN0cmVhbVVybCxcclxuICB0b2tlbixcclxuICB3YXRlcm1hcmssXHJcbiAgd2ViU29ja2V0XHJcbn0pIHtcclxuICByZXR1cm4gbmV3IERpcmVjdExpbmUoe1xyXG4gICAgYm90QWdlbnQsXHJcbiAgICBjb252ZXJzYXRpb25JZCxcclxuICAgIGRvbWFpbixcclxuICAgIGZldGNoLFxyXG4gICAgcG9sbGluZ0ludGVydmFsLFxyXG4gICAgc2VjcmV0LFxyXG4gICAgc3RyZWFtVXJsLFxyXG4gICAgdG9rZW4sXHJcbiAgICB3YXRlcm1hcmssXHJcbiAgICB3ZWJTb2NrZXQsXHJcbiAgICBjcmVhdGVGb3JtRGF0YTogYXR0YWNobWVudHMgPT4ge1xyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgYXR0YWNobWVudHMuZm9yRWFjaCgoeyBjb250ZW50VHlwZSwgZGF0YSwgZmlsZW5hbWUsIG5hbWUgfSkgPT4ge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCBuZXcgQmxvYihkYXRhLCB7IGNvbnRlbnRUeXBlIH0pLCBmaWxlbmFtZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==