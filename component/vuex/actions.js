/*!
 * exports all actions
 * 此文件用于保存所有vue控件event函数
 */

import * as types from './mutation-types';
import * as setters from './setters';
import * as getters from './getters';

export const counterEvents = {
   [types.INCREMENT]: function () {
       let count = getters.getCounterModelValue({key: 'count'});
       count += 1;
       setters.counterModelSetters.setValue({
           count: count
       });
   },
    [types.DECREMENT]: function () {
        let count = getters.getCounterModelValue({key: 'count'});
        count -= 1;
        setters.counterModelSetters.setValue({
           count: count
       });
    }
};

