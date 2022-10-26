/*
 * @file: sessionStorage 回话存储
 * @Author: zqchen
 * @Date: 2022-10-13 14:31:15
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-26 14:46:49
 */

module.exports = {
  get: function (name) {
    if (!name) return;
    return window.sessionStorage.getItem(name);
  },
  set: function (name) {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    return sessionStorage.setItem(name, content);
  },
  delete: function (name) {
    if (!name) return;
    sessionStorage.removeItem(name);
  },
  /**
   * sessionStorage 存储一段时间失效
   * @param {String} key 属性
   * @param {*} value 储存值
   * @param {*} expire 有效时长
   */
  setExpire: function (key, value, expire) {
    if (typeof value === 'object') value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
    setTimeout(() => {
      sessionStorage.removeItem(key);
    }, expire);
  },
};
