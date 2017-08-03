'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

require('../style/calendar.sass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017-07-28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var WEEKS = {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    kr: ['일', '월', '화', '수', '목', '금', '토']
};

function getDate(year, month, day) {
    var date = new Date();

    if (year) {
        date.setFullYear(year, month - 1, day || 1);
    }

    return date;
}

var Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        var date = getDate(props.year, props.month, props.day);

        _this.state = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };

        _this.handlePrevMonth = _this.handlePrevMonth.bind(_this);
        _this.handleNextMonth = _this.handleNextMonth.bind(_this);
        return _this;
    }

    _createClass(Calendar, [{
        key: 'handlePrevMonth',
        value: function handlePrevMonth() {
            this.setState({
                month: this.state.month - 1
            });
        }
    }, {
        key: 'handleNextMonth',
        value: function handleNextMonth() {
            this.setState({
                month: this.state.month + 1
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.state;

            var date = getDate(state.year, state.month, state.day);

            console.log(state.year, state.month);

            return _react2.default.createElement(
                'div',
                { className: 'calendar_wrap' },
                _react2.default.createElement(_Header2.default, { date: date, onPrevMonth: this.handlePrevMonth, onNextMonth: this.handleNextMonth }),
                _react2.default.createElement(_Body2.default, { weeks: WEEKS[this.props.locale], date: date })
            );
        }
    }]);

    return Calendar;
}(_react.Component);

Calendar.defaultProps = {
    year: null,
    month: null,
    day: null,
    locale: 'en'
};

exports.default = Calendar;

//# sourceMappingURL=Calendar-compiled.js.map