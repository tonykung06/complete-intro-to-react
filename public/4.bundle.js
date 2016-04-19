webpackJsonp([4],{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(161);
	
	var _Store = __webpack_require__(218);
	
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

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Header = __webpack_require__(240);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Store = __webpack_require__(218);
	
	var _axios = __webpack_require__(242);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var object = _React$PropTypes.object;
	var arrayOf = _React$PropTypes.arrayOf;
	
	var Details = function (_React$Component) {
	  _inherits(Details, _React$Component);
	
	  function Details(props) {
	    _classCallCheck(this, Details);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));
	
	    _this.state = {
	      omdbData: {}
	    };
	    return _this;
	  }
	
	  _createClass(Details, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      _axios2.default.get('http://www.omdbapi.com/?i=' + this.getCurrentShow(this.props.shows, this.props.params.id).imdbID).then(function (response) {
	        _this2.setState({ omdbData: response.data });
	      }).catch(function (error) {
	        console.error('axios error', error);
	      });
	    }
	  }, {
	    key: 'getCurrentShow',
	    value: function getCurrentShow(shows, id) {
	      var showArray = shows.filter(function (item) {
	        return id === item.imdbID;
	      });
	
	      return showArray[0];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _ref = this.getCurrentShow(this.props.shows, this.props.params.id) || {};
	
	      var title = _ref.title;
	      var description = _ref.description;
	      var year = _ref.year;
	      var poster = _ref.poster;
	      var trailer = _ref.trailer;
	
	      var rating = void 0;
	
	      if (this.state.omdbData.imdbRating) {
	        rating = _react2.default.createElement(
	          'h3',
	          { className: 'video-rating' },
	          this.state.omdbData.imdbRating
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(_Header2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'video-info' },
	          _react2.default.createElement(
	            'h1',
	            { className: 'video-title' },
	            title
	          ),
	          _react2.default.createElement(
	            'h1',
	            { className: 'video-year' },
	            '(',
	            year,
	            ')'
	          ),
	          rating,
	          _react2.default.createElement('img', { src: '/public/img/posters/' + poster, alt: '', className: 'video-poster' }),
	          _react2.default.createElement(
	            'p',
	            { className: 'video-description' },
	            description
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'video-container' },
	          _react2.default.createElement('iframe', { src: 'https://www.youtube-nocookie.com/embed/' + trailer + '?rel=0&amp;controls=0&amp;showinfo=0', frameBorder: '0', allowFullScreen: true })
	        )
	      );
	    }
	  }]);
	
	  return Details;
	}(_react2.default.Component);
	
	Details.propTypes = {
	  params: object,
	  shows: arrayOf(object).isRequired
	};
	
	exports.default = (0, _Store.connector)(Details);

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(243);

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(244);
	var utils = __webpack_require__(245);
	var dispatchRequest = __webpack_require__(246);
	var InterceptorManager = __webpack_require__(254);
	var isAbsoluteURL = __webpack_require__(255);
	var combineURLs = __webpack_require__(256);
	var bind = __webpack_require__(257);
	var transformData = __webpack_require__(250);
	
	function Axios(defaultConfig) {
	  this.defaults = utils.merge({}, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Don't allow overriding defaults.withCredentials
	  config.withCredentials = config.withCredentials || this.defaults.withCredentials;
	
	  // Transform request data
	  config.data = transformData(config.data, config.headers, config.transformRequest);
	
	  // Flatten headers
	  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
	
	  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
	    delete config.headers[method];
	  });
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	var defaultInstance = new Axios(defaults);
	var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
	
	axios.create = function create(defaultConfig) {
	  return new Axios(defaultConfig);
	};
	
	// Expose defaults
	axios.defaults = defaultInstance.defaults;
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(258);
	
	// Expose interceptors
	axios.interceptors = defaultInstance.interceptors;
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	module.exports = {
	  transformRequest: [function transformResponseJSON(data, headers) {
	    if (utils.isFormData(data)) {
	      return data;
	    }
	    if (utils.isArrayBuffer(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
	      // Set application/json if no Content-Type has been specified
	      if (!utils.isUndefined(headers)) {
	        utils.forEach(headers, function processContentTypeHeader(val, key) {
	          if (key.toLowerCase() === 'content-type') {
	            headers['Content-Type'] = val;
	          }
	        });
	
	        if (utils.isUndefined(headers['Content-Type'])) {
	          headers['Content-Type'] = 'application/json;charset=utf-8';
	        }
	      }
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponseJSON(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) {/* Ignore */}
	    }
	    return data;
	  }],
	
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN'
	};

/***/ },

