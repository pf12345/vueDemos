/*!
 *  all filters
 *  此文件用于所有过滤器
 */

/**
 * 获取用户信息
 * @param uid
 * @returns {*}
 */
export const getUserInfo = (uid) => {
    if(uid && orgUtil && orgUtil.getUserInfo && orgUtil.getUserInfo(uid)) {
        return orgUtil.getUserInfo(uid);
    }
    return null;
};

/**
 * 获取用户用户名
 * @param uid
 * @returns {*}
 */
export const getUserNickname = (uid)=> {
    if(getUserInfo(uid)) {
        return getUserInfo(uid).nickname;
    }
    return '';
};
