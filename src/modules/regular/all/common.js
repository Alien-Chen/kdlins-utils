/*
 * @flie:
 * @Author: zqchen
 * @Date: 2022-10-13 16:43:06
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-17 17:05:31
 */

module.exports = {
  /** 手机号验证 */
  phoneTest: function (str) {
    if (!str) return false;
    const reg =
      /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    return reg.test(str);
  },

  /** 固定电话验证 */
  telePhoneTest: function (str) {
    if (!str) return false;
    return /^(0\d{2,3})-?(\d{7,8})$/.test(str);
  },

  /** 包含中文正则 */
  cnTest: function (str) {
    if (!str) return false;
    return /[\u4E00-\u9FA5]/.test(str);
  },

  /** 判断是否只包含字母 */
  letterTest: function (str) {
    if (!str) return false;
    const reg = /^[a-zA-Z]+$/g;
    return reg.test(str);
  },

  /** 判断是否全部是小写字母 */
  lowercaseLetterTest: function (str) {
    if (!str) return false;
    const reg = /^[a-z]+$/g;
    return reg.test(str);
  },

  /** 判断是否是大写字母 */
  capitalLetterTest: function (str) {
    if (!str) return false;
    const reg = /^[A-Z]+$/g;
    return reg.test(str);
  },

  /** 判断是否是字母或数字 */
  numOrLetterTest: function (str) {
    if (!str) return false;
    const reg = /^[0-9a-zA-Z]+$/g;
    return reg.test(str);
  },

  /** 判断是否是图片正则 */
  pictureFormatTest: function (str) {
    if (!str) return false;
    const reg = /(?:png|jpg|jpeg|JPG|PNG|JPEG)$/;
    return reg.test(str);
  },

  /** 判断excel文件后缀正则 */
  excelFormatTest: function (str) {
    if (!str) return false;
    const reg = /\.xl(s[xmb]|t[xm]|am)$/;
    return reg.test(str);
  },

  /** 判断IP正则 */
  ipTest: function (str) {
    if (!str) return false;
    const reg =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return reg.test(str);
  },

  /** 判断十六进制颜色正则 */
  rgbHexTest: function (str) {
    const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return reg.test(str);
  },

  /** 判断用户名正则, 4到16位（字母，数字，下划线，减号） */
  usernameTest: function (str) {
    const reg = /^[a-zA-Z0-9_-]{4,16}$/;
    return reg.test(str);
  },

  /** 银行卡号判断 */
  bandCardIdTest: function (str) {
    const reg = /^([1-9]{1})(\d{15}|\d{18})$/;
    return reg.test(str);
  },

  /** 中文姓名判断 */
  cnNameTest: function (str) {
    return /^([\u4e00-\u9fa5·]{2,16})$/.test(str);
  },

  /** 英文姓名判断 */
  enNameTest: function (str) {
    const reg = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;
    return reg.test(str);
  },

  /** 中国邮政编号判断 */
  postCodeTest: function (str) {
    const reg =
      /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;
    return reg.test(str);
  },
};
