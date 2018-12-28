var Crypto = require('./crypto')
var cp = new Crypto('you secret code')

var base64 = cp.base('123456')
console.log(base64)
// => 
// 2VyW6u0OSBYr5VIYRhJ5FXLOtec=

var hex = cp.hex('123456')
console.log(hex)
// =>
// d95c96eaed0e48162be552184612791572ceb5e7

console.log( cp.baseToHex('2VyW6u0OSBYr5VIYRhJ5FXLOtec=') )
// =>
// d95c96eaed0e48162be552184612791572ceb5e7

console.log( cp.hexToBase('d95c96eaed0e48162be552184612791572ceb5e7') )
// =>
// 2VyW6u0OSBYr5VIYRhJ5FXLOtec=
