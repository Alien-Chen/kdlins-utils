## 使用
```
npm i -S kdlins-utils 
import utils from 'kdlins-utils'  
console.log(utils.regular.purePasswordTest('1234'))
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