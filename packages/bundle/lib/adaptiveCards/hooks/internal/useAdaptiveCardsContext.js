"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAdaptiveCardsContext;

var _react = require("react");

var _AdaptiveCardsContext = _interopRequireDefault(require("../../AdaptiveCardsContext"));

function useAdaptiveCardsContext() {
  var context = (0, _react.useContext)(_AdaptiveCardsContext.default);

  if (!context) {
    throw new Error('This hook can only be used on component that is decendants of <ComposerWithAdaptiveCards>');
  }

  return context;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL2hvb2tzL2ludGVybmFsL3VzZUFkYXB0aXZlQ2FyZHNDb250ZXh0LmpzIl0sIm5hbWVzIjpbInVzZUFkYXB0aXZlQ2FyZHNDb250ZXh0IiwiY29udGV4dCIsIkFkYXB0aXZlQ2FyZHNDb250ZXh0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVlLFNBQVNBLHVCQUFULEdBQW1DO0FBQ2hELE1BQU1DLE9BQU8sR0FBRyx1QkFBV0MsNkJBQVgsQ0FBaEI7O0FBRUEsTUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWixVQUFNLElBQUlFLEtBQUosQ0FBVSwyRkFBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBT0YsT0FBUDtBQUNEIiwic291cmNlUm9vdCI6ImJ1bmRsZTovLy8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFkYXB0aXZlQ2FyZHNDb250ZXh0IGZyb20gJy4uLy4uL0FkYXB0aXZlQ2FyZHNDb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUFkYXB0aXZlQ2FyZHNDb250ZXh0KCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEFkYXB0aXZlQ2FyZHNDb250ZXh0KTtcclxuXHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaG9vayBjYW4gb25seSBiZSB1c2VkIG9uIGNvbXBvbmVudCB0aGF0IGlzIGRlY2VuZGFudHMgb2YgPENvbXBvc2VyV2l0aEFkYXB0aXZlQ2FyZHM+Jyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG4iXX0=