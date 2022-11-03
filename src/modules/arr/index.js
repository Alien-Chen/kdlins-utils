/*
 * @file: array 数组相关工具
 * @Author: zqchen
 * @Last Modified by: zqchen
 */
module.exports = {
  /**
   * 判断是否是数组
   * @param {Array}} arr 数组
   */
  arrJudge: function (arr) {
    if (Array.isArray(arr)) {
      return true;
    }
    return false;
  },

  /**
   * 数组去重
   * @param {Array} arr  数组
   */
  removeRepeat: function (arr) {
    return Array.from(new Set(arr));
  },

  /**
   * 数组排序
   * @param {Array} arr  数组
   * @param {Boolean} ascendFlag   升序,默认为 true
   */
  orderAscend: function (arr, ascendFlag) {
    return arr.sort((a, b) => {
      return ascendFlag ? a - b : b - a;
    });
  },

  /**
   * 数组最大值
   * @param {Array} arr  数组
   */
  arrMax: function (arr) {
    return Math.max(...arr);
  },

  /**
   * 数组求和
   * @param {Array} arr 数组
   */
  arrSum: function (arr) {
    return arr.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  },

  /**
   * 数组对象求和
   * @param {Object} arrObj 数组对象
   * @param {String} key 数组对应的 key 值
   */
  arrObjSum: function (obj, key) {
    return obj.reduce((prev, cur) => {
      return prev + cur[key];
    }, 0);
  },

  /**
   * 数组合并,目前合并一维
   * @param {Array} arrOne 数组
   * @param {Array} arrTwo 数组
   */
  arrConcat: function (arrOne, arrTwo) {
    return [...arrOne, ...arrTwo];
  },

  /**
   * 数组是否包含某值
   * @param {Array} arr 数组
   * @param {}  value 值,目前只支持 String,Number,Boolean
   */
  includeValue: function (arr, value) {
    return arr.includes(value);
  },

  /**
   * 数组并集,只支持一维数组
   * @param {Array} arrOne
   * @param {Array} arrTwo
   */
  arrSet: function (arrOne, arrTwo) {
    return arrOne.concat(
      arrTwo.filter((v) => {
        return !arrOne.includes(v);
      })
    );
  },

  /**
   * 数组交集,只支持一维数组
   * @param {Array} arrOne
   * @param {Array} arrTwo
   */
  arrIntersection: function (arrOne, arrTwo) {
    return arrOne.filter((v) => arrTwo.includes(v));
  },

  /**
   * 数组差集,只支持一维数组
   * @param {Array} arrOne
   * @param {Array} arrTwo
   * eg: [1, 2, 3] [2, 4, 5] 差集为[1,3,4,5]
   */
  arrDifference: function (arrOne, arrTwo) {
    return arrOne
      .concat(arrTwo)
      .filter((v) => !arrOne.includes(v) || !arrTwo.includes(v));
  },

  /**
   * 数组扁平化
   * @param {Array} arr
   */
  flatten: function (arr) {
    return arr.reduce((prev, cur) => {
      return prev.concat(Array.isArray(cur) ? this.flatten(cur) : cur);
    }, []);
  },

  /** 判断数组的元素是否都相同 */
  isSameArrEle(arr) {
    const len = arr.length;
    let count = 0;
    const temp = arr[0];
    for (let i = 1; i < len; i++) {
      if (arr[i] === temp) {
        count++;
      }
    }
    return len - 1 === count;
  },

  /** 判断数值是升序还是降序 */
  determineOrder(arr) {
    if (arr.length < 2) {
      return 'not enough items';
    }
    let ascending = null;
    let nextArr = arr.slice(1);
    for (var i = 0; i < nextArr.length; i++) {
      if (nextArr[i] === arr[i]) {
        continue;
      } else if (ascending === null) {
        ascending = nextArr[i] > arr[i];
      } else if (ascending !== nextArr[i] > arr[i]) {
        return 'unsorted';
      }
    }
    if (ascending === null) {
      return 'all items are equal';
    }
    return ascending ? 'ascending' : 'descending';
  },

  /** 判断升序数组是否连续 */
  isAscendContinue(arr) {
    const len = arr.length;
    let isContinue = true;
    for (let i = 1; i < len; i++) {
      if (arr[0] + i !== arr[i]) {
        isContinue = false;
        break;
      }
    }
    return isContinue;
  },

  /** 判断降序数组是否连续 */
  isDescendContinue(arr) {
    const len = arr.length;
    let isContinue = true;
    for (let i = 1; i < len; i++) {
      if (arr[0] - i !== arr[i]) {
        isContinue = false;
        break;
      }
    }
    return isContinue;
  },
};
