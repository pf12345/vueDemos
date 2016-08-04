/*!
 * exports all get data
 * 此文件用于从store里面获取相关数据
 */
import store from './store';

const getValueFromObj = (key, obj) => {
    if(obj && key) {
        if(key.split('.').length > 1) {
            var keyArr = key.split('.');
            keyArr.splice(0, 1);
            return getValueFromObj(keyArr.join('.'), getValueFromObj(key.split('.')[0], obj));
        }else{
            return obj[key];
        }
    }
    return '';
};

const getter = ({key, module}) => {
    if (module && key && store && store[module]) {
        if(key.split('.').length > 1) {
            return getValueFromObj(key, store[module]);
        }else{
            return store[module][key];
        }
    }
    return '';
};

/**
 * 根据相关key获取首页工作板模块相关数据
 * @param key
 */
export const getCounterModelValue = ({key}) => {
    return getter({
        key: key,
        module: 'counterModel'
    });
};