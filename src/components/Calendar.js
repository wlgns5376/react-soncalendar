/**
 * Created by Administrator on 2017-07-28.
 */
import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

import '../style/calendar.sass'


let WEEKS = {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    kr: ['일', '월', '화', '수', '목', '금', '토']
};


function getDate(year, month, day){
    let date = new Date();

    if (year) {
        date.setFullYear(year, month-1, day || 1);
    }

    return date;
}

class Calendar extends Component {

    constructor(props) {
        super(props);

        let date = getDate(props.year, props.month, props.day);

        this.state = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };

        this.handlePrevMonth = this.handlePrevMonth.bind(this);
        this.handleNextMonth = this.handleNextMonth.bind(this);
    }

    handlePrevMonth() {
        if (this.state.year == 2016 && this.state.month == 1) {
            return false;
        }
        let date = getDate(this.state.year, this.state.month - 1, this.state.day);

        this.setState({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        });
    }

    handleNextMonth() {

        if (this.state.year == 2025 && this.state.month == 12) {
            return false;
        }

        let date = getDate(this.state.year, this.state.month + 1, this.state.day);

        this.setState({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        });
    }

    render() {
        let state = this.state;

        let date = getDate(state.year, state.month, state.day);

        //console.log(state.year, state.month);

        return (
            <div className="calendar_wrap">
                <Header date={date} onPrevMonth={this.handlePrevMonth} onNextMonth={this.handleNextMonth} />

                <Body weeks={WEEKS[this.props.locale]} date={date} />
            </div>
        )
    }
}

Calendar.defaultProps = {
    year: null,
    month: null,
    day: null,
    locale: 'en'
};

export default Calendar;