/***/ 245:
/***/ function(module, exports) {

	'use strict';
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return toString.call(val) === '[object FormData]';
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge() /* obj1, obj2, obj3, ... */{
	  var result = {};
	  function assignValue(val, key) {
	    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  trim: trim
	};

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	
	module.exports = function dispatchRequest(config) {
	  return new Promise(function executor(resolve, reject) {
	    try {
	      var adapter;
	
	      if (typeof config.adapter === 'function') {
	        // For custom adapter support
	        adapter = config.adapter;
	      } else if (typeof XMLHttpRequest !== 'undefined') {
	        // For browsers use XHR adapter
	        adapter = __webpack_require__(247);
	      } else if (typeof process !== 'undefined') {
	        // For node use HTTP adapter
	        adapter = __webpack_require__(247);
	      }
	
	      if (typeof adapter === 'function') {
	        adapter(resolve, reject, config);
	      }
	    } catch (e) {
	      reject(e);
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	var buildURL = __webpack_require__(248);
	var parseHeaders = __webpack_require__(249);
	var transformData = __webpack_require__(250);
	var isURLSameOrigin = __webpack_require__(251);
	var btoa = window.btoa || __webpack_require__(252);
	
	module.exports = function xhrAdapter(resolve, reject, config) {
	  var requestData = config.data;
	  var requestHeaders = config.headers;
	
	  if (utils.isFormData(requestData)) {
	    delete requestHeaders['Content-Type']; // Let the browser set it
	  }
	
	  var request = new XMLHttpRequest();
	
	  // For IE 8/9 CORS support
	  // Only supports POST and GET calls and doesn't returns the response headers.
	  if (window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	    request = new window.XDomainRequest();
	  }
	
	  // HTTP basic authentication
	  if (config.auth) {
	    var username = config.auth.username || '';
	    var password = config.auth.password || '';
	    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	  }
	
	  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	  // Set the request timeout in MS
	  request.timeout = config.timeout;
	
	  // Listen for ready state
	  request.onload = function handleLoad() {
	    if (!request) {
	      return;
	    }
	    // Prepare the response
	    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	    var responseData = ['text', ''].indexOf(config.responseType || '') !== -1 ? request.responseText : request.response;
	    var response = {
	      data: transformData(responseData, responseHeaders, config.transformResponse),
	      // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	      status: request.status === 1223 ? 204 : request.status,
	      statusText: request.status === 1223 ? 'No Content' : request.statusText,
	      headers: responseHeaders,
	      config: config
	    };
	
	    // Resolve or reject the Promise based on the status
	    (response.status >= 200 && response.status < 300 || !('status' in request) && response.responseText ? resolve : reject)(response);
	
	    // Clean up request
	    request = null;
	  };
	
	  // Handle low level network errors
	  request.onerror = function handleError() {
	    // Real errors are hidden from us by the browser
	    // onerror should only fire if it's a network error
	    reject(new Error('Network Error'));
	
	    // Clean up request
	    request = null;
	  };
	
	  // Add xsrf header
	  // This is only done if running in a standard browser environment.
	  // Specifically not if we're in a web worker, or react-native.
	  if (utils.isStandardBrowserEnv()) {
	    var cookies = __webpack_require__(253);
	
	    // Add xsrf header
	    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ? cookies.read(config.xsrfCookieName) : undefined;
	
	    if (xsrfValue) {
	      requestHeaders[config.xsrfHeaderName] = xsrfValue;
	    }
	  }
	
	  // Add headers to the request
	  if ('setRequestHeader' in request) {
	    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	        // Remove Content-Type if data is undefined
	        delete requestHeaders[key];
	      } else {
	        // Otherwise add header to the request
	        request.setRequestHeader(key, val);
	      }
	    });
	  }
	
	  // Add withCredentials to request if needed
	  if (config.withCredentials) {
	    request.withCredentials = true;
	  }
	
	  // Add responseType to request if needed
	  if (config.responseType) {
	    try {
	      request.responseType = config.responseType;
	    } catch (e) {
	      if (request.responseType !== 'json') {
	        throw e;
	      }
	    }
	  }
	
	  if (utils.isArrayBuffer(requestData)) {
	    requestData = new DataView(requestData);
	  }
	
	  // Send the request
	  request.send(requestData);
	};

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	
	function encode(val) {
	  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) {
	    return parsed;
	  }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	
	module.exports = utils.isStandardBrowserEnv() ?
	
	// Standard browser envs have full support of the APIs needed to test
	// whether the request URL is of the same origin as current location.
	function standardBrowserEnv() {
	  var msie = /(msie|trident)/i.test(navigator.userAgent);
	  var urlParsingNode = document.createElement('a');
	  var originURL;
	
	  /**
	  * Parse a URL to discover it's components
	  *
	  * @param {String} url The URL to be parsed
	  * @returns {Object}
	  */
	  function resolveURL(url) {
	    var href = url;
	
	    if (msie) {
	      // IE needs attribute set twice to normalize properties
	      urlParsingNode.setAttribute('href', href);
	      href = urlParsingNode.href;
	    }
	
	    urlParsingNode.setAttribute('href', href);
	
	    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	    return {
	      href: urlParsingNode.href,
	      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	      host: urlParsingNode.host,
	      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	      hostname: urlParsingNode.hostname,
	      port: urlParsingNode.port,
	      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
	    };
	  }
	
	  originURL = resolveURL(window.location.href);
	
	  /**
	  * Determine if a URL shares the same origin as the current location
	  *
	  * @param {String} requestURL The URL to test
	  * @returns {boolean} True if URL shares the same origin, otherwise false
	  */
	  return function isURLSameOrigin(requestURL) {
	    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
	    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
	  };
	}() :
	
	// Non standard browser envs (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return function isURLSameOrigin() {
	    return true;
	  };
	}();

/***/ },

