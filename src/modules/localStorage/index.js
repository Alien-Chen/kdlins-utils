/*
 * @file: localStorage 本地缓存
 * @Author: zqchen
 * @Date: 2022-10-13 14:15:40
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-13 14:23:51
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
};
