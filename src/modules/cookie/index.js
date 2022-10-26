module.exports = {
  /**
   * cookie 存贮
   * @param {*} key 属性
   * @param {*} value 值
   * @param {*} expire 过期时间，单位天
   */
  set: function (key, value, expire) {
    const d = new Date();
    d.setDate(d.getDate() + expire);
    document.cookie = `${key}=${value};expire=${d.toGMTString()}`;
  },

  /**
   * cookie 获取
   * @param {string} key 属性
   */
  get: function (key) {
    const cookieStr = decodeURI(document.cookie);
    const arr = cookieStr.split('; ');
    let cookieValue = '';
    for (var i = 0; i < arr.length; i++) {
      const temp = arr[i].split('=');
      if (temp[0] === key) {
        cookieValue = temp[1];
        break;
      }
    }
    return cookieValue;
  },

  /**
   * cookie 删除
   * @param {*} key
   */
  remove: function (key) {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
  },
};
