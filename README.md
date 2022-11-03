## 使用
```
npm i -S kdlins-utils 
import utils from 'kdlins-utils'  
console.log(utils.regular.purePasswordTest('1234'))
```

## Array 数组相关处理的公共方法
备注:目前数组相关工具类只支持一维数组  

|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|arrJudge|判断是否是数组|Boolean 值|arr|1.0.1|
|removeRepeat|移除数组中重复的项|arr|Array，处理的数组值|1.0.1|
|orderAscend|数组排序|arr|Array，处理的数组值|1.0.1|
|arrMax|数组中最大值|arr|Array，处理的数组值|1.0.1|
|arrSum|数组求和|arr|Array，处理的数组值|1.0.1|
|arrObjSum|数组对象求和|arr|Array，处理的数组值|1.0.1|
|arrConcat|数组合并|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|1.0.1|
|includeValue|数组中是否包含某值|arr： 数组； value： 判断的值|Array，处理的数组值|1.0.1|
|arrSet|数组并集|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|1.0.1|
|arrIntersection|数组交集|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|1.0.1|
|arrDifference|数组差集|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|1.0.1|
|flatten|数组扁平化|arr|Array，处理的数组值|1.0.3|
|isSameArrEle|判断数组的元素是否都相同 |arr|boolean,数组元素是否都相同|1.0.5-5|
|determineOrder|判断数值是升序还是降序 |arr|string（'not enough items'-> 没有足够长度的子项，'unsorted'->无规律的数组，'all items are equal'-> 所有子项都相等,'ascending'->升序，'descending'->降序），|1.0.5-5|
|isAscendContinue|判断升序数组是否连续 |arr|boolean,升序数组是否连续|1.0.5-5|
|isDescendContinue|判断降序数组是否连续 |arr|boolean,降序数组是否连续|1.0.5-5|
### 使用
```js
import utils from 'kdlins-utils'
utils.arr.arrJudge([])
```



