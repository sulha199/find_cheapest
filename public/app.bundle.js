webpackJsonp([0],{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(51);

var _CollectionSearch = __webpack_require__(86);

var _CollectionSearch2 = _interopRequireDefault(_CollectionSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionItem = function CollectionItem(props) {
    return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
            'div',
            { className: "product " + props.item.origin },
            _react2.default.createElement(
                'div',
                { className: 'product-image' },
                _react2.default.createElement('img', { src: props.item.img })
            ),
            _react2.default.createElement(
                'div',
                { className: 'product-title' },
                _react2.default.createElement(
                    'a',
                    { href: props.item.url },
                    _react2.default.createElement(
                        'span',
                        null,
                        props.item.title
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'products-info' },
                _react2.default.createElement(
                    'div',
                    { className: 'product-price' },
                    _react2.default.createElement(
                        'span',
                        null,
                        'Rp ',
                        props.item.price.toLocaleString()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'product-condition' },
                    _react2.default.createElement(
                        'span',
                        null,
                        props.item.condition
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: "seller-info " + props.item.origin },
                _react2.default.createElement(
                    'div',
                    { className: 'product-origin' },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            props.item.origin,
                            ' '
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'product-seller' },
                    _react2.default.createElement(
                        'span',
                        null,
                        props.item.seller_name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'product-location' },
                    _react2.default.createElement(
                        'span',
                        null,
                        props.item.location
                    )
                )
            )
        )
    );
};

function ItemsDisplay(props) {
    var items = props.items.map(function (item) {
        return _react2.default.createElement(CollectionItem, { key: item._id, item: item });
    });
    return _react2.default.createElement(
        'ul',
        null,
        items
    );
}

var Collection = function (_React$Component) {
    _inherits(Collection, _React$Component);

    function Collection() {
        _classCallCheck(this, Collection);

        var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this));

        var words = {
            bl: {
                keyword: "keywords",
                row_numbers: 'per_page',
                sort: "sort_by",
                condition: "conditions",
                city: "city",
                province: "province",
                price_min: "price_min",
                price_max: "price_max",
                post_date: "created_at",
                shipping: 'shipping',
                options: {
                    condition: [{
                        index: 'new',
                        key: 'new',
                        text: 'New'
                    }, {
                        index: 'used',
                        key: 'used',
                        text: 'Used'
                    }],
                    sort: [{
                        index: 'lowest',
                        key: 'Termurah',
                        text: 'Termurah'
                    }, {
                        index: 'highest',
                        key: 'Termahal',
                        text: 'Termahal'
                    }, {
                        index: 'newest',
                        key: 'Terbaru',
                        text: 'Terbaru'
                    }]
                }
            },
            tp: {
                keyword: "q",
                row_numbers: 'rows',
                sort: "ob",
                condition: "condition",
                city: "city",
                province: "province",
                price_min: "pmin",
                price_max: "pmax",
                shipping: 'shipping',
                options: {
                    condition: [{
                        index: 'new',
                        key: 1,
                        text: 'New'
                    }, {
                        index: 'used',
                        key: 2,
                        text: 'Used'
                    }],
                    sort: [{
                        index: '',
                        key: '',
                        text: 'Default'
                    }, {
                        index: 'lowest',
                        key: '3',
                        text: 'Termurah'
                    }, {
                        index: 'highest',
                        key: '4',
                        text: 'Termahal'
                    }, {
                        index: 'newest',
                        key: '9',
                        text: 'Terbaru'
                    }]
                }
            }
        };

        _this.state = { items: [], words: words, filters: {} };

        _this.loadBl = _this.loadBl.bind(_this);
        _this.loadTp = _this.loadTp.bind(_this);
        _this.sort = _this.sort.bind(_this);
        _this.performSearch = _this.performSearch.bind(_this);
        return _this;
    }

    _createClass(Collection, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadTp();
            this.loadBl({});
        }
    }, {
        key: 'performSearch',
        value: function performSearch(filters) {
            this.setState({ items: [] });

            this.setState({
                filters: filters
            });

            this.loadBl(filters);
            this.loadTp(filters);
        }
    }, {
        key: 'loadBl',
        value: function loadBl(params) {
            var _this2 = this;

            var word = this.state.words.bl;
            var ifilter = {};

            Object.keys(params).map(function (e) {
                return ifilter[word[e]] = params[e];
            });
            if (ifilter[word.sort] != '') ifilter[word.sort] = word.options.sort[word.options.sort.findIndex(function (d) {
                return d.index == ifilter[word.sort];
            })].key;
            if (ifilter[word.condition] != '') ifilter[word.condition] = word.options.condition[word.options.condition.findIndex(function (d) {
                return d.index == ifilter[word.condition];
            })].key;

            var urlparams = Object.keys(ifilter).map(function (key) {
                return [key, ifilter[key]].map(encodeURIComponent).join("=");
            }).join("&");

            fetch('https://api.bukalapak.com/v2/products.json?page=1&per_page=20&' + urlparams).then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {

                        console.log("Total count of records of bl:", data.products.length);
                        var temp = [];
                        data.products.forEach(function (item) {
                            temp.push({
                                title: item.name,
                                img: item.small_images[0].replace("/small/", "/s-190-190/"),
                                seller_name: item.seller_name,
                                location: item.city,
                                price: item.price,
                                //post_date: item.created_at,
                                condition: word.options.condition[word.options.condition.findIndex(function (d) {
                                    return d.key == item.condition;
                                })].text,
                                url: item.url,
                                origin: "BL"
                            });
                        });
                        _this2.setState({ items: _this2.sort(_this2.state.items.concat(temp), params.sort) });
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to fetch issues:" + error.message);
                    });
                }
            }).catch(function (err) {
                alert("Error in fetching data from Bukalapak:", err);
            });
        }
    }, {
        key: 'priceAsc',
        value: function priceAsc(obj) {
            return obj.sort(function (a, b) {
                return a.price - b.price;
            });
        }
    }, {
        key: 'priceDesc',
        value: function priceDesc(obj) {
            return obj.sort(function (a, b) {
                return b.price - a.price;
            });
        }
    }, {
        key: 'sort',
        value: function sort(obj, method) {
            if (method == 'lowest') return this.priceAsc(obj);else if (method == 'highest') return this.priceDesc(obj);else return obj;
        }
    }, {
        key: 'loadTp',
        value: function loadTp(params) {
            var _this3 = this;

            var word = this.state.words.tp;
            var ifilter = {};

            Object.keys(params).map(function (e) {
                return ifilter[word[e]] = params[e];
            });
            if (ifilter[word.sort] != '') ifilter[word.sort] = word.options.sort[word.options.sort.findIndex(function (d) {
                return d.index == ifilter[word.sort];
            })].key;
            if (ifilter[word.condition] != '') ifilter[word.condition] = word.options.condition[word.options.condition.findIndex(function (d) {
                return d.index == ifilter[word.condition];
            })].key;

            var urlparams = Object.keys(ifilter).map(function (key) {
                return [key, ifilter[key]].map(encodeURIComponent).join("=");
            }).join("&");

            //fetch('http://localhost:8000/api/tp?st=product&image_size=100&image_square=true&rows=20&'+urlparams).then(response => {
            fetch('http://crossorigin.me/https://ace.tokopedia.com/search/v2.6/product?st=product&image_size=190&image_square=true&rows=20&' + urlparams, { credentials: 'same-origin' }).then(function (response) {

                if (response.ok) {
                    response.json().then(function (data) {
                        console.log("Total count of records tp :", data.data.length);
                        var word = _this3.state.words.tp;
                        var temp = [];
                        data.data.forEach(function (item) {
                            temp.push({
                                title: item.name,
                                img: item.image_uri_700,
                                seller_name: item.shop.name,
                                location: item.shop.location,
                                price: parseInt(item.price.replace(/[Rp .]+/g, "")),
                                condition: word.options.condition[word.options.condition.findIndex(function (d) {
                                    return d.key == item.condition;
                                })].text,
                                url: item.uri,
                                origin: "TP"
                            });
                        });
                        _this3.setState({ items: _this3.sort(_this3.state.items.concat(temp), params.sort) });
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to fetch issues:" + error.message);
                    });
                }
            }).catch(function (err) {
                alert("Error in fetching data from Tokopedia : ", err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'List :'
                ),
                _react2.default.createElement(_CollectionSearch2.default, { performSearch: this.performSearch }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(ItemsDisplay, { items: this.state.items }),
                _react2.default.createElement('hr', null)
            );
        }
    }]);

    return Collection;
}(_react2.default.Component);

