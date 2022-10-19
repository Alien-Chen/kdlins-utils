/*
 * @file: sessionStorage 回话存储
 * @Author: zqchen
 * @Date: 2022-10-13 14:31:15
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-13 14:35:14
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
};
