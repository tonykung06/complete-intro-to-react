webpackJsonp([2],{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ShowCard = __webpack_require__(241);
	
	var _ShowCard2 = _interopRequireDefault(_ShowCard);
	
	var _Header = __webpack_require__(242);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Store = __webpack_require__(219);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var arrayOf = _React$PropTypes.arrayOf;
	
	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);
	
	  function Search() {
	    _classCallCheck(this, Search);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Search).apply(this, arguments));
	  }
	
	  _createClass(Search, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(_Header2.default, { showSearch: true }),
	        _react2.default.createElement(
	          'div',
	          { className: 'shows' },
	          this.props.shows.filter(function (show) {
	            return (show.title + ' ' + show.description).toUpperCase().indexOf(_this2.props.searchTerm.toUpperCase()) > -1;
	          }).map(function (show) {
	            return _react2.default.createElement(_ShowCard2.default, _extends({}, show, { key: show.imdbID }));
	          })
	        )
	      );
	    }
	  }]);
	
	  return Search;
	}(_react2.default.Component);
	
	Search.propTypes = {
	  route: object,
	  searchTerm: string,
	  shows: arrayOf(object)
	};
	
	exports.default = (0, _Store.connector)(Search);

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(162);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ShowCard = function ShowCard(props) {
	  return _react2.default.createElement(
	    _reactRouter.Link,
	    { to: '/details/' + props.imdbID },
	    _react2.default.createElement(
	      'div',
	      { className: 'show-card' },
	      _react2.default.createElement('img', { src: 'public/img/posters/' + props.poster, alt: '', className: 'show-card-img' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'show-card-text' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'show-card-title' },
	          props.title
	        ),
	        _react2.default.createElement(
	          'h4',
	          { className: 'show-card-year' },
	          '(',
	          props.year,
	          ')'
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'show-card-description' },
	          props.description
	        )
	      )
	    )
	  );
	};
	
	var string = _react2.default.PropTypes.string;
	
	
	ShowCard.propTypes = {
	  imdbID: string.isRequired,
	  poster: string.isRequired,
	  title: string.isRequired,
	  year: string.isRequired,
	  description: string.isRequired
	};
	
	exports.default = ShowCard;

/***/ },

