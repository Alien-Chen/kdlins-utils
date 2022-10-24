const arr = require('../../../src/modules/arr');

describe('数组通用方法模块', () => {
  test('判断是否是数组', () => {
    const testArr = [1, 2, 3];
    expect(arr.arrJudge(testArr)).toBe(true);
  });

  test('数组去重', () => {
    const testArr = [1, 2, 2, 3, 5, 5];
    expect(arr.removeRepeat(testArr)).toEqual([1, 2, 3, 5]);
  });

  test('数组排序 升序', () => {
    const testArr = [2, 1, 6, 5];
    expect(arr.orderAscend(testArr, true)).toEqual([1, 2, 5, 6]);
  });

  test('数组排序 降序', () => {
    const testArr = [2, 1, 6, 5];
    expect(arr.orderAscend(testArr, false)).toEqual([6, 5, 2, 1]);
  });

  test('数组中的最大值', () => {
    const testArr = [9, 10, 100, 29, 89];
    expect(arr.arrMax(testArr)).toBe(100);
  });

  test('数组求和', () => {
    const testArr = [9, 100, 89, 200];
    expect(arr.arrSum(testArr)).toBe(398);
  });

  test('数组对象求和', () => {
    const testArr = [{ value: 9 }, { value: 8 }];
    expect(arr.arrObjSum(testArr, 'value')).toBe(17);
  });

  test('数组合并', () => {
    const arrOne = [1, 2];
    const arrTwo = [3, 4];
    expect(arr.arrConcat(arrOne, arrTwo)).toEqual([1, 2, 3, 4]);
  });

  test('数组中是否包含某个值', () => {
    const testArr = [4, 1, 8];
    expect(arr.includeValue(testArr, 4)).toBe(true);
  });

  test('求两数组的交集', () => {
    const arrOne = [1, 2, 5, 4];
    const arrTwo = [2, 3, 4];
    expect(arr.arrIntersection(arrOne, arrTwo)).toEqual([2, 4]);
  });

  test('求两数组的并集', () => {
    const arrOne = [1, 2, 5, 4];
    const arrTwo = [2, 3, 4];
    expect(arr.arrSet(arrOne, arrTwo)).toEqual([1, 2, 5, 4, 3]);
  });

  test('求两数组的差集', () => {
    const arrOne = [1, 4, 6, 7];
    const arrTwo = [4, 5, 9, 10];
    expect(arr.arrDifference(arrOne, arrTwo)).toEqual([1, 6, 7, 5, 9, 10]);
  });

  test('数组扁平化', () => {
    const arrTest = [1, [2, 5, 8, [7, 19, 18, [29]]], [10, 90]];
    expect(arr.flatten(arrTest)).toEqual([1, 2, 5, 8, 7, 19, 18, 29, 10, 90]);
  });
});
