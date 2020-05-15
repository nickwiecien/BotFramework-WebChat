"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnimationCardAttachment;

// TODO: [P4] We are moving attachments related to Adaptive Cards out of "component"
//       Later, we will rewrite these attachments without Adaptive Cards
//       We are leaving the CSS here as-is for now
function AnimationCardAttachment() {
  return {
    // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
    display: 'flex',
    flexDirection: 'column',
    '& > ul.media-list': {
      // TODO: [P2] We should not set "listStyleType" in styleSet, the user have no good reasons to change this.
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9TdHlsZVNldC9BbmltYXRpb25DYXJkQXR0YWNobWVudC5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25DYXJkQXR0YWNobWVudCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSx1QkFBVCxHQUFtQztBQUNoRCxTQUFPO0FBQ0w7QUFDQUMsSUFBQUEsT0FBTyxFQUFFLE1BRko7QUFHTEMsSUFBQUEsYUFBYSxFQUFFLFFBSFY7QUFLTCx5QkFBcUI7QUFDbkI7QUFDQUMsTUFBQUEsYUFBYSxFQUFFLE1BRkk7QUFHbkJDLE1BQUFBLE1BQU0sRUFBRSxDQUhXO0FBSW5CQyxNQUFBQSxPQUFPLEVBQUU7QUFKVTtBQUxoQixHQUFQO0FBWUQiLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFtQNF0gV2UgYXJlIG1vdmluZyBhdHRhY2htZW50cyByZWxhdGVkIHRvIEFkYXB0aXZlIENhcmRzIG91dCBvZiBcImNvbXBvbmVudFwiXHJcbi8vICAgICAgIExhdGVyLCB3ZSB3aWxsIHJld3JpdGUgdGhlc2UgYXR0YWNobWVudHMgd2l0aG91dCBBZGFwdGl2ZSBDYXJkc1xyXG4vLyAgICAgICBXZSBhcmUgbGVhdmluZyB0aGUgQ1NTIGhlcmUgYXMtaXMgZm9yIG5vd1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0aW9uQ2FyZEF0dGFjaG1lbnQoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIFRPRE86IFtQMl0gV2Ugc2hvdWxkIG5vdCBzZXQgXCJkaXNwbGF5XCIgaW4gc3R5bGVTZXQsIHRoaXMgd2lsbCBhbGxvdyB0aGUgdXNlciB0byBicmVhayB0aGUgbGF5b3V0IGZvciBubyBnb29kIHJlYXNvbnMuXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuXHJcbiAgICAnJiA+IHVsLm1lZGlhLWxpc3QnOiB7XHJcbiAgICAgIC8vIFRPRE86IFtQMl0gV2Ugc2hvdWxkIG5vdCBzZXQgXCJsaXN0U3R5bGVUeXBlXCIgaW4gc3R5bGVTZXQsIHRoZSB1c2VyIGhhdmUgbm8gZ29vZCByZWFzb25zIHRvIGNoYW5nZSB0aGlzLlxyXG4gICAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19