/*
 * @Author: zqchen
 * @file: client 客户端 浏览器终端等相关判断
 * @Date: 2022-10-21 16:41:24
 * @Last Modified by: zqchen
 */

module.exports = {
  /**
   * 返回浏览器类型
   */
  checkBrowser: function () {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    console.log(userAgent);
    var isOpera =
      userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1; //判断是否Opera浏览器

    var isQQ = userAgent.indexOf('QQBrowser') > -1; //判断是否QQBrowser浏览器

    var isUC = userAgent.indexOf('UBrowser') > -1; //判断是否UC浏览器

    var isIE =
      userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; //判断是否IE7~IE10浏览器

    var isIE11 =
      userAgent.indexOf('compatible') === -1 &&
      userAgent.indexOf('Trident') > -1; //判断是否IE11浏览器

    var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器

    var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器

    var isSafari =
      userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1; //判断是否Safari浏览器

    var isChrome =
      userAgent.indexOf('Chrome') > -1 &&
      userAgent.indexOf('; Win') > -1 &&
      userAgent.indexOf('Safari') > -1; //判断Chrome浏览器

    var is360 =
      userAgent.indexOf('Chrome') > -1 &&
      userAgent.indexOf('; WOW') > -1 &&
      userAgent.indexOf('Safari') > -1; //判断360浏览器

    if (isIE) {
      var reIE = /MSIE (\d+)\.\d+;/;
      // match() 返回一个数组。数组第一项是匹配到的所有文本；数组第二项是正则中小括号匹配到的文本
      var matchReg = userAgent.match(reIE);
      var fIEVersion = matchReg[1];
      if (fIEVersion == 7) {
        return 'IE7及其以下';
      } else if (fIEVersion == 8) {
        return 'IE8';
      } else if (fIEVersion == 9) {
        return 'IE9';
      } else if (fIEVersion == 10) {
        return 'IE10';
      } else {
        return '0';
      } //IE版本过低
      return 'IE';
    }
    if (isUC) {
      return 'UC';
    }
    if (isQQ) {
      return 'QQBrowser';
    }
    if (isIE11) {
      return 'IE11';
    }
    if (isOpera) {
      return 'Opera';
    }
    if (isEdge) {
      return 'Edge';
    }
    if (isFF) {
      return 'Firefox';
    }
    if (isSafari) {
      return 'Safari';
    }
    if (isChrome) {
      return 'Chrome';
    }
    if (is360) {
      return '360';
    }
  },
  /**
   * 判断是浏览器内核
   */
  checkBrowserCore: function () {
    const u = navigator.userAgent;
    const obj = {
      trident: u.indexOf('Trident') > -1, // IE 内核
      presto: u.indexOf('Presto') > -1, // opera 内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
    };
    return Object.keys(obj)[Object.values(obj).indexOf(true)];
  },

  /**
   * 判断是终端类型,值有ios,android,iPad
   */
  checkIosAndroidIpad: function () {
    const u = navigator.userAgent;
    const obj = {
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
    };
    return Object.keys(obj)[Object.values(obj).indexOf(true)];
  },

  /**
   * 判断是否是微信,qq 或 uc
   */
  checkWeixinQqUc: function () {
    const u = navigator.userAgent;
    const obj = {
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信
      qq: u.match(/QQ/i) == 'qq' && !u.indexOf('MQQBrowser') > -1, //是否QQ
      uc: u.indexOf('UCBrowser') > -1,
    };
    return Object.keys(obj)[Object.values(obj).indexOf(true)];
  },

  /**
   * 检查是否是 IphoneX 以上的机型
   */
  checkIsIphoneX: function () {
    const u = navigator.userAgent;
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS && screen.height >= 812) {
      return true;
    }
  },
};
