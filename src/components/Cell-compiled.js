'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lunars = require('../libs/lunars');

var _lunars2 = _interopRequireDefault(_lunars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2017-07-28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cell = function (_Component) {
    _inherits(Cell, _Component);

    function Cell() {
        _classCallCheck(this, Cell);

        return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
    }

    _createClass(Cell, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                date = _props.date,
                week = _props.week;


            var classNames = [];

            if (date.type == 'current') {
                classNames.push('this_month');
            } else {
                classNames.push(date.type + '_month');
            }

            var today = new Date();

            if (today.getFullYear() == date.year && today.getMonth() == date.month - 1 && today.getDate() == date.day) {
                classNames.push('today');
            }

            var dayClassNames = [];

            if (week == 0) {
                dayClassNames.push('sun');
            } else if (week == 6) {
                dayClassNames.push('sat');
            }

            var lunar = (0, _lunars2.default)(date.year, date.month, date.day);
            var num = lunar.date.substr(-1, 1);

            if (num == 9 || num == 0) {
                dayClassNames.push('moveday');
            }

            return _react2.default.createElement(
                'td',
                { className: classNames.join(' ') },
                date.type == 'current' ? _react2.default.createElement(
                    'span',
                    { className: dayClassNames.join(' ') },
                    date.day
                ) : date.day
            );
        }
    }]);

    return Cell;
}(_react.Component);

exports.default = Cell;

//# sourceMappingURL=Cell-compiled.js.map