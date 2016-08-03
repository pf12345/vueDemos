/*!
 * exports all actions
 * 此文件用于保存所有vue控件event函数
 */

import * as types from './mutation-types';
import store from './store';

export const counterEvents = {
   [types.INCREMENT]: function () {
       store.count += 1;
   },
    [types.DECREMENT]: function () {
        store.count -= 1;
    }
};

