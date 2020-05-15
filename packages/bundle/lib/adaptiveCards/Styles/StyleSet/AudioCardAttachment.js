"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AudioCardAttachment;

// TODO: [P4] We are moving attachments related to Adaptive Cards out of "component"
//       Later, we will rewrite these attachments without Adaptive Cards
//       We are leaving the CSS here as-is for now
function AudioCardAttachment(_ref) {
  var paddingRegular = _ref.paddingRegular;
  return {
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    flexDirection: 'column',
    '& > ul.media-list': {
      // TODO: [P2] We should not set "listStyleType" in styleSet, the user have no good reasons to change this.
      listStyleType: 'none',
      margin: paddingRegular,
      padding: 0
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9TdHlsZVNldC9BdWRpb0NhcmRBdHRhY2htZW50LmpzIl0sIm5hbWVzIjpbIkF1ZGlvQ2FyZEF0dGFjaG1lbnQiLCJwYWRkaW5nUmVndWxhciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxtQkFBVCxPQUFpRDtBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7QUFDOUQsU0FBTztBQUNMO0FBQ0FDLElBQUFBLE9BQU8sRUFBRSxNQUZKO0FBR0xDLElBQUFBLGFBQWEsRUFBRSxRQUhWO0FBS0wseUJBQXFCO0FBQ25CO0FBQ0FDLE1BQUFBLGFBQWEsRUFBRSxNQUZJO0FBR25CQyxNQUFBQSxNQUFNLEVBQUVKLGNBSFc7QUFJbkJLLE1BQUFBLE9BQU8sRUFBRTtBQUpVO0FBTGhCLEdBQVA7QUFZRCIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogW1A0XSBXZSBhcmUgbW92aW5nIGF0dGFjaG1lbnRzIHJlbGF0ZWQgdG8gQWRhcHRpdmUgQ2FyZHMgb3V0IG9mIFwiY29tcG9uZW50XCJcclxuLy8gICAgICAgTGF0ZXIsIHdlIHdpbGwgcmV3cml0ZSB0aGVzZSBhdHRhY2htZW50cyB3aXRob3V0IEFkYXB0aXZlIENhcmRzXHJcbi8vICAgICAgIFdlIGFyZSBsZWF2aW5nIHRoZSBDU1MgaGVyZSBhcy1pcyBmb3Igbm93XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb0NhcmRBdHRhY2htZW50KHsgcGFkZGluZ1JlZ3VsYXIgfSkge1xyXG4gIHJldHVybiB7XHJcbiAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwiZGlzcGxheVwiIGluIHN0eWxlU2V0LCB0aGlzIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gYnJlYWsgdGhlIGxheW91dCBmb3Igbm8gZ29vZCByZWFzb25zLlxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcblxyXG4gICAgJyYgPiB1bC5tZWRpYS1saXN0Jzoge1xyXG4gICAgICAvLyBUT0RPOiBbUDJdIFdlIHNob3VsZCBub3Qgc2V0IFwibGlzdFN0eWxlVHlwZVwiIGluIHN0eWxlU2V0LCB0aGUgdXNlciBoYXZlIG5vIGdvb2QgcmVhc29ucyB0byBjaGFuZ2UgdGhpcy5cclxuICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgICBtYXJnaW46IHBhZGRpbmdSZWd1bGFyLFxyXG4gICAgICBwYWRkaW5nOiAwXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=