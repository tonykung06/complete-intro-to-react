webpackJsonp([1],{

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(162);
	
	var _Store = __webpack_require__(219);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var string = _React$PropTypes.string;
	
	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);
	
	  function Landing(props) {
	    _classCallCheck(this, Landing);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Landing).call(this, props));
	
	    _this.handleSearchTermChange = _this.handleSearchTermChange.bind(_this);
	    _this.gotoSearch = _this.gotoSearch.bind(_this);
	    return _this;
	  }
	
	  _createClass(Landing, [{
	    key: 'handleSearchTermChange',
	    value: function handleSearchTermChange(e) {
	      this.props.setSearchTerm(e.target.value);
	    }
	  }, {
	    key: 'gotoSearch',
	    value: function gotoSearch(e) {
	      e.preventDefault();
	      _reactRouter.browserHistory.push('search');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'home-info' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'title' },
	          'svideo'
	        ),
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.gotoSearch },
	          _react2.default.createElement('input', { value: this.props.searchTerm, onChange: this.handleSearchTermChange, className: 'search', type: 'text', placeholder: 'Search' })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/search', className: 'browse-all' },
	          ' or Browse All'
	        )
	      );
	    }
	  }]);
	
	  return Landing;
	}(_react2.default.Component);
	
	Landing.propTypes = {
	  setSearchTerm: func,
	  searchTerm: string
	};
	
	exports.default = (0, _Store.connector)(Landing);

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9MYW5kaW5nLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozt3QkFFdUIsZ0JBQU0sU0FBTjtLQUFoQjtLQUFNOztLQUVQOzs7QUFDSixZQURJLE9BQ0osQ0FBWSxLQUFaLEVBQW1COzJCQURmLFNBQ2U7O3dFQURmLG9CQUVJLFFBRFc7O0FBR2pCLFdBQUssc0JBQUwsR0FBOEIsTUFBSyxzQkFBTCxDQUE0QixJQUE1QixPQUE5QixDQUhpQjtBQUlqQixXQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCLENBSmlCOztJQUFuQjs7Z0JBREk7OzRDQU9tQixHQUFHO0FBQ3hCLFlBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsRUFBRSxNQUFGLENBQVMsS0FBVCxDQUF6QixDQUR3Qjs7OztnQ0FHZixHQUFHO0FBQ1osU0FBRSxjQUFGLEdBRFk7QUFFWixtQ0FBZSxJQUFmLENBQW9CLFFBQXBCLEVBRlk7Ozs7OEJBSUw7QUFDUCxjQUNFOztXQUFLLFdBQVUsV0FBVixFQUFMO1NBQ0U7O2FBQUksV0FBVSxPQUFWLEVBQUo7O1VBREY7U0FFRTs7YUFBTSxVQUFVLEtBQUssVUFBTCxFQUFoQjtXQUNFLHlDQUFPLE9BQU8sS0FBSyxLQUFMLENBQVcsVUFBWCxFQUF1QixVQUFVLEtBQUssc0JBQUwsRUFBNkIsV0FBVSxRQUFWLEVBQW1CLE1BQUssTUFBTCxFQUFZLGFBQVksUUFBWixFQUEzRyxDQURGO1VBRkY7U0FLRTs7YUFBTSxJQUFHLFNBQUgsRUFBYSxXQUFVLFlBQVYsRUFBbkI7O1VBTEY7UUFERixDQURPOzs7O1VBZEw7R0FBZ0IsZ0JBQU0sU0FBTjs7QUEyQnRCLFNBQVEsU0FBUixHQUFvQjtBQUNsQixrQkFBZSxJQUFmO0FBQ0EsZUFBWSxNQUFaO0VBRkY7O21CQUtlLHNCQUFVLE9BQVYsRSIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmssIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtjb25uZWN0b3J9IGZyb20gJy4vU3RvcmUuanN4JztcblxuY29uc3Qge2Z1bmMsIHN0cmluZ30gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNsYXNzIExhbmRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuaGFuZGxlU2VhcmNoVGVybUNoYW5nZSA9IHRoaXMuaGFuZGxlU2VhcmNoVGVybUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ290b1NlYXJjaCA9IHRoaXMuZ290b1NlYXJjaC5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gIH1cbiAgZ290b1NlYXJjaChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goJ3NlYXJjaCcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWluZm9cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+c3ZpZGVvPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuZ290b1NlYXJjaH0+XG4gICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFRlcm19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaFRlcm1DaGFuZ2V9IGNsYXNzTmFtZT1cInNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiIGNsYXNzTmFtZT1cImJyb3dzZS1hbGxcIj4gb3IgQnJvd3NlIEFsbDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGFuZGluZy5wcm9wVHlwZXMgPSB7XG4gIHNldFNlYXJjaFRlcm06IGZ1bmMsXG4gIHNlYXJjaFRlcm06IHN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKExhbmRpbmcpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9MYW5kaW5nLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=