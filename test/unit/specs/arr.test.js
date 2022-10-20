const arr = require('../../../src/modules/arr');

describe('数组通用方法模块', () => {
  test('判断是否是数组', () => {
    const testArr = [1, 2, 3];
    expect(arr.arrJudge(testArr)).toBe(true);
  });

  test('数组去重', () => {
    const testArr = [1, 2, 2, 3, 5, 5];
    expect(arr.removeRepeat(testArr));
  });
});
