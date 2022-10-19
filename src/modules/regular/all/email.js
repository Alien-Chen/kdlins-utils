/*
 * @file: 邮箱相关
 * @Author: zqchen
 * @Date: 2022-10-13 16:15:59
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-17 16:50:36
 */

module.exports = {
  /** 匹配通用邮箱 */
  commonEmailTest: function (str) {
    if (!str) return false;
    return /^\w+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
  },
  /** 匹配谷歌邮箱 */
  gmailTest: function (str) {
    if (!str) return false;
    return /^\w+@gmail.com$/.test(str);
  },
  /** 匹配qq邮箱 */
  qqEmailTest: function (str) {
    if (!str) return false;
    return /^\w+@qq.com$/.test(str);
  },
};