/***/ 252:
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function InvalidCharacterError(message) {
	  this.message = message;
	}
	InvalidCharacterError.prototype = new Error();
	InvalidCharacterError.prototype.code = 5;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	  // initialize result and counter
	  var block, charCode, idx = 0, map = chars;
	  // if the next str index does not exist:
	  //   change the mapping table to "="
	  //   check if d has no fractional digits
	  str.charAt(idx | 0) || (map = '=', idx % 1);
	  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new InvalidCharacterError('INVALID_CHARACTER_ERR: DOM Exception 5');
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	
	module.exports = utils.isStandardBrowserEnv() ?
	
	// Standard browser envs support document.cookie
	function standardBrowserEnv() {
	  return {
	    write: function write(name, value, expires, path, domain, secure) {
	      var cookie = [];
	      cookie.push(name + '=' + encodeURIComponent(value));
	
	      if (utils.isNumber(expires)) {
	        cookie.push('expires=' + new Date(expires).toGMTString());
	      }
	
	      if (utils.isString(path)) {
	        cookie.push('path=' + path);
	      }
	
	      if (utils.isString(domain)) {
	        cookie.push('domain=' + domain);
	      }
	
	      if (secure === true) {
	        cookie.push('secure');
	      }
	
	      document.cookie = cookie.join('; ');
	    },
	
	    read: function read(name) {
	      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	      return match ? decodeURIComponent(match[3]) : null;
	    },
	
	    remove: function remove(name) {
	      this.write(name, '', Date.now() - 86400000);
	    }
	  };
	}() :
	
	// Non standard browser env (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return {
	    write: function write() {},
	    read: function read() {
	      return null;
	    },
	    remove: function remove() {}
	  };
	}();

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(245);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;

/***/ },

/***/ 255:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
	  );
	};

/***/ },

/***/ 256:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};

/***/ },

/***/ 257:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

/***/ },

