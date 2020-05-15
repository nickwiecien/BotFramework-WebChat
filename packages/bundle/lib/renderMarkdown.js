"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _markdownItForInline = _interopRequireDefault(require("markdown-it-for-inline"));

var _markdownIt = _interopRequireDefault(require("markdown-it"));

var _markdownItAttrsEs = _interopRequireDefault(require("markdown-it-attrs-es5"));

var _sanitizeHtml = _interopRequireDefault(require("sanitize-html"));

/* eslint no-magic-numbers: ["error", { "ignore": [1] }] */
var SANITIZE_HTML_OPTIONS = {
  allowedAttributes: {
    a: ['aria-label', 'href', 'name', 'target', 'title'],
    img: ['alt', 'src']
  },
  allowedSchemes: ['data', 'http', 'https', 'ftp', 'mailto', 'sip', 'tel'],
  allowedTags: ['a', 'b', 'blockquote', 'br', 'caption', 'code', 'div', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'li', 'nl', 'ol', 'p', 'pre', 'span', 'strike', 'strong', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul']
};
var customMarkdownIt = new _markdownIt.default({
  breaks: false,
  html: false,
  linkify: true,
  typographer: true,
  xhtmlOut: true
}).use(_markdownItAttrsEs.default).use(_markdownItForInline.default, 'url_new_win', 'link_open', function (tokens, index) {
  // TODO: [P4] This is copied from v3 and looks clunky
  //       We should refactor this code
  var targetAttrIndex = tokens[index].attrIndex('target');

  if (~targetAttrIndex) {
    tokens[index].attrs[targetAttrIndex][1] = '_blank';
  } else {
    tokens[index].attrPush(['target', '_blank']);
  }

  var relAttrIndex = tokens[index].attrIndex('rel');

  if (~relAttrIndex) {
    tokens[index].attrs[relAttrIndex][1] = 'noopener noreferrer';
  } else {
    tokens[index].attrPush(['rel', 'noopener noreferrer']);
  }
});

function render(markdown, _ref) {
  var markdownRespectCRLF = _ref.markdownRespectCRLF;

  if (markdownRespectCRLF) {
    markdown = markdown.replace(/\n\r|\r\n/g, function (carriageReturn) {
      return carriageReturn === '\n\r' ? '\r\n' : '\n\r';
    });
  }

  var html = customMarkdownIt.render(markdown);
  return (0, _sanitizeHtml.default)(html, SANITIZE_HTML_OPTIONS);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJNYXJrZG93bi5qcyJdLCJuYW1lcyI6WyJTQU5JVElaRV9IVE1MX09QVElPTlMiLCJhbGxvd2VkQXR0cmlidXRlcyIsImEiLCJpbWciLCJhbGxvd2VkU2NoZW1lcyIsImFsbG93ZWRUYWdzIiwiY3VzdG9tTWFya2Rvd25JdCIsIk1hcmtkb3duSXQiLCJicmVha3MiLCJodG1sIiwibGlua2lmeSIsInR5cG9ncmFwaGVyIiwieGh0bWxPdXQiLCJ1c2UiLCJtYXJrZG93bkl0QXR0cnMiLCJpdGVyYXRvciIsInRva2VucyIsImluZGV4IiwidGFyZ2V0QXR0ckluZGV4IiwiYXR0ckluZGV4IiwiYXR0cnMiLCJhdHRyUHVzaCIsInJlbEF0dHJJbmRleCIsInJlbmRlciIsIm1hcmtkb3duIiwibWFya2Rvd25SZXNwZWN0Q1JMRiIsInJlcGxhY2UiLCJjYXJyaWFnZVJldHVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTEE7QUFPQSxJQUFNQSxxQkFBcUIsR0FBRztBQUM1QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLENBQUMsRUFBRSxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCLFFBQS9CLEVBQXlDLE9BQXpDLENBRGM7QUFFakJDLElBQUFBLEdBQUcsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlksR0FEUztBQUs1QkMsRUFBQUEsY0FBYyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsUUFBakMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsQ0FMWTtBQU01QkMsRUFBQUEsV0FBVyxFQUFFLENBQ1gsR0FEVyxFQUVYLEdBRlcsRUFHWCxZQUhXLEVBSVgsSUFKVyxFQUtYLFNBTFcsRUFNWCxNQU5XLEVBT1gsS0FQVyxFQVFYLElBUlcsRUFTWCxJQVRXLEVBVVgsSUFWVyxFQVdYLElBWFcsRUFZWCxJQVpXLEVBYVgsSUFiVyxFQWNYLElBZFcsRUFlWCxJQWZXLEVBZ0JYLEdBaEJXLEVBaUJYLEtBakJXLEVBa0JYLElBbEJXLEVBbUJYLElBbkJXLEVBb0JYLElBcEJXLEVBcUJYLEdBckJXLEVBc0JYLEtBdEJXLEVBdUJYLE1BdkJXLEVBd0JYLFFBeEJXLEVBeUJYLFFBekJXLEVBMEJYLE9BMUJXLEVBMkJYLE9BM0JXLEVBNEJYLElBNUJXLEVBNkJYLE9BN0JXLEVBOEJYLElBOUJXLEVBK0JYLE9BL0JXLEVBZ0NYLElBaENXLEVBaUNYLElBakNXO0FBTmUsQ0FBOUI7QUEyQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsSUFBSUMsbUJBQUosQ0FBZTtBQUN0Q0MsRUFBQUEsTUFBTSxFQUFFLEtBRDhCO0FBRXRDQyxFQUFBQSxJQUFJLEVBQUUsS0FGZ0M7QUFHdENDLEVBQUFBLE9BQU8sRUFBRSxJQUg2QjtBQUl0Q0MsRUFBQUEsV0FBVyxFQUFFLElBSnlCO0FBS3RDQyxFQUFBQSxRQUFRLEVBQUU7QUFMNEIsQ0FBZixFQU90QkMsR0FQc0IsQ0FPbEJDLDBCQVBrQixFQVF0QkQsR0FSc0IsQ0FRbEJFLDRCQVJrQixFQVFSLGFBUlEsRUFRTyxXQVJQLEVBUW9CLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUM1RDtBQUNBO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRixNQUFNLENBQUNDLEtBQUQsQ0FBTixDQUFjRSxTQUFkLENBQXdCLFFBQXhCLENBQXhCOztBQUVBLE1BQUksQ0FBQ0QsZUFBTCxFQUFzQjtBQUNwQkYsSUFBQUEsTUFBTSxDQUFDQyxLQUFELENBQU4sQ0FBY0csS0FBZCxDQUFvQkYsZUFBcEIsRUFBcUMsQ0FBckMsSUFBMEMsUUFBMUM7QUFDRCxHQUZELE1BRU87QUFDTEYsSUFBQUEsTUFBTSxDQUFDQyxLQUFELENBQU4sQ0FBY0ksUUFBZCxDQUF1QixDQUFDLFFBQUQsRUFBVyxRQUFYLENBQXZCO0FBQ0Q7O0FBRUQsTUFBTUMsWUFBWSxHQUFHTixNQUFNLENBQUNDLEtBQUQsQ0FBTixDQUFjRSxTQUFkLENBQXdCLEtBQXhCLENBQXJCOztBQUVBLE1BQUksQ0FBQ0csWUFBTCxFQUFtQjtBQUNqQk4sSUFBQUEsTUFBTSxDQUFDQyxLQUFELENBQU4sQ0FBY0csS0FBZCxDQUFvQkUsWUFBcEIsRUFBa0MsQ0FBbEMsSUFBdUMscUJBQXZDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xOLElBQUFBLE1BQU0sQ0FBQ0MsS0FBRCxDQUFOLENBQWNJLFFBQWQsQ0FBdUIsQ0FBQyxLQUFELEVBQVEscUJBQVIsQ0FBdkI7QUFDRDtBQUNGLENBMUJzQixDQUF6Qjs7QUE0QmUsU0FBU0UsTUFBVCxDQUFnQkMsUUFBaEIsUUFBbUQ7QUFBQSxNQUF2QkMsbUJBQXVCLFFBQXZCQSxtQkFBdUI7O0FBQ2hFLE1BQUlBLG1CQUFKLEVBQXlCO0FBQ3ZCRCxJQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixZQUFqQixFQUFnQyxVQUFBQyxjQUFjO0FBQUEsYUFBS0EsY0FBYyxLQUFLLE1BQW5CLEdBQTRCLE1BQTVCLEdBQXFDLE1BQTFDO0FBQUEsS0FBOUMsQ0FBWDtBQUNEOztBQUNELE1BQU1sQixJQUFJLEdBQUdILGdCQUFnQixDQUFDaUIsTUFBakIsQ0FBd0JDLFFBQXhCLENBQWI7QUFFQSxTQUFPLDJCQUFhZixJQUFiLEVBQW1CVCxxQkFBbkIsQ0FBUDtBQUNEIiwic291cmNlUm9vdCI6ImJ1bmRsZTovLy8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVwiOiBbMV0gfV0gKi9cclxuXHJcbmltcG9ydCBpdGVyYXRvciBmcm9tICdtYXJrZG93bi1pdC1mb3ItaW5saW5lJztcclxuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSAnbWFya2Rvd24taXQnO1xyXG5pbXBvcnQgbWFya2Rvd25JdEF0dHJzIGZyb20gJ21hcmtkb3duLWl0LWF0dHJzLWVzNSc7XHJcbmltcG9ydCBzYW5pdGl6ZUhUTUwgZnJvbSAnc2FuaXRpemUtaHRtbCc7XHJcblxyXG5jb25zdCBTQU5JVElaRV9IVE1MX09QVElPTlMgPSB7XHJcbiAgYWxsb3dlZEF0dHJpYnV0ZXM6IHtcclxuICAgIGE6IFsnYXJpYS1sYWJlbCcsICdocmVmJywgJ25hbWUnLCAndGFyZ2V0JywgJ3RpdGxlJ10sXHJcbiAgICBpbWc6IFsnYWx0JywgJ3NyYyddXHJcbiAgfSxcclxuICBhbGxvd2VkU2NoZW1lczogWydkYXRhJywgJ2h0dHAnLCAnaHR0cHMnLCAnZnRwJywgJ21haWx0bycsICdzaXAnLCAndGVsJ10sXHJcbiAgYWxsb3dlZFRhZ3M6IFtcclxuICAgICdhJyxcclxuICAgICdiJyxcclxuICAgICdibG9ja3F1b3RlJyxcclxuICAgICdicicsXHJcbiAgICAnY2FwdGlvbicsXHJcbiAgICAnY29kZScsXHJcbiAgICAnZGl2JyxcclxuICAgICdlbScsXHJcbiAgICAnaDEnLFxyXG4gICAgJ2gyJyxcclxuICAgICdoMycsXHJcbiAgICAnaDQnLFxyXG4gICAgJ2g1JyxcclxuICAgICdoNicsXHJcbiAgICAnaHInLFxyXG4gICAgJ2knLFxyXG4gICAgJ2ltZycsXHJcbiAgICAnbGknLFxyXG4gICAgJ25sJyxcclxuICAgICdvbCcsXHJcbiAgICAncCcsXHJcbiAgICAncHJlJyxcclxuICAgICdzcGFuJyxcclxuICAgICdzdHJpa2UnLFxyXG4gICAgJ3N0cm9uZycsXHJcbiAgICAndGFibGUnLFxyXG4gICAgJ3Rib2R5JyxcclxuICAgICd0ZCcsXHJcbiAgICAndGZvb3QnLFxyXG4gICAgJ3RoJyxcclxuICAgICd0aGVhZCcsXHJcbiAgICAndHInLFxyXG4gICAgJ3VsJ1xyXG4gIF1cclxufTtcclxuXHJcbmNvbnN0IGN1c3RvbU1hcmtkb3duSXQgPSBuZXcgTWFya2Rvd25JdCh7XHJcbiAgYnJlYWtzOiBmYWxzZSxcclxuICBodG1sOiBmYWxzZSxcclxuICBsaW5raWZ5OiB0cnVlLFxyXG4gIHR5cG9ncmFwaGVyOiB0cnVlLFxyXG4gIHhodG1sT3V0OiB0cnVlXHJcbn0pXHJcbiAgLnVzZShtYXJrZG93bkl0QXR0cnMpXHJcbiAgLnVzZShpdGVyYXRvciwgJ3VybF9uZXdfd2luJywgJ2xpbmtfb3BlbicsICh0b2tlbnMsIGluZGV4KSA9PiB7XHJcbiAgICAvLyBUT0RPOiBbUDRdIFRoaXMgaXMgY29waWVkIGZyb20gdjMgYW5kIGxvb2tzIGNsdW5reVxyXG4gICAgLy8gICAgICAgV2Ugc2hvdWxkIHJlZmFjdG9yIHRoaXMgY29kZVxyXG4gICAgY29uc3QgdGFyZ2V0QXR0ckluZGV4ID0gdG9rZW5zW2luZGV4XS5hdHRySW5kZXgoJ3RhcmdldCcpO1xyXG5cclxuICAgIGlmICh+dGFyZ2V0QXR0ckluZGV4KSB7XHJcbiAgICAgIHRva2Vuc1tpbmRleF0uYXR0cnNbdGFyZ2V0QXR0ckluZGV4XVsxXSA9ICdfYmxhbmsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9rZW5zW2luZGV4XS5hdHRyUHVzaChbJ3RhcmdldCcsICdfYmxhbmsnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVsQXR0ckluZGV4ID0gdG9rZW5zW2luZGV4XS5hdHRySW5kZXgoJ3JlbCcpO1xyXG5cclxuICAgIGlmICh+cmVsQXR0ckluZGV4KSB7XHJcbiAgICAgIHRva2Vuc1tpbmRleF0uYXR0cnNbcmVsQXR0ckluZGV4XVsxXSA9ICdub29wZW5lciBub3JlZmVycmVyJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRva2Vuc1tpbmRleF0uYXR0clB1c2goWydyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlciddKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcihtYXJrZG93biwgeyBtYXJrZG93blJlc3BlY3RDUkxGIH0pIHtcclxuICBpZiAobWFya2Rvd25SZXNwZWN0Q1JMRikge1xyXG4gICAgbWFya2Rvd24gPSBtYXJrZG93bi5yZXBsYWNlKC9cXG5cXHJ8XFxyXFxuL2d1LCBjYXJyaWFnZVJldHVybiA9PiAoY2FycmlhZ2VSZXR1cm4gPT09ICdcXG5cXHInID8gJ1xcclxcbicgOiAnXFxuXFxyJykpO1xyXG4gIH1cclxuICBjb25zdCBodG1sID0gY3VzdG9tTWFya2Rvd25JdC5yZW5kZXIobWFya2Rvd24pO1xyXG5cclxuICByZXR1cm4gc2FuaXRpemVIVE1MKGh0bWwsIFNBTklUSVpFX0hUTUxfT1BUSU9OUyk7XHJcbn1cclxuIl19