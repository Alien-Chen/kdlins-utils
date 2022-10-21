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
