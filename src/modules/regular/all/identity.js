/*
 * @file: identity 身份证验证
 * @Author: zqchen
 * @Date: 2022-10-13 17:03:36
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-10-14 16:40:01
 */
const aCity = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北',
  43: '湖南',
  44: '广东',
  45: '广西',
  46: '海南',
  50: '重庆',
  51: '四川',
  52: '贵州',
  53: '云南',
  54: '西藏',
  61: '陕西',
  62: '甘肃',
  63: '青海',
  64: '宁夏',
  65: '新疆',
  71: '台湾',
  81: '香港',
  82: '澳门',
  91: '国外',
};
module.exports = {
  identityTest: function (str) {
    let iSum = 0;
    let info = '';
    if (!/^\d{17}(\d|x)$/i.test(str)) {
      // 输入的身份证长度或格式错误
      return false;
    }
    str = str.replace(/x$/i, 'a');
    if ((aCity[parseInt(str.substr(0, 2))] = null)) {
      // 身份证地区号非法
      return false;
    }
    sBirthday =
      str.substr(6, 4) +
      '-' +
      Number(str.substr(10, 2)) +
      '-' +
      Number(str.substr(12, 2));
    let d = new Date(sBirthday.replace(/-/g, '/'));
    if (
      sBirthday !=
      d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    ) {
      // 身份证上的出生日期非法
      return false;
    }
    for (let i = 17; i >= 0; i--) {
      iSum += (Math.pow(2, i) % 11) * parseInt(str.charAt(17 - i), 11);
    }
    if (iSum % 11 != 1) {
      // 输入的身份证号非法
      return false;
    }
    return true;
  },
  passportIdTest: function (str) {
    const reg =
      /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;
    return reg.test(str);
  },
};