## regular 常用正则校验规则
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|purePasswordTest|验证是否是纯数字密码|str： 判断的值|Boolean 值| 1.0.0|
|strongPasswordTest|验证是否是强密码,规则(大小写 + 数字测试)|str|Boolean 值|1.0.0|
|complexPasswordTest|验证是否是复杂密码,规则(数字+大小写字符+符号 支持+-*/符号  8位-16位)|str|Boolean 值|1.0.0|
|mostComplexPasswordTest|验证更加复杂的密码,规则(数字+大小写字符+符号 支持+-*/?@!#$%^&*()_\' "8位-16位)|str|Boolean 值|1.0.0|
|numTest|验证是否是数字|str|Boolean 值|1.0.0|
|positiveNumTest|验证是否是正整数|str|Boolean 值|1.0.0|
|minusNumTest|验证是否是负整数|str|Boolean 值|1.0.0|
|floatNumTest| 验证保留几位小数|str:判断的数值，fnum: 保留几位小数|Boolean 值|1.0.0|
|identityTest|验证是否是正确的身份证号|str|Boolean 值|1.0.0|
|passportIdTest| 验证是否是正确的护照号| str|Boolean 值|1.0.0|
|commonEmailTest| 验证通用邮箱| str|Boolean 值|1.0.0|
|gmailTest| 验证谷歌邮箱| str|Boolean 值|1.0.0|
|qqEmailTest| 验证qq邮箱| str|Boolean 值|1.0.0|
|phoneTest| 验证手机号验证| str|Boolean 值|1.0.0|
|telePhoneTest| 验证固定电话验证| str|Boolean 值|1.0.0|
|cnTest| 验证包含中文正则| str|Boolean 值|1.0.0|
|letterTest| 验证是否只包含字母| str|Boolean 值|1.0.0|
|lowercaseLetterTest| 验证是否全部是小写字母| str|Boolean 值|1.0.0|
|capitalLetterTest| 验证是否大写字母| str|Boolean 值|1.0.0|
|numOrLetterTest| 验证是否是字母或数字| str|Boolean 值|1.0.0|
|pictureFormatTest| 验证是否是图片正则| str|Boolean 值|1.0.0|
|excelFormatTest| 验证是否是excel文件| str|Boolean 值|1.0.0|
|ipTest| 验证是否是正确ip| str|Boolean 值|1.0.0|
|rgbHexTest| 验证16进制颜色| str|Boolean 值|1.0.0|
|usernameTest| 验证用户名正则, 4到16位（字母，数字，下划线，减号）'| str|Boolean 值|1.0.0|
|bandCardIdTest| 验证银行卡号| str|Boolean 值|1.0.0|
|cnNameTest| 验证中文名称| str|Boolean 值|1.0.0|
|enNameTest| 验证英文名称| str|Boolean 值|1.0.0|
|postCodeTest| 验证邮政编号| str|Boolean 值|1.0.0|
|keyPasswordTest| 禁止使用‘键盘密码’，即：不要使用键盘中‘横、竖、斜’方向的连续4个（含）按键组合| str|Boolean 值|1.0.5-5|
### 使用
```js
import utils from 'kdlins-utils'
utils.regular.purePasswordTest('12345')
```


## Signature 利用canvas实现的签名功能的公共方法
|方法名|作用|参数|版本|
|--|--|--|--|
|Draw|签名类的构造函数|canvas canvas标签, degree 画布旋转弧度, config context相关配置| 1.0.2|

### 使用
```js
import utils from 'kdlins-utils'
const canvas = document.querySelector('canvas')
const draw = new utils.Signature(canvas, 0)

// 实例提供的方法
draw.getPNGImage() // 将canvas转换为png
draw.getJPGImage() // 将canvas转换为jpeg
draw.downloadPNGImage(img) // 下载图片到本地
draw.dataURLtoBlob(dataUrl) // 转换为blob
draw.clear() // 清楚画板
draw.upload(blob, url, success, failure) // 上传签名 blob img被转为blob格式，url api接口名称，success 成功回调，failure 失败回调
```

## Client 判断浏览器，手机型号相关方法
|方法名|作用|参数|版本|
|--|--|--|--|
|checkBrowser|返回浏览器类型|无| 1.0.3|
|checkBrowserCore|返回浏览器内核|无| 1.0.3|
|checkIosAndroidIpad|判断是终端类型,值有ios,android,iPad|无| 1.0.3|
|checkWeixinQqUc|判断是否是微信,qq 或 ucd|无| 1.0.3|
|checkIsIphoneX|检查是否是 IphoneX 以上的机型d|无| 1.0.3|

### 使用
```js
import utils from 'kdlins-utils'
utils.client.checkIsIphoneX()
```

## Http 对 axios 的二次封装
|方法名|作用|参数|版本|
|--|--|--|--|
|HttpRequest|对axios的二次封装|baseUrl 请求的基础路径，store vuex的store，publicConfig 项目中的公共配置其中需要配置一个publicPath属性用于筛选出一些不需要登录就能访问得接口| 1.0.4|

### 使用
```js
import utils from 'kdlins-utils'
import config from '../config'
import store from '@/store'
const baseUrl = process.env.NODE_ENV === 'dev' ? config.BaseUrl.dev : config.BaseUrl.prod
export default new utils.http.HttpRequest(baseUrl, store, config)
```

## 节流防抖 模块
|方法名|作用|参数|版本|
|--|--|--|--|
|throttle|节流|fn 执行函数，delay 节流时间(毫秒)| 1.0.5|
|debounce|防抖|fn 执行函数，delay 节流时间(毫秒), triggleNow 是否立即执行| 1.0.5|
### 使用
```js
import utils from 'kdlins-utils'
const testFn = function () { console.log('test thrDeb') }
// 节流
utils.thrDeb.throttle(testFn, 100)
// 防抖
utils.thrDeb.debounce(testFn, 100, true)()
```
## localStorage 模块
|方法名|作用|参数|版本|
|--|--|--|--|
|get|获取localStorage上的属性值|name 属性值| 1.0.5|
|set|设置 localStorage|name 需要设置的属性，content 需要设置的属性值| 1.0.5|
|delete|删除 localStorage|name 需要删除的属性| 1.0.5|
|setExpire|localStorage 存储一段时间失效|key 属性， value 储存值，expire有效时长| 1.0.5-4|
### 使用
```js
import utils from 'kdlins-utils'
utils.localStorage.get('name')
```

## sessionStorage 模块
|方法名|作用|参数|版本|
|--|--|--|--|
|get|获取sessionStorage上的属性值|name 属性值| 1.0.5|
|set|设置 sessionStorage|name 需要设置的属性，content 需要设置的属性值| 1.0.5|
|delete|删除 sessionStorage|name 需要删除的属性| 1.0.5|
|setExpire|sessionStorage 存储一段时间失效|key 属性， value 储存值，expire有效时长| 1.0.5-4|
### 使用
```js
import utils from 'kdlins-utils'
utils.sessionStorage.get('name')
```

## cookie 操作相关 模块
|方法名|作用|参数|版本|
|--|--|--|--|
|set|存在 cookie数据可添加过期时间|key 属性值，value 值，expire过期时间(单位天)| 1.0.5-4|
|get|用key获取cookie 值|key 属性| 1.0.5-4|
|remove|删除 cookie|key 需要删除的属性| 1.0.5-4|
### 使用
```js
import utils from 'kdlins-utils'
utils.cookie.get('name')
```