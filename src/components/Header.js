/**
 * Created by Administrator on 2017-07-28.
 */
import React, { Component } from 'react';

class Header extends Component {

    handlePrev(e) {
        this.props.onPrevMonth();
    }

    handleNext(e) {
        this.props.onNextMonth();
    }

    render() {
        let date = this.props.date;
        let year = date.getFullYear();
        let month = parseInt(date.getMonth()) + 1;

        return (
            <div className="calendar_head">
                <a className="prev_btn" onClick={this.handlePrev.bind(this)}>
                    <span>이전 달력 보기</span>
                </a>
                <div className="calendar_title">
                    <span>{year+'.'+month}</span>
                </div>
                <a className="next_btn" onClick={this.handleNext.bind(this)}>
                    <span>다음 달력 보기</span>
                </a>
            </div>
        );
    }
}

export default Header;