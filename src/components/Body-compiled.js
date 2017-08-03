'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017-07-28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function Row(props) {
    return _react2.default.createElement(
        'tr',
        null,
        props.days.map(function (idx, day, i) {
            return _react2.default.createElement(_Cell2.default, { key: 'cell' + idx + '_' + i, date: day, week: i });
        }.bind(this, props.idx))
    );
}

function CDate(year, month) {
    var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;


    if (month == 0) {
        month = 12;
        year--;
    } else if (month == 13) {
        month = 1;
        year++;
    }

    var date = new Date(year, month - 1, day);

    var returnDate = {};
    returnDate.date = date;
    returnDate.year = year;
    returnDate.month = month;
    returnDate.day = date.getDate();
    returnDate.week = date.getDay();

    date.setMonth(month, 0);

    returnDate.last_day = date.getDate();
    returnDate.last_week = date.getDay();

    date.setDate(1);

    returnDate.first_week = date.getDay();

    return returnDate;
}

var Body = function (_Component) {
    _inherits(Body, _Component);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            var date = this.props.date;


            var current = CDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
            var prev = CDate(current.year, current.month - 1, current.day);
            var next = CDate(current.year, current.month + 1, current.day);

            var prevStartDate = prev.last_day - prev.last_week;
            var total = current.last_day + current.first_week;

            if (total < 35) {
                total = 35;
            } else {
                total = 42;
            }

            var days = [];
            for (var i = 0, j = -1; i < total; ++i) {
                if (i % 7 == 0) {
                    days[++j] = [];
                }

                if (i < current.first_week) {
                    days[j].push({
                        type: 'prev',
                        year: prev.year,
                        month: prev.month,
                        day: prevStartDate + i
                    });
                } else if (i < current.first_week + current.last_day) {
                    days[j].push({
                        type: 'current',
                        year: current.year,
                        month: current.month,
                        day: i - current.first_week + 1
                    });
                } else {
                    days[j].push({
                        type: 'next',
                        year: next.year,
                        month: next.month,
                        day: i - (current.first_week + current.last_day - 1)
                    });
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'calendar_content_wrap' },
                _react2.default.createElement(
                    'table',
                    { className: 'calendar_content' },
                    _react2.default.createElement(
                        'caption',
                        { className: 'blind' },
                        '\uC190 \uC5C6\uB294 \uB0A0 \uB2EC\uB825'
                    ),
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            this.props.weeks.map(function (week, idx) {
                                return _react2.default.createElement(
                                    'th',
                                    { scope: 'col', key: 'week' + idx },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        week
                                    )
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        days.map(function (day, idx) {
                            return _react2.default.createElement(Row, { key: 'row' + idx, idx: idx, days: day });
                        })
                    )
                )
            );
        }
    }]);

    return Body;
}(_react.Component);

Body.defaultProps = {
    locale: 'en'
};

exports.default = Body;

//# sourceMappingURL=Body-compiled.js.map