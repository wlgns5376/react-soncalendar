/**
 * Created by Administrator on 2017-07-28.
 */
import React, { Component } from 'react';

import lunars from '../libs/lunars';

class Cell extends Component {

    render() {
        let { date, week } = this.props;

        let classNames = [];

        if (date.type == 'current') {
            classNames.push('this_month');
        } else {
            classNames.push(date.type+'_month');
        }

        let today = new Date();
        
        if (today.getFullYear() == date.year && today.getMonth() == date.month - 1 && today.getDate() == date.day) {
            classNames.push('today');
        }

        let dayClassNames = [];

        if (week == 0) {
            dayClassNames.push('sun');
        } else if(week == 6) {
            dayClassNames.push('sat');
        }

        let lunar = lunars(date.year, date.month, date.day);
        let num = lunar.date.substr(-1, 1);

        if (num == 9 || num == 0) {
            dayClassNames.push('moveday');
        }

        return (
            <td className={classNames.join(' ')}>
                {date.type == 'current' ? (
                    <span className={dayClassNames.join(' ')}>{date.day}</span>
                ) : (
                    date.day
                )}
            </td>
        )
    }
}

export default Cell;