/***/ 258:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanN4P2Q3NmYiLCJ3ZWJwYWNrOi8vLy4vanMvRGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztB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QVosQ0FBb0IsTUFBcEIsRUFBNEIsRUFBNUIsQ0FBcEMsQ0FEbUQ7RUFBM0MsQzs7Ozs7OztBQ1RqQjs7QUFFQSxRQUFPLE9BQVAsR0FBaUIsU0FBUyxJQUFULENBQWMsRUFBZCxFQUFrQixPQUFsQixFQUEyQjtBQUMxQyxVQUFPLFNBQVMsSUFBVCxHQUFnQjtBQUNyQixTQUFJLE9BQU8sSUFBSSxLQUFKLENBQVUsVUFBVSxNQUFWLENBQWpCLENBRGlCO0FBRXJCLFVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssTUFBTCxFQUFhLEdBQWpDLEVBQXNDO0FBQ3BDLFlBQUssQ0FBTCxJQUFVLFVBQVUsQ0FBVixDQUFWLENBRG9DO01BQXRDO0FBR0EsWUFBTyxHQUFHLEtBQUgsQ0FBUyxPQUFULEVBQWtCLElBQWxCLENBQVAsQ0FMcUI7SUFBaEIsQ0FEbUM7RUFBM0IsQzs7Ozs7OztBQ0ZqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsUUFBTyxPQUFQLEdBQWlCLFNBQVMsTUFBVCxDQUFnQixRQUFoQixFQUEwQjtBQUN6QyxVQUFPLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDeEIsWUFBTyxTQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLEdBQXJCLENBQVAsQ0FEd0I7SUFBbkIsQ0FEa0M7RUFBMUIsQyIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge2Nvbm5lY3Rvcn0gZnJvbSAnLi9TdG9yZS5qc3gnO1xuXG5jb25zdCB7ZnVuYywgYm9vbCwgc3RyaW5nfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHV0aWxTcGFjZSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zaG93U2VhcmNoKSB7XG4gICAgICB1dGlsU3BhY2UgPSAoXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFRlcm19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaFRlcm1DaGFuZ2V9IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHV0aWxTcGFjZSA9IChcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlci1iYWNrXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvc2VhcmNoXCI+XG4gICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2gyPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJyYW5kXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiYnJhbmQtbGlua1wiPlxuICAgICAgICAgICAgc3ZpZGVvXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2gxPlxuICAgICAgICB7dXRpbFNwYWNlfVxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBzZXRTZWFyY2hUZXJtOiBmdW5jLFxuICBzaG93U2VhcmNoOiBib29sLFxuICBzZWFyY2hUZXJtOiBzdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihIZWFkZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9IZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHtjb25uZWN0b3J9IGZyb20gJy4vU3RvcmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3Qge29iamVjdCwgYXJyYXlPZn0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNsYXNzIERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvbWRiRGF0YToge31cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9pPSR7dGhpcy5nZXRDdXJyZW50U2hvdyh0aGlzLnByb3BzLnNob3dzLCB0aGlzLnByb3BzLnBhcmFtcy5pZCkuaW1kYklEfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b21kYkRhdGE6IHJlc3BvbnNlLmRhdGF9KTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdheGlvcyBlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEN1cnJlbnRTaG93KHNob3dzLCBpZCkge1xuICAgIGNvbnN0IHNob3dBcnJheSA9IHNob3dzLmZpbHRlcihpdGVtID0+IGlkID09PSBpdGVtLmltZGJJRCk7XG5cbiAgICByZXR1cm4gc2hvd0FycmF5WzBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIHllYXIsIHBvc3RlciwgdHJhaWxlcn0gPSB0aGlzLmdldEN1cnJlbnRTaG93KHRoaXMucHJvcHMuc2hvd3MsIHRoaXMucHJvcHMucGFyYW1zLmlkKSB8fCB7fTtcbiAgICBsZXQgcmF0aW5nO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub21kYkRhdGEuaW1kYlJhdGluZykge1xuICAgICAgcmF0aW5nID0gPGgzIGNsYXNzTmFtZT1cInZpZGVvLXJhdGluZ1wiPnt0aGlzLnN0YXRlLm9tZGJEYXRhLmltZGJSYXRpbmd9PC9oMz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1pbmZvXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpZGVvLXRpdGxlXCI+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW8teWVhclwiPlxuICAgICAgICAgICAgKHt5ZWFyfSlcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtyYXRpbmd9XG4gICAgICAgICAgPGltZyBzcmM9e2AvcHVibGljL2ltZy9wb3N0ZXJzLyR7cG9zdGVyfWB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInZpZGVvLXBvc3RlclwiLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aWRlby1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvJHt0cmFpbGVyfT9yZWw9MCZhbXA7Y29udHJvbHM9MCZhbXA7c2hvd2luZm89MGB9IGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRldGFpbHMucHJvcFR5cGVzID0ge1xuICBwYXJhbXM6IG9iamVjdCxcbiAgc2hvd3M6IGFycmF5T2Yob2JqZWN0KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRGV0YWlscyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL0RldGFpbHMuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vY29yZS9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi9oZWxwZXJzL3RyYW5zZm9ybURhdGEnKTtcblxuZnVuY3Rpb24gQXhpb3MoZGVmYXVsdENvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gdXRpbHMubWVyZ2Uoe30sIGRlZmF1bHRDb25maWcpO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBEb24ndCBhbGxvdyBvdmVycmlkaW5nIGRlZmF1bHRzLndpdGhDcmVkZW50aWFsc1xuICBjb25maWcud2l0aENyZWRlbnRpYWxzID0gY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCB0aGlzLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscztcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbnZhciBkZWZhdWx0SW5zdGFuY2UgPSBuZXcgQXhpb3MoZGVmYXVsdHMpO1xudmFyIGF4aW9zID0gbW9kdWxlLmV4cG9ydHMgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBkZWZhdWx0SW5zdGFuY2UpO1xuXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoZGVmYXVsdENvbmZpZykge1xuICByZXR1cm4gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xufTtcblxuLy8gRXhwb3NlIGRlZmF1bHRzXG5heGlvcy5kZWZhdWx0cyA9IGRlZmF1bHRJbnN0YW5jZS5kZWZhdWx0cztcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGludGVyY2VwdG9yc1xuYXhpb3MuaW50ZXJjZXB0b3JzID0gZGVmYXVsdEluc3RhbmNlLmludGVyY2VwdG9ycztcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbiAgYXhpb3NbbWV0aG9kXSA9IGJpbmQoQXhpb3MucHJvdG90eXBlW21ldGhvZF0sIGRlZmF1bHRJbnN0YW5jZSk7XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbiAgYXhpb3NbbWV0aG9kXSA9IGJpbmQoQXhpb3MucHJvdG90eXBlW21ldGhvZF0sIGRlZmF1bHRJbnN0YW5jZSk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvYXhpb3MuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFBST1RFQ1RJT05fUFJFRklYID0gL15cXClcXF1cXH0nLD9cXG4vO1xudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2VKU09OKGRhdGEsIGhlYWRlcnMpIHtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSAmJiAhdXRpbHMuaXNGaWxlKGRhdGEpICYmICF1dGlscy5pc0Jsb2IoZGF0YSkpIHtcbiAgICAgIC8vIFNldCBhcHBsaWNhdGlvbi9qc29uIGlmIG5vIENvbnRlbnQtVHlwZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykpIHtcbiAgICAgICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzQ29udGVudFR5cGVIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlSlNPTihkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShQUk9URUNUSU9OX1BSRUZJWCwgJycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICB9LFxuICAgIHBhdGNoOiB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSksXG4gICAgcG9zdDogdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpLFxuICAgIHB1dDogdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpXG4gIH0sXG5cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTidcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGb3JtRGF0YV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAtPiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmICFpc0FycmF5KG9iaikpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2F4aW9zL2xpYi91dGlscy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB3aGljaGV2ZXIgYWRhcHRlclxuICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhZGFwdGVyO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5hZGFwdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEZvciBjdXN0b20gYWRhcHRlciBzdXBwb3J0XG4gICAgICAgIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVycy94aHInKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICAgICAgYWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXJzL2h0dHAnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBhZGFwdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFkYXB0ZXIocmVzb2x2ZSwgcmVqZWN0LCBjb25maWcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBidG9hID0gd2luZG93LmJ0b2EgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKHJlc29sdmUsIHJlamVjdCwgY29uZmlnKSB7XG4gIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gIH1cblxuICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gIGlmICh3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJiAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgfVxuXG4gIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgfVxuXG4gIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgIHZhciByZXNwb25zZURhdGEgPSBbJ3RleHQnLCAnJ10uaW5kZXhPZihjb25maWcucmVzcG9uc2VUeXBlIHx8ICcnKSAhPT0gLTEgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgZGF0YTogdHJhbnNmb3JtRGF0YShcbiAgICAgICAgcmVzcG9uc2VEYXRhLFxuICAgICAgICByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgKSxcbiAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfTtcblxuICAgIC8vIFJlc29sdmUgb3IgcmVqZWN0IHRoZSBQcm9taXNlIGJhc2VkIG9uIHRoZSBzdGF0dXNcbiAgICAoKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB8fFxuICAgICAoISgnc3RhdHVzJyBpbiByZXF1ZXN0KSAmJiByZXNwb25zZS5yZXNwb25zZVRleHQpID9cbiAgICAgIHJlc29sdmUgOlxuICAgICAgcmVqZWN0KShyZXNwb25zZSk7XG5cbiAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgcmVxdWVzdCA9IG51bGw7XG4gIH07XG5cbiAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICByZWplY3QobmV3IEVycm9yKCdOZXR3b3JrIEVycm9yJykpO1xuXG4gICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgIHJlcXVlc3QgPSBudWxsO1xuICB9O1xuXG4gIC8vIEFkZCB4c3JmIGhlYWRlclxuICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICB2YXIgeHNyZlZhbHVlID0gY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChyZXF1ZXN0LnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIocmVxdWVzdERhdGEpKSB7XG4gICAgcmVxdWVzdERhdGEgPSBuZXcgRGF0YVZpZXcocmVxdWVzdERhdGEpO1xuICB9XG5cbiAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvaGVscGVycy90cmFuc2Zvcm1EYXRhLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuSW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkludmFsaWRDaGFyYWN0ZXJFcnJvci5wcm90b3R5cGUuY29kZSA9IDU7XG5JbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IoJ0lOVkFMSURfQ0hBUkFDVEVSX0VSUjogRE9NIEV4Y2VwdGlvbiA1Jyk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9