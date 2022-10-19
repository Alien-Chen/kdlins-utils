/*
 * @file: password 正则
 * @Author: zqchen
 * @Date: 2022-10-13 15:45:26
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-13 16:11:19
 */

module.exports = {
  /** 匹配纯数字8位以上的密码 */
  purePasswordTest: function (str) {
    if (!str) return false;
    return /\d{8,}/.test(str);
  },
  /** 大小写字符 + 数字密码， 8-16位以上 */
  strongPasswordTest: function (str) {
    if (!str) return false;
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/.test(str);
  },
  /** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/符号  8位-16位 */
  complexPasswordTest: function (str) {
    if (!str) return false;
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/]).{8,16}$/.test(str);
  },
  /** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/?\@\!\#\$\%\^\&\*\(\)\_\' \"等, 8-16位 */
  mostComplexPasswordTest(str) {
    if (!str) return false;
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/\!\@\#\$\%\^\&\*\.\(\)\?\>\<\:\;\"\'\_]).{8,16}$/.test(
      str
    );
  },
};