/***/ 242:
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
	var bool = _React$PropTypes.bool;
	var string = _React$PropTypes.string;
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header(props) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
	
	    _this.handleSearchTermChange = _this.handleSearchTermChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'handleSearchTermChange',
	    value: function handleSearchTermChange(e) {
	      this.props.setSearchTerm(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var utilSpace = null;
	
	      if (this.props.showSearch) {
	        utilSpace = _react2.default.createElement('input', { type: 'text', value: this.props.searchTerm, onChange: this.handleSearchTermChange, className: 'search-input', placeholder: 'Search' });
	      } else {
	        utilSpace = _react2.default.createElement(
	          'h2',
	          { className: 'header-back' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/search' },
	            'Back'
	          )
	        );
	      }
	
	      return _react2.default.createElement(
	        'header',
	        { className: 'header' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'brand' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/', className: 'brand-link' },
	            'svideo'
	          )
	        ),
	        utilSpace
	      );
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	Header.propTypes = {
	  setSearchTerm: func,
	  showSearch: bool,
	  searchTerm: string
	};
	
	exports.default = (0, _Store.connector)(Header);

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL2pzL1Nob3dDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O3dCQUVrQyxnQkFBTSxTQUFOO0tBQTNCO0tBQVE7S0FBUTs7S0FFakI7Ozs7Ozs7Ozs7OzhCQUNLOzs7QUFDUCxjQUNFOztXQUFLLFdBQVUsV0FBVixFQUFMO1NBQ0Usa0RBQVEsa0JBQVIsQ0FERjtTQUVFOzthQUFLLFdBQVUsT0FBVixFQUFMO1dBRUksS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQixDQUF3QixnQkFBUTtBQUM5QixvQkFBTyxDQUFHLEtBQUssS0FBTCxTQUFjLEtBQUssV0FBTCxDQUFqQixDQUFvQyxXQUFwQyxHQUFrRCxPQUFsRCxDQUEwRCxPQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFdBQXRCLEVBQTFELElBQWlHLENBQUMsQ0FBRCxDQUQxRTtZQUFSLENBQXhCLENBRUcsR0FGSCxDQUVPO29CQUFRLCtEQUFjLFFBQU0sS0FBSyxLQUFLLE1BQUwsR0FBekI7WUFBUixDQUpYO1VBRkY7UUFERixDQURPOzs7O1VBREw7R0FBZSxnQkFBTSxTQUFOOztBQWlCckIsUUFBTyxTQUFQLEdBQW1CO0FBQ2pCLFVBQU8sTUFBUDtBQUNBLGVBQVksTUFBWjtBQUNBLFVBQU8sUUFBUSxNQUFSLENBQVA7RUFIRjs7bUJBTWUsc0JBQVUsTUFBVixFOzs7Ozs7Ozs7Ozs7O0FDOUJmOzs7O0FBQ0E7Ozs7QUFFQSxLQUFNLFdBQVcsU0FBWCxRQUFXO1VBQ2Y7O09BQU0sa0JBQWdCLE1BQU0sTUFBTixFQUF0QjtLQUNFOztTQUFLLFdBQVUsV0FBVixFQUFMO09BQ0UsdUNBQUssNkJBQTJCLE1BQU0sTUFBTixFQUFnQixLQUFJLEVBQUosRUFBTyxXQUFVLGVBQVYsRUFBdkQsQ0FERjtPQUVFOztXQUFLLFdBQVUsZ0JBQVYsRUFBTDtTQUNFOzthQUFJLFdBQVUsaUJBQVYsRUFBSjtXQUNHLE1BQU0sS0FBTjtVQUZMO1NBSUU7O2FBQUksV0FBVSxnQkFBVixFQUFKOztXQUNJLE1BQU0sSUFBTjtjQURKO1VBSkY7U0FPRTs7YUFBRyxXQUFVLHVCQUFWLEVBQUg7V0FDRyxNQUFNLFdBQU47VUFSTDtRQUZGO01BREY7O0VBRGU7O0tBbUJWLFNBQVUsZ0JBQU0sU0FBTixDQUFWOzs7QUFFUCxVQUFTLFNBQVQsR0FBcUI7QUFDbkIsV0FBUSxPQUFPLFVBQVA7QUFDUixXQUFRLE9BQU8sVUFBUDtBQUNSLFVBQU8sT0FBTyxVQUFQO0FBQ1AsU0FBTSxPQUFPLFVBQVA7QUFDTixnQkFBYSxPQUFPLFVBQVA7RUFMZjs7bUJBUWUsUzs7Ozs7Ozs7Ozs7Ozs7O0FDaENmOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7d0JBRTZCLGdCQUFNLFNBQU47S0FBdEI7S0FBTTtLQUFNOztLQUViOzs7QUFDSixZQURJLE1BQ0osQ0FBWSxLQUFaLEVBQW1COzJCQURmLFFBQ2U7O3dFQURmLG1CQUVJLFFBRFc7O0FBR2pCLFdBQUssc0JBQUwsR0FBOEIsTUFBSyxzQkFBTCxDQUE0QixJQUE1QixPQUE5QixDQUhpQjs7SUFBbkI7O2dCQURJOzs0Q0FPbUIsR0FBRztBQUN4QixZQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FBekIsQ0FEd0I7Ozs7OEJBSWpCO0FBQ1AsV0FBSSxZQUFZLElBQVosQ0FERzs7QUFHUCxXQUFJLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUI7QUFDekIscUJBQ0UseUNBQU8sTUFBSyxNQUFMLEVBQVksT0FBTyxLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXVCLFVBQVUsS0FBSyxzQkFBTCxFQUE2QixXQUFVLGNBQVYsRUFBeUIsYUFBWSxRQUFaLEVBQWpILENBREYsQ0FEeUI7UUFBM0IsTUFJTztBQUNMLHFCQUNFOzthQUFJLFdBQVUsYUFBVixFQUFKO1dBQ0U7O2VBQU0sSUFBRyxTQUFILEVBQU47O1lBREY7VUFERixDQURLO1FBSlA7O0FBY0EsY0FDRTs7V0FBUSxXQUFVLFFBQVYsRUFBUjtTQUNFOzthQUFJLFdBQVUsT0FBVixFQUFKO1dBQ0U7O2VBQU0sSUFBRyxHQUFILEVBQU8sV0FBVSxZQUFWLEVBQWI7O1lBREY7VUFERjtTQU1HLFNBTkg7UUFERixDQWpCTzs7OztVQVhMO0dBQWUsZ0JBQU0sU0FBTjs7QUF5Q3JCLFFBQU8sU0FBUCxHQUFtQjtBQUNqQixrQkFBZSxJQUFmO0FBQ0EsZUFBWSxJQUFaO0FBQ0EsZUFBWSxNQUFaO0VBSEY7O21CQU1lLHNCQUFVLE1BQVYsRSIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hvd0NhcmQgZnJvbSAnLi9TaG93Q2FyZC5qc3gnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci5qc3gnO1xuaW1wb3J0IHtjb25uZWN0b3J9IGZyb20gJy4vU3RvcmUuanN4JztcblxuY29uc3Qge29iamVjdCwgc3RyaW5nLCBhcnJheU9mfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZGVyIHNob3dTZWFyY2ggLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93c1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd3MuZmlsdGVyKHNob3cgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7c2hvdy50aXRsZX0gJHtzaG93LmRlc2NyaXB0aW9ufWAudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpKSA+IC0xO1xuICAgICAgICAgICAgfSkubWFwKHNob3cgPT4gPFNob3dDYXJkIHsuLi5zaG93fSBrZXk9e3Nob3cuaW1kYklEfSAvPilcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TZWFyY2gucHJvcFR5cGVzID0ge1xuICByb3V0ZTogb2JqZWN0LFxuICBzZWFyY2hUZXJtOiBzdHJpbmcsXG4gIHNob3dzOiBhcnJheU9mKG9iamVjdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihTZWFyY2gpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9TZWFyY2guanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3QgU2hvd0NhcmQgPSBwcm9wcyA9PiAoXG4gIDxMaW5rIHRvPXtgL2RldGFpbHMvJHtwcm9wcy5pbWRiSUR9YH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWNhcmRcIj5cbiAgICAgIDxpbWcgc3JjPXtgcHVibGljL2ltZy9wb3N0ZXJzLyR7cHJvcHMucG9zdGVyfWB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInNob3ctY2FyZC1pbWdcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWNhcmQtdGV4dFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2hvdy1jYXJkLXRpdGxlXCI+XG4gICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICA8L2gzPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2hvdy1jYXJkLXllYXJcIj5cbiAgICAgICAgICAoe3Byb3BzLnllYXJ9KVxuICAgICAgICA8L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzaG93LWNhcmQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L0xpbms+XG4pO1xuXG5jb25zdCB7c3RyaW5nfSA9IFJlYWN0LlByb3BUeXBlcztcblxuU2hvd0NhcmQucHJvcFR5cGVzID0ge1xuICBpbWRiSUQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBwb3N0ZXI6IHN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHllYXI6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dDYXJkO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9TaG93Q2FyZC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtjb25uZWN0b3J9IGZyb20gJy4vU3RvcmUuanN4JztcblxuY29uc3Qge2Z1bmMsIGJvb2wsIHN0cmluZ30gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1dGlsU3BhY2UgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd1NlYXJjaCkge1xuICAgICAgdXRpbFNwYWNlID0gKFxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2hUZXJtfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlfSBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dGlsU3BhY2UgPSAoXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXItYmFja1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlxuICAgICAgICAgICAgQmFja1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oMj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJyYW5kLWxpbmtcIj5cbiAgICAgICAgICAgIHN2aWRlb1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAge3V0aWxTcGFjZX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgc2V0U2VhcmNoVGVybTogZnVuYyxcbiAgc2hvd1NlYXJjaDogYm9vbCxcbiAgc2VhcmNoVGVybTogc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoSGVhZGVyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvSGVhZGVyLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=