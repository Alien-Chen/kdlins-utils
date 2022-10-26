/*
 * @file: localStorage 本地缓存
 * @Author: zqchen
 * @Date: 2022-10-13 14:15:40
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-26 14:47:03
 */

module.exports = {
  get: function (name) {
    if (!name) return;
    return window.localStorage.getItem(name);
  },
  set: function (name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    return window.localStorage.setItem(name, content);
  },
  delete: function (name) {
    if (!name) return;
    window.localStorage.removeItem(name);
  },

  /**
   * localStorage 存储一段时间失效
   * @param {String} key 属性
   * @param {*} value 储存值
   * @param {*} expire 有效时长
   */
  setExpire: function (key, value, expire) {
    if (typeof value === 'object') value = JSON.stringify(value);
    localStorage.setItem(key, value);
    setTimeout(() => {
      localStorage.removeItem(key);
    }, expire);
  },
};
