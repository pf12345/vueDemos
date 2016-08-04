/*!
 * exports all set data
 * 此文件用于对store里面相关数据赋值
 */
import store from './store';
import Vue from 'vue';


const setValueToObj = (key, obj, newValue) => {
    if(obj && key) {
        if(key.split('.').length > 1) {
            let keyArr = key.split('.');
            let nowKey = keyArr[0];
            keyArr.splice(0, 1);
            setValueToObj(keyArr.join('.'), obj[nowKey], newValue);
        }else{
            obj[key] = newValue;
        }
    }
};

/**
 * 使用arguments 赋值公用
 * @param _arguments 模块中,理论上所有的可赋值修改的字段名称
 * @param obj 需要重新赋值的对象
 * @param moduleType 设置的值所属模块
 * @param nextTickFun 在值设置完成后,页面数据加载成功需要执行的其他操作
 */
const setValueForArguments = (_arguments, obj, moduleType, nextTickFun)=> {
    if (_arguments && _arguments.length && moduleType) {
        for (let i = 0, _i = _arguments.length; i < _i; i++) {
            if (_arguments[i] && obj[_arguments[i]] !== undefined) {
                if(_arguments[i].split('.').length > 1) {
                    setValueToObj(_arguments[i], store[moduleType], obj[_arguments[i]]);
                }else{
                    store[moduleType][_arguments[i]] = obj[_arguments[i]];
                }
            }
        }
        if (nextTickFun && typeof nextTickFun === 'function') {
            Vue.nextTick(() => {
                nextTickFun();
            });
        }
    }
};

/**
 * 使用arguments 给相关布尔值赋值公用
 * @param _arguments 模块中,理论上所有的可赋值修改的字段名称
 * @param obj 需要重新赋值的对象
 * @param moduleType 设置的值所属模块
 * @param nextTickFun 在值设置完成后,页面数据加载成功需要执行的其他操作
 */
const setValueForArgumentsBoolean = (_arguments, obj, moduleType, nextTickFun) => {
    if (_arguments && _arguments.length && moduleType) {
        for (let i = 0, _i = _arguments.length; i < _i; i++) {
            if (_arguments[i] && obj[_arguments[i]] !== undefined && typeof obj[_arguments[i]] === 'boolean') {
                if(_arguments[i].split('.').length > 1) {
                    setValueToObj(_arguments[i], store[moduleType], obj[_arguments[i]]);
                }else{
                    store[moduleType][_arguments[i]] = obj[_arguments[i]];
                }
            }
        }
        if (nextTickFun && typeof nextTickFun === 'function') {
            Vue.nextTick(() => {
                nextTickFun();
            });
        }
    }
};

//设置store里面,设置counter data
export const counterModelSetters = {
    setValue: (obj, nextTickFun) => {
        //需要赋值相关字段
        var _arguments = [
            'count'
        ];
        setValueForArguments(_arguments, obj, 'counterModel', nextTickFun);
    }
};
