module.exports = {
  /**
   * 节流
   * @param {*} fn 执行函数
   * @param {*} delay 节流时间,毫秒
   */
  throttle: function (fn, delay) {
    var t = null,
      begin = new Date().getTime();
    return function () {
      var _self = this,
        args = arguments,
        cur = new Date().getTime();
      clearTimeout(t);
      if (cur - begin >= delay) {
        fn.apply(_self, args);
        begin = cur;
      } else {
        t = setTimeout(() => {
          fn.apply(_self, args);
        }, delay);
      }
    };
  },
  /**
   * 防抖
   * @param {*} fn 执行函数
   * @param {*} time 防抖时间,毫秒
   * @param {*} triggleNow 是否立即执行
   */
  debounce: function (fn, time, triggleNow) {
    var t = null;
    var debounced = function () {
      var _self = this,
        args = arguments;
      if (t) {
        clearTimeout(t);
      }
      if (triggleNow) {
        var exec = !t;
        t = setTimeout(() => {
          t = null;
        }, time);
        if (exec) {
          fn.apply(_self, args);
        }
      } else {
        t = setTimeout(() => {
          fn.apply(_self, args);
        }, time);
      }
    };
    debounced.remove = function () {
      clearTimeout(t);
      t = null;
    };
    return debounced;
  },
};
