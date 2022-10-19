const password = require('../../../src/modules/regular/all/password.js');
const number = require('../../../src/modules/regular/all/number.js');
const identity = require('../../../src/modules/regular/all/identity.js');
const email = require('../../../src/modules/regular/all/email.js');
const common = require('../../../src/modules/regular/all/common.js');

describe('正则regular 模块', () => {
  test('purePasswordTest 纯数字密码正则是否正常', () => {
    expect(password.purePasswordTest('12383339')).toBe(true);
  });
  test('strongPasswordTest 大小写 +  数字测试', () => {
    expect(password.strongPasswordTest('xQ123458')).toBe(true);
  });
  test('complexPasswordTest 数字+大小写字符+符号 支持+-*/符号  8位-16位 测试', () => {
    expect(password.complexPasswordTest('xQ*123458')).toBe(true);
  });
  test('mostComplexPasswordTest  数字+大小写字符+符号 支持+-*/?@!#$%^&*()_\' "8位-16位 测试', () => {
    expect(password.mostComplexPasswordTest('xQ@123458')).toBe(true);
  });
});

describe('正则 number 模块', () => {
  test('判断是否是number类型', () => {
    expect(number.numTest('23458.0')).toBe(true);
  });
  test('判断是否是正整数', () => {
    expect(number.positiveNumTest('+23458')).toBe(true);
  });
  test('判断是否是负整数', () => {
    expect(number.minusNumTest('-23458')).toBe(true);
  });
  test('保留几位小数的浮点数', () => {
    expect(number.floatNumTest('-23458.012', 3)).toBe(true);
  });
});

describe('正则 identity 模块', () => {
  test('验证是否是正确的身份证号', () => {
    expect(identity.identityTest('53010219200508011x')).toBe(true);
  });
  test('验证是否是正确的护照号', () => {
    expect(identity.passportIdTest('E90998909')).toBe(true);
  });
});

describe('正则 email 模块', () => {
  test('验证通用邮箱', () => {
    expect(email.commonEmailTest('779766@123.com.cn')).toBe(true);
  });
  test('验证谷歌邮箱', () => {
    expect(email.gmailTest('1123234@gmail.com')).toBe(true);
  });
  test('验证qq邮箱', () => {
    expect(email.qqEmailTest('779766@qq.com')).toBe(true);
  });
});

describe('正则 common 模块', () => {
  test('验证手机号验证', () => {
    expect(common.phoneTest('19979261316')).toBe(true);
  });
  test('验证固定电话验证', () => {
    expect(common.telePhoneTest('0539-5908767')).toBe(true);
  });
  test('验证包含中文正则', () => {
    expect(common.cnTest('大000ww')).toBe(true);
  });
  test('验证是否只包含字母', () => {
    expect(common.letterTest('w')).toBe(true);
  });
  test('验证是否全部是小写字母', () => {
    expect(common.lowercaseLetterTest('kjljw')).toBe(true);
  });
  test('验证是否大写字母', () => {
    expect(common.capitalLetterTest('KJI')).toBe(true);
  });
  test('验证是否是字母或数字', () => {
    expect(common.numOrLetterTest('KJI')).toBe(true);
  });
  test('验证是否是图片正则', () => {
    expect(common.pictureFormatTest('abc.png')).toBe(true);
  });
  test('验证是否是excel文件', () => {
    expect(common.excelFormatTest('abc.xlsx')).toBe(true);
  });
  test('验证是否是excel文件', () => {
    expect(common.excelFormatTest('abc.xlsx')).toBe(true);
  });
  test('验证是否是正确ip', () => {
    expect(common.ipTest('192.168.13.239')).toBe(true);
  });
  test('验证16进制颜色', () => {
    expect(common.rgbHexTest('#000000')).toBe(true);
  });
  test('验证用户名正则, 4到16位（字母，数字，下划线，减号）', () => {
    expect(common.usernameTest('ab_-89797')).toBe(true);
  });
  test('验证银行卡号', () => {
    expect(common.bandCardIdTest('6225365271562822')).toBe(true);
  });
  test('验证中文名称', () => {
    expect(common.cnNameTest('彭于晏')).toBe(true);
  });
  test('验证英文名称', () => {
    expect(common.enNameTest('lady gaga')).toBe(true);
  });
  test('验证邮政编号', () => {
    expect(common.postCodeTest('361000')).toBe(true);
  });
});
