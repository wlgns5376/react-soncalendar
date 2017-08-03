/**
 * Created by Administrator on 2017-07-28.
 */
import React, { Component } from 'react';
import Cell from './Cell';


function Row(props) {
    return (
        <tr>
            {props.days.map(function (idx, day, i) {
                return <Cell key={'cell'+idx+'_'+i} date={day} week={i} />
            }.bind(this, props.idx))}
        </tr>
    )
}


function CDate(year, month, day = 1) {
    
    if (month == 0) {
        month = 12;
        year--;
    } else if(month == 13) {
        month = 1;
        year++;
    }

    let date = new Date(year, month-1, day);

    let returnDate = {};
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

class Body extends Component {

    render() {

        let { date } = this.props;

        let current = CDate(date.getFullYear(), date.getMonth()+1, date.getDate());
        let prev = CDate(current.year, current.month-1, current.day);
        let next = CDate(current.year, current.month+1, current.day);

        let prevStartDate = prev.last_day - prev.last_week;
        let total = current.last_day + current.first_week;
        
        if (total <= 35) {
            total = 35;
        } else {
            total = 42;
        }

        let days = [];
        for (let i = 0, j = -1; i < total; ++i) {
            if (i%7 == 0) {
                days[++j] = [];
            }


            if (i < current.first_week) {
                days[j].push({
                    type: 'prev',
                    year: prev.year,
                    month: prev.month,
                    day: prevStartDate + i
                });
            } else if( i < current.first_week + current.last_day) {
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

        return (
            <div className="calendar_content_wrap">
                <table className="calendar_content">
                    <caption className="blind">손 없는 날 달력</caption>
                    <thead>
                        <tr>
                        {this.props.weeks.map(function (week, idx) {
                            return (
                            <th scope="col" key={'week'+idx}>
                                <span>{week}</span>
                            </th>
                            )
                        })}
                        </tr>
                    </thead>
                    <tbody>
                    {days.map(function (day, idx) {
                        return <Row key={'row'+idx} idx={idx} days={day} />
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

Body.defaultProps = {
    locale: 'en'
};

export default Body;