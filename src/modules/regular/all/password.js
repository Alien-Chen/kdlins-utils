/*
 * @file: password 正则
 * @Author: zqchen
 * @Date: 2022-10-13 15:45:26
 * @Last Modified by: zqchen
 * @Last Modified time: 2022-11-03 10:23:06
 */

// 禁止使用 ‘键盘密码’ 得验证方法
// 定义横向穷举
const keyCode = [
  [
    '`~',
    '1!！',
    '2@@',
    '3#',
    '4$￥',
    '5%',
    '6^……',
    '7&',
    '8*',
    '9(（',
    '0)）',
    '-_',
    '=+',
  ],
  [
    ' ',
    'qQ',
    'wW',
    'eE',
    'rR',
    'tT',
    'yY',
    'uU',
    'iI',
    'oO',
    'pP',
    '{[【',
    '}]】',
    '\\|',
  ],
  [' ', 'aA', 'sS', 'dD', 'fF', 'gG', 'hH', 'jJ', 'kK', 'lL', ':;', '\'"”“’‘'],
  [' ', 'zZ', 'xX', 'cC', 'vV', 'bB', 'nN', 'mM', '<《', '>》.', '/?？'],
];

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
  /** 禁止使用‘键盘密码’，即：不要使用键盘中‘横、竖、斜’方向的连续4个（含）按键组合 */
  keyPasswordTest(str) {
    // 记录 str所在坐标系 x 和 y
    let x = [];
    let y = [];
    let flag = true;
    for (let i = 0; i < str.length; i++) {
      const temp = str[i];
      for (let j = 0; j < keyCode.length; j++) {
        for (let k = 0; k < keyCode[j].length; k++) {
          const code = keyCode[j][k];
          // 为true 说明在我们穷举得二维数据中
          if (code.indexOf(temp) >= 0) {
            x.push(j);
            y.push(k);
            continue;
          }
        }
      }
    }
    // console.log(x, y)
    for (let i = 0; i < x.length; i++) {
      const xArr = x.slice(i, i + 4);
      const yArr = y.slice(i, i + 4);
      // console.log('abc:', xArr, yArr)
      const isXsame = isSameArrEle(xArr); // 用于判断文本内容是否都处于x轴
      const isYsame = isSameArrEle(yArr);
      // console.log(isXsame, xArr, yArr)
      if (isXsame && !isYsame) {
        // 横向 如果x轴相同就需要判断是升序还是降序
        const sortMode = determineOrder(yArr);
        // console.log(sortMode)
        if (sortMode === 'ascending') {
          // 如果是升序，判断是否连续，如果连续则不合法
          const isContinue = isAscendContinue(yArr);
          if (isContinue && yArr.length >= 4) {
            flag = false;
            break;
          }
        } else if (sortMode === 'descending') {
          // 如果是降序，判断是否连续，如果连续则不合法
          const isContinue = isDescendContinue(yArr);
          if (isContinue && yArr.length >= 4) {
            flag = false;
            break;
          }
        }
      } else if (isYsame && !isXsame) {
        // 竖向
        const sortMode = determineOrder(xArr);

        if (sortMode === 'ascending') {
          // 如果是升序，判断是否连续，如果连续则不合法
          const isContinue = isAscendContinue(xArr);
          if (isContinue && xArr.length >= 4) {
            flag = false;
            break;
          }
        } else if (sortMode === 'descending') {
          // 如果是降序，判断是否连续，如果连续则不合法
          const isContinue = isDescendContinue(xArr);
          if (isContinue && xArr.length >= 4) {
            flag = false;
            break;
          }
        }
      } else if (isYsame && isXsame && xArr.length >= 4) {
        // 都相同得情况,就是不合法得情况
        flag = false;
        break;
      }
    }
    return flag;
  },
};

// 判断数组得元素是否都相同
function isSameArrEle(arr) {
  const len = arr.length;
  let count = 0;
  const temp = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] === temp) {
      count++;
    }
  }
  return len - 1 === count;
}

// 判断数组是升序还是降序
function determineOrder(arr) {
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
}

// 判断升序数组是否连续
function isAscendContinue(arr) {
  const len = arr.length;
  let isContinue = true;
  for (let i = 1; i < len; i++) {
    if (arr[0] + i !== arr[i]) {
      isContinue = false;
      break;
    }
  }
  return isContinue;
}

// 判断降序数组是否连续
function isDescendContinue(arr) {
  const len = arr.length;
  let isContinue = true;
  for (let i = 1; i < len; i++) {
    if (arr[0] - i !== arr[i]) {
      isContinue = false;
      break;
    }
  }
  return isContinue;
}
