/**
 * Created by Administrator on 2017-07-28.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/Calendar';

module.exports = function (element, options) {
    if (typeof element == 'string') {
        element = document.getElementById(element);
    }
    
    return ReactDOM.render(<Calendar {...options} />, element);
};
