"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(_ref) {
  var accent = _ref.accent,
      paddingRegular = _ref.paddingRegular,
      primaryFont = _ref.primaryFont;
  return {
    '& .ac-input, & .ac-inlineActionButton, & .ac-quickActionButton': {
      fontFamily: primaryFont
    },
    '& .ac-multichoiceInput': {
      padding: paddingRegular
    },
    '& .ac-pushButton': {
      appearance: 'none',
      backgroundColor: 'White',
      borderStyle: 'solid',
      borderWidth: 1,
      color: accent,
      fontWeight: 600,
      padding: paddingRegular
    },
    '& .ac-pushButton.style-destructive': {
      backgroundColor: '#E50000',
      color: 'white'
    },
    '& .ac-pushButton.style-destructive:hover, & .ac-pushButton.style-destructive:active': {
      backgroundColor: '#BF0000'
    },
    '& .ac-pushButton.style-positive': {
      backgroundColor: '#0078D7',
      color: 'white'
    },
    '& .ac-pushButton.style-positive:hover, & .ac-pushButton.style-positive:active': {
      backgroundColor: '#006ABC'
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL1N0eWxlcy9TdHlsZVNldC9BZGFwdGl2ZUNhcmRSZW5kZXJlci5qcyJdLCJuYW1lcyI6WyJhY2NlbnQiLCJwYWRkaW5nUmVndWxhciIsInByaW1hcnlGb250IiwiZm9udEZhbWlseSIsInBhZGRpbmciLCJhcHBlYXJhbmNlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsImNvbG9yIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLHdCQUFrRDtBQUFBLE1BQXZDQSxNQUF1QyxRQUF2Q0EsTUFBdUM7QUFBQSxNQUEvQkMsY0FBK0IsUUFBL0JBLGNBQStCO0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlO0FBQy9ELFNBQU87QUFDTCxzRUFBa0U7QUFDaEVDLE1BQUFBLFVBQVUsRUFBRUQ7QUFEb0QsS0FEN0Q7QUFLTCw4QkFBMEI7QUFDeEJFLE1BQUFBLE9BQU8sRUFBRUg7QUFEZSxLQUxyQjtBQVNMLHdCQUFvQjtBQUNsQkksTUFBQUEsVUFBVSxFQUFFLE1BRE07QUFFbEJDLE1BQUFBLGVBQWUsRUFBRSxPQUZDO0FBR2xCQyxNQUFBQSxXQUFXLEVBQUUsT0FISztBQUlsQkMsTUFBQUEsV0FBVyxFQUFFLENBSks7QUFLbEJDLE1BQUFBLEtBQUssRUFBRVQsTUFMVztBQU1sQlUsTUFBQUEsVUFBVSxFQUFFLEdBTk07QUFPbEJOLE1BQUFBLE9BQU8sRUFBRUg7QUFQUyxLQVRmO0FBbUJMLDBDQUFzQztBQUNwQ0ssTUFBQUEsZUFBZSxFQUFFLFNBRG1CO0FBRXBDRyxNQUFBQSxLQUFLLEVBQUU7QUFGNkIsS0FuQmpDO0FBd0JMLDJGQUF1RjtBQUNyRkgsTUFBQUEsZUFBZSxFQUFFO0FBRG9FLEtBeEJsRjtBQTRCTCx1Q0FBbUM7QUFDakNBLE1BQUFBLGVBQWUsRUFBRSxTQURnQjtBQUVqQ0csTUFBQUEsS0FBSyxFQUFFO0FBRjBCLEtBNUI5QjtBQWlDTCxxRkFBaUY7QUFDL0VILE1BQUFBLGVBQWUsRUFBRTtBQUQ4RDtBQWpDNUUsR0FBUDtBQXFDRCIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBhY2NlbnQsIHBhZGRpbmdSZWd1bGFyLCBwcmltYXJ5Rm9udCB9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgICcmIC5hYy1pbnB1dCwgJiAuYWMtaW5saW5lQWN0aW9uQnV0dG9uLCAmIC5hYy1xdWlja0FjdGlvbkJ1dHRvbic6IHtcclxuICAgICAgZm9udEZhbWlseTogcHJpbWFyeUZvbnRcclxuICAgIH0sXHJcblxyXG4gICAgJyYgLmFjLW11bHRpY2hvaWNlSW5wdXQnOiB7XHJcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdSZWd1bGFyXHJcbiAgICB9LFxyXG5cclxuICAgICcmIC5hYy1wdXNoQnV0dG9uJzoge1xyXG4gICAgICBhcHBlYXJhbmNlOiAnbm9uZScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ1doaXRlJyxcclxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICBjb2xvcjogYWNjZW50LFxyXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdSZWd1bGFyXHJcbiAgICB9LFxyXG5cclxuICAgICcmIC5hYy1wdXNoQnV0dG9uLnN0eWxlLWRlc3RydWN0aXZlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTUwMDAwJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZSdcclxuICAgIH0sXHJcblxyXG4gICAgJyYgLmFjLXB1c2hCdXR0b24uc3R5bGUtZGVzdHJ1Y3RpdmU6aG92ZXIsICYgLmFjLXB1c2hCdXR0b24uc3R5bGUtZGVzdHJ1Y3RpdmU6YWN0aXZlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQkYwMDAwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAnJiAuYWMtcHVzaEJ1dHRvbi5zdHlsZS1wb3NpdGl2ZSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwNzhENycsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICB9LFxyXG5cclxuICAgICcmIC5hYy1wdXNoQnV0dG9uLnN0eWxlLXBvc2l0aXZlOmhvdmVyLCAmIC5hYy1wdXNoQnV0dG9uLnN0eWxlLXBvc2l0aXZlOmFjdGl2ZSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwNkFCQydcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==