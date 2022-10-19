/*
 * @file: number 数字相关
 * @Author: zqchen
 * @Date: 2022-10-13 17:03:36
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-17 15:58:37
 */
module.exports = {
  /** 判断是数值类型 */
  numTest: function (num) {
    const reg = /^(\+|\-)?[0-9]+(\.\d+)?$/;
    return reg.test(num);
  },
  /** 匹配正整数 */
  positiveNumTest: function (num) {
    const reg = /^(\+)?[1-9]\d*$/;
    return reg.test(num);
  },
  /** 匹配负整数 */
  minusNumTest: function (num) {
    const reg = /^-[1-9]\d*$/;
    return reg.test(num);
  },
  /**
   *  保留几位小数的浮点数
   * @param {String|Number} num
   * @param {Number} fnum 浮点数
   */
  floatNumTest: function (num, fnum = 1) {
    const reg = new RegExp(`^(\\+|\\-)?[0-9]+(\.[0-9]{${fnum}}){1}$`);
    return reg.test(num);
  },
};