exports.default = Collection;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Collection = __webpack_require__(84);

var _Collection2 = _interopRequireDefault(_Collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById('contents');

//asdsd 
//ReactDOM.render(<IssueList />, contentNode); // Render the component inside the content Node 

var contentNode2 = document.getElementById('contents2');
_reactDom2.default.render(_react2.default.createElement(_Collection2.default, null), contentNode2); // Render the component inside the content Node 

if (false) {
    module.hot.accept();
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionSearch = function (_React$Component) {
    _inherits(CollectionSearch, _React$Component);

    function CollectionSearch() {
        _classCallCheck(this, CollectionSearch);

        var _this = _possibleConstructorReturn(this, (CollectionSearch.__proto__ || Object.getPrototypeOf(CollectionSearch)).call(this));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(CollectionSearch, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var form = document.forms.collectionSearch;
            this.props.performSearch({
                keyword: form.keyword.value,
                sort: form.sort.value,
                condition: form.condition.value,
                price_min: form.price_min.value,
                price_max: form.price_max.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "form",
                    { name: "collectionSearch", onSubmit: this.handleSubmit },
                    _react2.default.createElement("input", { type: "text", name: "keyword", placeholder: "Masukkan Kata Kunci" }),
                    _react2.default.createElement(
                        "select",
                        { name: "sort", placeholder: "urut berdasar" },
                        _react2.default.createElement(
                            "option",
                            { value: "lowest" },
                            "Termurah"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "highest" },
                            "Termahal"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "newest" },
                            "Terbaru"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "" },
                            "Acak"
                        )
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "condition", placeholder: "" },
                        _react2.default.createElement(
                            "option",
                            { value: "" },
                            "Semua"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "new" },
                            "Baru"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "used" },
                            "Bekas"
                        )
                    ),
                    _react2.default.createElement("input", { type: "text", name: "price_min", placeholder: "Harga Minimum" }),
                    _react2.default.createElement("input", { type: "text", name: "price_max", placeholder: "Harga Maksimum" }),
                    _react2.default.createElement(
                        "button",
                        null,
                        "Cari"
                    )
                )
            );
        }
    }]);

    return CollectionSearch;
}(_react2.default.Component);

exports.default = CollectionSearch;

/***/ })

},[85]);